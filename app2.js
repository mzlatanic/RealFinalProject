let photos = [
    'images/shultz1.jpg',
    'images/serious.jpg',
    'images/streetLamp.jpg',
    'images/hazyTree.jpg',
    'images/midtown.jpg'
]
let i = 0
setInterval(() => {
    if (i == photos.length - 1){
        i = 0 
    } else {
        i += 1
    }
    document.body.style.backgroundImage = `url(${photos[i]})`
}, 5000); 
const one = document.querySelectorAll(".page1");
const two = document.querySelectorAll(".page2");
const three = document.querySelectorAll(".page3")
const four = document.querySelectorAll(".page4")
// document.getElementById('portraits').addEventListener('click', () => {
//     page1[0].style.display = 'none';
//     for (i=0; i<page1.length; i++) {
//         page1[i].classList.add('page2')
//       }
// })

// SHOW functions
function showOne() {
    for (i = 0; i < one.length; i++) {
      one[i].style.display = "block";
    }
}
  function showTwo() {
    for (i = 0; i < one.length; i++) {
      two[i].style.display = "block";
    }
}
  function showThree() {
    for (i = 0; i < one.length; i++) {
      three[i].style.display = "block";
    }
}
  
  //HIDE Functions
function hideOne() {
    for (i = 0; i < one.length; i++) {
      one[i].style.display = "none";
    }
}
function hideTwo() {
    for (i = 0; i < one.length; i++) {
      two[i].style.display = "none";
    }
}
function hideThree() {
    for (i = 0; i < one.length; i++) {
      three[i].style.display = "none";
    }
}
  
  //Event Listeners
document.getElementById("portraits").addEventListener("click", function () {
    showOne();
    hideTwo();
    hideThree();
});
  
document.getElementById("nature").addEventListener("click", function () {
    showTwo();
    hideOne();
    hideThree();
});
  
document.getElementById("architecture").addEventListener("click", function () {
    hideTwo();
    hideOne();
    showThree();
});