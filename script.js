//Open navbar with menu button
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})

//Close menu with click on sections
document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((i) => {
            i.classList.remove('change');
        });
    });
});

//Play Pause video
const videos = document.querySelectorAll('.video')
videos.forEach((v) => {
    v.addEventListener('mouseover', () => {
        v.play()
    })

    v.addEventListener('mouseout', () => {
        v.pause()
    })
})