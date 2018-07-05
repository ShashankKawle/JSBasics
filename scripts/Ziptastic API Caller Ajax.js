function CallZiptastic(zipcode)
{
    let url = 'http://ziptasticapi.com/'+zipcode;
    let xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.onreadystatechange = updateCode(xmlhttprequest.response);
    xmlhttprequest.open('GET', url ,true);
    xmlhttprequest.send();
}

function updateCode(res)
{
    if(res.readyState == 4 && (res.status >= 200 && res.status < 400))
    {
        let json = JSON.parse(res.text);
        document.getElementById('country').innerHTML = json.country;
        document.getElementById('city').innerHTML = json.city;
        document.getElementById('state').innerHTML = json.state;
    }
}