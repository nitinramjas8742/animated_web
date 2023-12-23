var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 12 + "px";
    crsr.style.top = dets.y - 12 + "px"; 
})
gsap.to("#nav",{
    backgroundColor : "#000",
    height: "100px",
    duration: 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start: "top -10%",
        end : "top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start: "top -25%",
        end : "top -75%",
        scrub:2
    }
})
gsap.from("#about img,#about-us",{
         y:50,
         opacity:0,
         duration:2,
         scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start: "top 60%",
            end : "top 58%",
            scrub:3
         }
})

