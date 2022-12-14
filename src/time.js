let time_ = 1
const button = document.getElementById('time')

button.onclick = async e => {
    button.onclick = undefined
    button.style.display = 'none'
    await f()
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function f() {
    // const start = Date.now()
    while (time_ > 0) {
        time_ -= .2/deltaTime
        await sleep(deltaTime)
    }
    mouseClicked()
}