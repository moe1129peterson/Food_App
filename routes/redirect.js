/* This a GET for the URL redirects. Taking the short URL and redirecting it to the actual long URL 
in the browser. */

const express = require('express')

const router = express.Router()

const Url = require('../models/UrlModel')

// READ and UPDATE
router.get('/:code', async (req, res) => {
    try {
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
            let updatedUrl = await Url.findByIdAndUpdate(url._id, { hitCounter: url.hitCounter + 1 }, { new: true })
            // when valid we perform a redirect
            return res.redirect(updatedUrl.longUrl)
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router
