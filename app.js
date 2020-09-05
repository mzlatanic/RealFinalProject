let photos = [
    'images/5thAve.jpg',
    'images/accordion.jpg',
    'images/blizzard.jpg',
    'images/manOnBench.jpg',
    'images/water.jpg'
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