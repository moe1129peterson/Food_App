const searchBar = document.getElementById('searchBar');
const shortUrl = document.getElementById('shortUrl')
let shortId


const submitUrl = async () => {
    let response = await axios({
        method: 'POST', 
        url: 'api/url/shorten', 
        data: {
            longUrl: searchBar.value
        }
    })
    if (response.status === 200) {
        shortUrl.innerHTML = response.data.shortUrl
        shortUrl.style.display = 'block'
        shortId = response.data._id
    }
}

const subBtn = document.getElementById('shortenURLbtn')
subBtn.addEventListener('click', submitUrl)

const deleteUrl = async () => {
    let response = await axios({
        method: 'DELETE', 
        url: 'api/url/' + shortId, 
    })
    if (response.status === 200) {
        shortUrl.innerHTML = response.data.shortUrl
        shortUrl.style.display = 'block'
    }
}




const deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener('click', deleteUrl)