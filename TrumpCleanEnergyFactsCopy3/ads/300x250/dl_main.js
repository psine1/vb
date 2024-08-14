//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array(
  'images/logo.png'
);

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}

function imagesLoaded() {
    
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('banner_content').style.display = 'block';
    

    initHandlers();
    initAnimations();

}

/* PARA DETECTAR SI ES IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (is_Mac == true || iOS == true) {
     
}



/* PARA DETECTAR SI ES IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){

  alert("IE");
  
}


// VARIABLES GLOBALES
var multitimeline = gsap.timeline();
    multitimeline.timeScale(1);
    multitimeline
    .add(fr1(), 0)
    
    ;


    function cardRotate (wrapper) {

      card = document.querySelector(wrapper);      

      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      });
  
      const q = gsap.utils.selector(card);
      const front = q(".cardFront");
      const back = q(".cardBack");
  
      gsap.set(back, { rotationY:-180 });
  
  
      const tl = gsap.timeline({ paused: false })
      .to(front, { duration: 1, rotationY: 180 })
      .to(back, { duration: 1, rotationY: 0 }, 0)
      .to(card, { z: 50 }, 0)
      .to(card, { z: 0 }, 0.5);

      return tl;

    }

function fr1(){
  var tl_ = gsap.timeline();
      tl_.timeScale(1);  
      tl_

      .from('#bg', 12, { scale: 1.45, transformOrigin: "50% 130%", ease: "power3.out" }, 0)
      .to('#bg', 1, { autoAlpha: 0.15, ease: "power3.out" }, 0)

      .from('#gradient', 1.5, { scale: 1.45, transformOrigin: "80% 100%", ease: "power3.out" }, "<")
      .from('#txt-1-a', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.5")
      .from('#txt-1-b', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

      .to('#txt-1-a, #txt-1-b', 0.75, { autoAlpha: 0, ease: "power3.out" }, "<+2")

      .from('#txt-2-a', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.5")
      .from('#txt-2-b', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")
      .from('#txt-2-c', 0.75, { y: 20, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

      .from('#cta', 0.75, { scale: 1.25, autoAlpha: 0, ease: "power3.out" }, "<+1")


      .fromTo('#icon', {clipPath: 'circle(0%)'}, { duration: 1, clipPath: 'circle(100%)', ease: "power3.Out" }, "<+0.3")
      .from('[id*="txt-5-"]', 0.75, { x: -50, autoAlpha: 0, ease: "power3.out" }, "<+0.2")

return tl_  
}



function initAnimations(){
    multitimeline.timeScale(1); 
    
}


//HANDLERS
function initHandlers() {

  var clicktag = document.getElementById('clickTag');
  clicktag.addEventListener('mouseup', function(event) {
      
       
      window.open(window.clickTag,'_blank');
      
        
  })


  


  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });


  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {scale: 1.03, rotation: 0, ease: "power3.out"}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to("#cta", 0.2, {scale: 1, rotation: 0.01, ease: "power3.out"}, 0)

    },
  };

}

