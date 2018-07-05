let img1Likes = 0;
let img2Likes = 0;

function Like1st()
{
    img1Likes++;
    document.getElementById('image1Likes').innerHTML = img1Likes.toString();
}

function Like2nd()
{
    img2Likes++;
    document.getElementById('image2Likes').innerHTML = img2Likes.toString();
}