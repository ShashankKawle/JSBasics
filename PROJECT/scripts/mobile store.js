let items = [];
let ch = 0;

function select(choice)
{
    ch = choice;
    let xml = new XMLHttpRequest();
    xml.onload = function()
    {
        items = JSON.parse(xml.responseText);
        localStorage.setItem('myProduct', JSON.stringify(items.products[ch]));
    }
    xml.open('GET','data/productList.json',true);
    xml.send();
}

