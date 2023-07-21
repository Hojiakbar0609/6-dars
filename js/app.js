const spiderImg = document.getElementById('spider')
const easyLevel = document.getElementById('easyScore')
const mediumLevel = document.getElementById('mediumScore')
const hardLevel = document.getElementById('hardScore')
const overlay = document.getElementById('overlay')
const stopGame = document.getElementById('stop')
const stopGameEl = document.querySelector('.stop-game-content')
const restartBtn = document.getElementById('restart')

let counter = 0
let innerWidth = window.innerWidth - 50
let innerHeight = window.innerHeight - 50

easyLevel.addEventListener('click' , () => {
    document.getElementById('buttons').style.display = 'none'
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
        spiderImg.style = `
            position:absolute;
            top: ${top}px;
            left: ${left}px;
            transition: 0.3s;
        `
    },1200)
})

mediumLevel.addEventListener('click' , () => {
    document.getElementById('buttons').style.display = 'none'
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
    
        spiderImg.style = `
            position:absolute;
            top: ${top}px;
            left: ${left}px;
            transition: 0.3s;
        `
    },800)
})
hardLevel.addEventListener('click' , () => {
    document.getElementById('buttons').style.display = 'none'
    setInterval(() => {
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
    
        spiderImg.style = `
            position:absolute;
            top: ${top}px;
            left: ${left}px;
            transition: 0.3s;
        `
    },700)
})


document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'spider'){
        counter++
        document.querySelector('h1').style.display = 'block'
        document.querySelector('h1').textContent = counter
    }
})
stopGame.addEventListener('click', () => {
    stopGameEl.style.transform = 'translate(-50%, -50%)'
    stopGameEl.classList.remove('hidden')
    document.querySelector('h3').textContent = counter
})
restartBtn.addEventListener('click', () => {
    document.querySelector('h1').textContent = 0
    spiderImg.style = `
        position: absolute;
        top: 50px;
        left: 150px;
    `
    document.getElementById('buttons').style.display = 'flex'
    stopGameEl.style.transform = 'translate(0, -800px)'
    document.querySelector('h3').textContent = 0

})
