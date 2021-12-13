/* This is a POST route that takes an incoming request with a long URL and creates a short URL  
inserting it into the database. */

// packages needed in this file
const express = require('express')
const shortid = require('shortid')

// creating express route handler
const router = express.Router()

// import the Url database model
const Url = require('../models/UrlModel')

router.post('/shorten', async (req, res) => {
    try {
        const {
            longUrl
        } = req.body // destructure the longUrl from req.body.longUrl
    
        if (longUrl) {
            // if valid, we create the url code
            const urlCode = shortid.generate()
    
            /* The findOne() provides a match to only the subset of the documents 
            in the collection that match the query. In this case, before creating the short URL,
            we check if the long URL was in the DB ,else we create it.
            */
            let url = await Url.findOne({
                longUrl
            })
            // url exist and return the respose
            if (url) {
                res.json(url)
            } else {
                // join the generated short code the the base url
                const shortUrl = req.hostname + '/api/' + urlCode
                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } else {
            res.status(400).json({ message: 'Please provide a longUrl'})
        }
    }
    // exception handler
    catch (err) {
        console.log(err.message)
        res.status(500).json('Server Error')
    }
})

module.exports = router