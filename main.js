function Collect() {
    let input = document.querySelector('.inputIP').value
    console.log(input)
    ApiRequest(input)
}

async function ApiRequest(input) {
    let URL = `http://ipinfo.io/${input}?token=1e052b4ff64df0`
    let data = await fetch(URL).then(response => response.json())
    console.log(data)
    DisplayData(data)
}

function DisplayData(data) {
    document.querySelector('.region').value = data.region
    document.querySelector('.Country').value = data.country
    document.querySelector('.city').value = data.city
    document.querySelector('.postal').value = data.postal
    document.querySelector('.hostname').value = data.hostname
}

function Clear() {
    document.querySelector('.region').value = ''
    document.querySelector('.Country').value = ''
    document.querySelector('.city').value = ''
    document.querySelector('.postal').value = ''
    document.querySelector('.hostname').value = ''
    document.querySelector('.inputIP').value = ''
}