
function CallZiptastic(zipcode)
{
    let url = 'http://ziptasticapi.com/'+zipcode;
    let xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.onload = function(){updateCode(this);};
    xmlhttprequest.open('GET', url ,true);
    xmlhttprequest.send();
}

function updateCode(req)
{
    if(req.readyState == 4 && (req.status >= 200 && req.status < 400))
    {
        let j = JSON.parse(req.responseText);
        document.getElementById('country').innerHTML = j.country;
        document.getElementById('city').innerHTML = j.city;
        document.getElementById('state').innerHTML = j.state;
    }
}