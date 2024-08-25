

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".Main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





gsap.to("#Nav2", {

  y: -100,
  duration: 1,
  scrollTrigger:
  {
    trigger: "nav",
    scroller: ".Main",
    scrub: true,
    markers: true,
    start: "top 0",
    end: "top -10%"


  }

})

gsap.to(".Page1 video",
  {

    filter: "blur(20px)",
    transform: "scaleX(0.85)",
    scrollTrigger: {
      trigger: ".Page1",
      scroller: ".Main",
      start: "top 0",
      end: "top -50%",
      scrub: true
    }

  })



  
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    top: dets.y,
    left: dets.x,
    duration: 1



  })

})


gsap.to("#Left img", {

  transform: "translateY(-50%) translateX(69%)",
  duration: 10,
  delay: 1,
  lerp: 0.2,
  repeat: -1,
  ease: "none"


})





var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page2 #Right h1",
    scroller: ".Main",
    start: "top 50%",
    end: "top 30%",
    scrub: 2
  }

})

tl.from(".Page2 #Right h1", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})



tl.from(".Page2 #Right p", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


tl.from(".Page2 #Right button", {

  y: 50,
  opacity: 0,
  duration: 0.5,


})




var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Content2  h1",
    scroller: ".Main",
    start: "top 50%",
    end: "top 30%",
    scrub: 2
  }

})


t2.from(".Content2  h1", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


t2.from(".Content2  p", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


t2.from(".Content2  button", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page4 #Content-1 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})

t3.from("#Content-1 h1", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


t3.from("#Content-1 p", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


t3.from("#Content-1 button", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page4 #Content-2 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})
t3.from("#Content-2 h4", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page4 #Content-3 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})
t3.from("#Content-3 h4", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})

t3.from("#Content-3 button", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})



var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page4 #Content-4 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})

t3.from("#Content-4 h4", {

  y: 50,
  opacity: 0,
  duration: 0.5,


})


var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page4 #Content-5 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})

t3.from("#Content-5 h4", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})


t3.from("#Content-5 button", {

  y: 50,
  opacity: 0,
  duration: 0.5,


})


var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page5 #Content-7 ",
    scroller: ".Main",
    start: "top 60%",
    end: "top 30%",
    scrub: 2
  }

})

t4.from("#Content-7 h4", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})
t4.from("#Content-7 p", {

  y: 50,
  opacity: 0,
  duration: 0.5,




})























var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Page5 ",
    scroller: ".Main",
    start: "top 0%",
    end: "top -70%",
    scrub: 2,
    pin:true
  }
})

t5.to(".Page5 #Content-7",{

transform:"translateX(-50%)"


},"Raj")


t5.to("#Scroller2",{

transform:"translateX(233%)"

},"Raj")






var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".Page1 h1")
h1Text.innerHTML = clutter

gsap.to(".Page1 h1 span",{
    display:"initial",
    stagger:0.1
})