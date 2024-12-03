
var props = {
  copy1: `<span class="helvMedium">
           INSURANCE</span> <br> <span class="helvMedium">COMPANIES
           </span><br>
           <span class="helvBlkCn">
           SHOULDN'T</span> <br>
           <span class="helvBlkCn">DOUBLE DIP 
           </span> <br>
           <span class="helvBdCn blueLight">
           AT PATIENTS'</span> <br>
           <span class="helvBdCn blueLight">EXPENSE.</span>`,

  copy2: `
     Tell CMS: <br>
     MAKE <br> COPAY <br>
     ASSISTANCE <br>
     <div class="width="134px"><img style="width: 134px;" src="images/count.png" width="134"></div>`,

  copy3: '',
  copy4: '',  
  cta: '<div class="txtCta">TAKE ACTION</div>',
}




 


//PRELOAD DE IMG
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//ACA HAY QUE CARGAR LAS IMAGENES QUE SE USEN
var imageArray = new Array("images/logo.png"

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


/*

  document.querySelector('.copy1').innerHTML = createLines(props.copy1);
  document.querySelector('.copy2').innerHTML = createLines(props.copy2);
  document.querySelector('.copy3').innerHTML = createLines(props.copy3);
  document.querySelector('.copy4').innerHTML = createLines(props.copy4);  

  */
  //document.querySelector('.cta').innerHTML = props.cta;


// VARIABLES GLOBALES
var r = 100;
var dur = 1;



let peopleArray1 = [ "#people-2", "#people-3"];
let peopleArray2 = ["#people-4", "#people-5", "#people-6"];


let multitimeline = gsap.timeline();

multitimeline


  .from("#logo, #cta", 1, { y: 200, ease: "power3.out" }, "<")
  .to("#cta img", 0.75, { scale: 1.125, rotation: 0.05, repeat: -1, yoyo: true, ease: "power2.out" }, "<")

  .from("#people-1", 0.75, { scale: 0.75, autoAlpha: 0, ease: "power2.out" }, "<")

  .from("[id*='txt-1-']", 0.65, { y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out" }, "<")

  .from("#mark", 0.65, { scaleX: 0, ease: "power3.out" }, "<+0.75")
  .from("#mark2", 0.65, { scaleX: 0, ease: "power3.out" }, "<+0.2")

  .to("#arrow", 8, {motionPath: {path: "#line", align: "#line", alignOrigin: [0.5, 0.5], autoRotate: true,  start: 0, end: 1, type: "cubic"}, ease: "power2.out"}, "<")
  .fromTo("#line", 8, {drawSVG: "0%"}, {drawSVG: "100%", ease: "power2.out"}, "<")


  .to("[id*='txt-1-'], #mark, #mark2", 0.75, { autoAlpha: 0, ease: "power2.out" }, "<+2")
  .from(peopleArray1, 0.75, { scale: 0.75, autoAlpha: 0,   stagger: {each: 0.5 }, ease: "power2.out" }, "<")

  .from("[id*='txt-2-']", 0.65, { y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out" }, "<+0.5")
  .from("#mark3", 0.65, { scaleX: 0, ease: "power3.out" }, "<+0.75")


  .to("[id*='txt-2-'], #mark3", 0.75, { autoAlpha: 0, ease: "power2.out" }, "<+2")
  .from(peopleArray2, 0.75, { scale: 0.75, autoAlpha: 0,   stagger: {each: 0.5 }, ease: "power2.out" }, "<")

  .from("[id*='txt-3-']", 0.65, { y: 20, autoAlpha: 0, stagger: 0.2, ease: "power3.out" }, "<+0.5")
  .from("#mark4", 0.65, { scaleX: 0, ease: "power3.out" }, "<+0.75")
  .from("#mark5", 0.65, { scaleX: 0, ease: "power3.out" }, "<+0.2")



   function animateOdometer(target, endValue, duration = 2) {
    const odometer = document.getElementById(target);
  
    // Objeto proxy para animar el valor
    const obj = { value: 0 };
  
    // Retorna la animación GSAP
    return gsap.to(obj, {
      value: endValue,
      duration: duration,
      ease: "none",
      onUpdate: function () {
        odometer.textContent = Math.floor(obj.value); // Actualiza el texto del odómetro
      }
    });
  }







function initAnimations(){
    multitimeline.play(); 
}


//HANDLERS
function initHandlers() {

var clicktag = document.getElementById('clickTag');
    clicktag.addEventListener('mouseup', function(event) {
        
         
        window.open(window.clickTag,'_blank');
        
          
    })


setTimeout(function() {

  clicktag.addEventListener('mouseenter', function (e) {
      a.enter();
  });

  clicktag.addEventListener('mouseleave', function (e) {
      a.leave();
  });

}, 1000);






  var a = {
    enter: function () {
      console.log('enter');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to(".cta", 0.3, {scale: 1, backgroundColor: "#d83e3a", ease:Power2.easeOut}, 0)
    },
    leave: function () {
      console.log('leave');
      var tl = new TimelineMax({
        defaults: { duration: 0.5, ease: 'easeInOut' },
      });
      tl
        .to(".cta", 0.3, {scale: 1, backgroundColor: "#c13a30", ease:Power2.easeOut}, 0)

    },
  };

}



