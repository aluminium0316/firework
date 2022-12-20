let time_ = 1
const button = document.getElementById('time')

button.onclick = async e => {
    button.onclick = undefined
    button.style.display = 'none'
    await f()
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function f() {
    // 1초 시간
    while (time_ > 0) {
        time_ -= deltaTime/1000
        await sleep(deltaTime)
    }
    mouseClicked()
}