function displayitem()
{
    let product = JSON.parse(localStorage.getItem('myProduct'));

    let img = product.imgurl;

    document.getElementById('quickpic').src = img;
    document.getElementById('name').innerHTML = product.name;
    document.getElementById('parent').innerHTML = product.parent;
    document.getElementById('model').innerHTML = product.model;

    let spec = product.specs;
    document.getElementById('processor').innerHTML = spec.processor;
    document.getElementById('ram').innerHTML = spec.ram;
    document.getElementById('rom').innerHTML = spec.rom;
    document.getElementById('duos').innerHTML = spec.duos;
    document.getElementById('speed').innerHTML = spec.speed;
    document.getElementById('4g').innerHTML = spec.support;
}