const searchBar = document.getElementById('searchBar');

const submitUrl = async () => {
    let response = await axios({
        method: 'POST', 
        url: 'api/url/shorten', 
        data: {
            longUrl: searchBar.value
        }
    })
    console.log(response)
}

const subBtn = document.getElementById('shortenURLbtn')
subBtn.addEventListener('click', submitUrl)