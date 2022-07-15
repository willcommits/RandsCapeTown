const images=document.querySelectorAll('.galleryimages')
const fullimage=document.getElementById('#fullimage')
const exitbtn=document.querySelector('.exit')
const shadow=document.querySelector('.fullimage')
images.forEach(function(image){
    image.addEventListener('click',()=>{
       shadow.classList.add('show')
       fullimage.setAttribute('src',image.getAttribute('src'))
    })
})

exitbtn.addEventListener('click',()=>{
    shadow.classList.remove('show')
})