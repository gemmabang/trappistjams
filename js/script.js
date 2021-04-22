//gsap.from(".sTxt p",{duration:2, opacity:0, x:-50});
//gsap.from(".sTxt h1",{duration:2, opacity:0, x:-50, delay:1});
//gsap.from(".sTxt h2",{duration:2, opacity:0, x:-50, delay:2});
//gsap.from(".order",{duration:2, opacity:0,delay:3});


var tl = gsap.timeline();
//sequenced one-after-the-other
tl.from(".mainSlide", {duration: 3, y: -1000})
  .from(".slideImg",{duration:2, opacity:0, x:-50})
  //.from(".strawberries",{duration:1.2, opacity:0, x:50,ease:"bounce"})
  .from(".sTxt p", {duration:2, opacity:0, x:-50})
  .from(".sTxt h1,.sTxt h2",{duration:2.4, opacity:0, x:-50})
  //.from(".sTxt h2",{duration:2, opacity:0, x:-50, delay:0})
  .from(".order",{duration:2, opacity:0, y:-50, delay:0.8, ease:"bounce"});



 gsap.utils.toArray(".order").forEach(h1 => {
  let hover = gsap.to(".order,.order a", {scale: 1.2, color: "salmon", duration: 0.3, paused: true, ease: "power1.inOut"});
  h1.addEventListener("mouseenter", () => hover.play());
  h1.addEventListener("mouseleave", () => hover.reverse());
});


