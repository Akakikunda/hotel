window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var hotelname = document.querySelector('.header .hotelname');
    var logo = document.querySelector('.header img');
    var topnav=this.document.querySelector('.topnav');
    if (window.pageYOffset > 100) {
        header.classList.add('scrolledheader');
        hotelname.classList.add('scrolledh1');
        logo.classList.add('scrolledimg');
        topnav.classList.add('scrolledtopnav');

    } else {
        header.classList.remove('scrolledheader');
        hotelname.classList.remove('scrolledh1');
        logo.classList.remove('scrolledimg');
        topnav.classList.remove('scrolledtopnav');

    }
});

let currentImageIndex=0;
const images=document.querySelectorAll('.imgcontainer .imageitem');
document.getElementById('prev').addEventListener('click',function(){
    images[currentImageIndex].style.display='none';
    currentImageIndex=currentImageIndex>0?currentImageIndex-1:images.length-1;
    images[currentImageIndex].style.display='flex';
})
document.getElementById('next').addEventListener('click',function(){
images[currentImageIndex].style.display='none';
currentImageIndex=currentImageIndex<images.length-1?currentImageIndex+1:0;
images[currentImageIndex].style.display="flex";
})