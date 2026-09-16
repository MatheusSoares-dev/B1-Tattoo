gsap.registerPlugin(ScrollTrigger, SplitText)

const tlHero = gsap.timeline()

tlHero.fromTo(".img-logo", {
    scale: .5,
    opacity: 0,
}, {
    scale: 1,
    opacity: 1,
    duration: 1
})

tlHero.to(".img-logo", {
    opacity: 0,
    y: 150,
    duration: 1
}, "+1.5")

tlHero.to(".box-sup", {
    y: "-200%",
    duration: 1,
    stagger: {
        each: .1,
        from: "center"
    },

}, "+")

tlHero.to(".box-inf", {
    y: "200%",
    duration: 1,
    stagger: {
        each: .1,
        from: "center"
    },

}, "<")

let heroTitulo = new SplitText(".titulo-hero", { type: "chars" })
let LetrasHero = heroTitulo.chars;

tlHero.from(".hero-img img", {
    opacity: 0,
    x: 400,
    opacity: 0,
    duration: 1,
    ease: "sine.out",
}, "<+.6")


tlHero.from(LetrasHero, {
    opacity: 0,
    y: 200,
    duration: 1,
    ease: "back.out",
    stagger: {
        from: "start",
        each: .1
    }
})

tlHero.from(".text-hero p", {
    x: -200,
    opacity: 0
}, "<+1")

gsap.to(".hero-img img", {
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
    }
})

gsap.to(".text-hero p", {
    y: 100,
    scrollTrigger: {
        trigger: ".hero",
        start: "center top",
        end: "bottom bottom",
        scrub: true,
    }
})