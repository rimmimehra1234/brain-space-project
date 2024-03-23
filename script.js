gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.to(".page1video" , {
    filter : "blur(20px)",
 transform:"scaleX(0.85)",
    duration : 1,
    scrollTrigger:{
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start:"top 0",
        end:"top -50%",
        scrub:true
    }
})

 function page1hoveranimation(){
    var img = document.querySelector(".nav img")

    img.addEventListener("mouseenter", function(){
                gsap.to(".cursor" , {
                  scale: 2,
   
              })
  
   })
  
   img.addEventListener("mouseleave", function(){
      gsap.to(".cursor" , {
        scale: 1,
  
    })
    
  })
  
  var text = document.querySelector(" .nav .nav-part2 h4")
  
  text.addEventListener("mouseenter" , function(){
      gsap.to(".cursor" , {
          scale: 3,
      })
  })
  
  text.addEventListener("mouseleave" , function(){
      gsap.to(".cursor" , {
          scale: 1,
      })
  })
 }
 page1hoveranimation()

function page1textanimation(){
    var text = "The products of the future will  be  hyper-personalized and  based on your brain"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})

}

page1textanimation()


function page2animation(){
    gsap.from(".page2-content" , {
        y : 50,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page2-content",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })

}
   
page2animation()


// gsap.from(".page3" , {
//     y : 50,
//     duration: 1.5,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".page3",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end:  "top -10%",
//         scrub: 2
//     }
// })
    
 function page3animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3left-side ",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end:  "top -10%",
            scrub: 2
        }
    })
    
    tl3.from(".page3left-side h1" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    })
    tl3.from(".page3left-side p" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    }) 
    tl3.from(".page3left-side button" , {
        y : 50,
        duration: 1,
        opacity: 0,
        
    })
    
    gsap.from(".page3right-side .page3video" , {
        y: 50,
        duration : 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3right-side",
            scroller:".main",
           
            // markers: true,
            start: "top 50%",
            end : " top -10%",
            scrub: 2
    
        }
    
    })
    
 }
   page3animation()










document.addEventListener("mousemove" , function(dets){
    gsap.to(".cursor" , {
        top:dets.y,
        left:dets.x,
        duration:1
    })

})

gsap.to(".nav-part2",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        start:"top 0",
        end:"top -10%",
        scrub:true
    }
})

gsap.to(".nav i",{
    display:"block",
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        start:"top -15%",
        end:"top -20%",
        scrub:true
    }
})


gsap.to(".page2 img",{
    transform:"translateY(-50%) translateX(69%)",
    duration:10,
    repeat:-1,
    ease:"none",
    
})

function page4animation1(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content-1",
            scroller : ".main",
            // markers: true,
            start: "top 80%",
            end : "top -80%",
            scrub: 2
    
        }
    
     })
     
     
    
     tl4.from(".page4-content-1 h2" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     tl4.from(".page4-content-1 p" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     tl4.from(".page4-content-1 button" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })

     tl4.from(".page4-content-2 h2" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     
     tl4.from(".page4-content-2 video" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     
     tl4.from(".page4-content-3 video" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     
     tl4.from(".page4-content-3 part2  h2" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     tl4.from(".page4-content-3 part2  button" , {
        y : 50,
        opacity : 0,
        duration : 0.5,
       
     })
     


}
page4animation1()


function page4page5Animation() {

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 0",
            end: "top -60%",
            scrub: 3,
            pin: true,
            // markers:true
        }
    })
    tl5.to(".purapage5", {
        transform: "translateX(-50%)",
    }, "okay")
    tl5.to(".page5 .slider-in", {
        x: 500,
    }, "okay")


    
}

page4page5Animation()


function page6Anim1(){

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page6",
            scroller : ".main",
            start: "top 50%",
            end:"top -20%",
            scrub: 2,
            // markers: true,
        }
    })

    tl6.from(".pg6heading h1", {
        y: 50,
        duration: 1,
        opacity: 0, 
        scale: 1.1,
       
    })

    tl6.from(".page6center", {
        y: 50,
        duration: 1,
        opacity: 0, 
        scale: 1.1,
       
    })

    


}

page6Anim1()



gsap.from(".first1" , {
    scale: 1.5,
    opacity:0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".first1",
        scroller: ".main",
        // markers: true,
        start: "top 50%",
        end: "top -30%",
        scrub: 1
    }
})
gsap.from(".first2" , {
    scale: 1.5,
    opacity:0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".first1",
        scroller: ".main",
        // markers: true,
        start: "top 50%",
        end: "top -30%",
        scrub: 1
    }
})
gsap.from(".first3" , {
    scale: 1.5,
    opacity:0,
    duration: 0.5,
    scrollTrigger:{
        trigger:".first1",
        scroller: ".main",
        // markers: true,
        start: "top 50%",
        end: "top -30%",
        scrub: 1
    }
})





// gsap.from(".pg6heading h1",{
//     y:100,
//     duration:1,
//     scale:1.1,
//     opacity:0,
//     scrollTrigger: {
//         trigger:".pg6heading",
//         scroller:".main",
//         markers: true,
//         start: "top 50%",
//         end:"top 10%",
//         scrub: true,
//     }
// })




// page7

var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page7",
        scroller : ".main",
        // markers: true,
        start: "top 70%",
        end:"top 30%%",
        scrub: true
    }



})



tl7.from(".page7>h2" , {
    y: 50,
    duration: 1,
    opacity: 0, 
    scale: 1.1,
   
})

tl7.from(".page7center" , {
    y: 50,
    duration: 1,
    opacity: 0, 
    scale: 1.1,
   
})

// tl7.from(".page7logo" , {
//     y: 50,
//     duration: 1,
//     opacity: 0, 
//     scale: 1.1,
   
// })

gsap.from(".page7logo",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page7logo",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub: 1
    }
})
gsap.from(".secndpart",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page7logo",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub: 1
    }
})


gsap.from(".page7 button",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:"button",
        scroller:".main",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub: 1
    }
})

gsap.from(".page8center",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page8",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})


var conic = document.querySelector(".page8")

conic.addEventListener("mousemove", function(e){
    conic.style.background = `conic-gradient( at ${e.x}px  ${e.y}px,rgb(189,240,247),rgb(228,246,200),rgb(249,250,201),rgb(255,198,193),rgb(203,216,253), rgb(189,240,247))`;

})


gsap.from(".cs1",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".presure",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})

gsap.from(".cs2",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".presure",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})


gsap.from(".one",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page9center",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1,
        stagger: true
    }
})

gsap.from(".two",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page9center",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})

gsap.from(".images",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page10",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})

gsap.from(".page10 h3",{
    y:50,
    duration: 1,
    opacity:0,
    scrollTrigger:{
        trigger:".page10",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        end:"top 10%",
        scrub: 1
    }
})