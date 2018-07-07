let component = document.getElementById('state');
let s = "";
let c = [];


function fillOptions(comp)
{
    s = comp.value;
    console.log(state);
    sendRequest();
}

function sendRequest()
{
    let json = "";
    let obj = new XMLHttpRequest();
    obj.onload = function () {
        if(obj.readyState === 4 && (obj.status >= 200 && obj.status < 400))
        {
            json = JSON.parse(obj.responseText);
            console.log(json);
            clearCities();
            filterCities(json);
        }
    }
    obj.open('GET','data/StateCity.json', true);
    obj.send();
}

function clearCities()
{
    let optionMenu = document.getElementById('city');
    let city = optionMenu.options;
    for (let i = 0; i <= city.length; i++)
    {
        optionMenu.removeChild();
    }
}

function filterCities(v)
{
    let data = v.data;
    for (let i = 0; i< data.length; i++)
    {
        let tempObj = data[i];
        if(s === tempObj.state)
        {
            c= tempObj.city;
            break;
        }
    }

    let cityComponent = document.getElementById('city');
    for (let j = 0; j < c.length; j++)
    {
        let option = document.createElement('option');
        option.value = c[j];
        option.innerHTML = c[j];
        cityComponent.append(option);
    }

}