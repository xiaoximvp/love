new TypeIt("#tqyxhj", {
    loop: true,
    cursorSpeed: 1000,
    speed: 100
})
    .type("ZJJ && ZMX")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("永远在一起...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();