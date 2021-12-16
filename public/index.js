const searchBar = document.getElementById('searchBar');
const shortUrl = document.getElementById('shortUrl')
let shortId


let submitUrl = async () => {
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
        deleteBtn.style.display = 'block'
        copyButton.style.display = 'block'
        shortId = response.data._id
    }
}

const copyButton = document.getElementById('copyBtn');

copyButton.addEventListener('click', (event) => {
    const content = document.getElementById('shortUrl').textContent;
    navigator.clipboard.writeText(content);
});

const subBtn = document.getElementById('shortenURLbtn')
subBtn.addEventListener('click', submitUrl)



const deleteUrl = async () => {
    let response = await axios({
        method: 'DELETE', 
        url: 'api/url/' + shortId, 
    })
    if (response.status === 200) {
        shortUrl.innerHTML = response.data.shortUrl
        shortUrl.style.display = 'none'
        deleteBtn.style.display = 'none'
        copyButton.style.display = 'none'
        document.getElementById('searchBar').value = ''
    }
}


const deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener('click', deleteUrl)


