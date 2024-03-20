function dashboard(){
    window.location.href='dashboard.html'
}
function myfile(){
    window.location.href='myfiles.html'
}
function templates(){
    window.location.href='templates.html'
}
function users(){
    window.location.href='users.html'
}
function login(){
    window.location.href='Login.html'
}
const images = ["img1.jpg","img2.jpg","imgg3.jpg"];
let currentImageIndex = 0;
const imageElement = document.getElementById("currentImage");

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

setInterval(changeImage, 1000);
