gsap.registerPlugin(ScrollTrigger, SplitText)

gsap.fromTo(".img-logo",{
    scale: .5,
    opacity: 0,
} ,{ 
    scale: 1,
    opacity: 1,
    duration:1
})

gsap.to(".img-logo", {
    opacity:0 ,
    y: 150,
    duration: 1
}, "+1.5")

gsap.to(".box-sup",{
    y: "-100%",
    stagger: {
        each: .1,
        from: "center"
    }
}, "+")

gsap.to(".box-inf",{
    y: "100%",
    stagger: {
        each: .1,
        from: "center"
    }
}, "<")
 