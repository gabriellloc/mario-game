const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
let valid = 0

const jump = () => {
    
    if (valid === 1){
        return
    }
    mario.classList.add("jump")
    
    mario.src = "assets/mario-jump.png"

    setTimeout(()=>{
        mario.classList.remove("jump")
        if (valid === 0){
            mario.src = "assets/mario.gif"
        }
    } ,600)

}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition > 0 && marioPosition < 80 && pipePosition <= 120){
        valid = 1
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = "50px"

        clearInterval(loop)
    }
} ,10)

document.addEventListener("keydown", jump)
document.addEventListener("click", jump)


window.document.addEventListener("keydown", () =>{
    if (valid === 1) {
        location.reload()
    }
})
window.document.addEventListener("click", () =>{
    if (valid === 1) {
        location.reload()
    }
})