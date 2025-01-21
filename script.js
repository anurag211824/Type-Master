gsap.from('.logo',{
    y:-20,
    duration: 1,
    delay:0.2,
})
gsap.from('header button',{
    y:-20,
    duration: 1,
    delay:0.5,
})

var tl=gsap.timeline()
tl.from('.herotext',{
    x:-900,
    duration: 0.5,
    delay:0.2,
})

tl.from('.heroImage',{
    x:900,
    duration: 0.5,
    delay:0.2,
})



tl.from('.feature',{
    x:-5000,
    duration: 1,
    delay:0.1,
    stagger:0.1,
})
