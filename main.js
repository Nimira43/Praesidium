const gem = document.getElementById('gem')
const spin = document.getElementById('spin')
const statusLabel = document.getElementById('status')
const sapphiresCountElem = document.getElementById('sapphires-count')
const rubiesCountElem = document.getElementById('rubies-count')

let sapphiresCount = 0
let rubiesCount = 0

function processResult(result) {
    if (result === 'sapphires') {
        sapphiresCount++
        sapphiresCountElem.innerText = sapphiresCount
    } else {
        rubiesCount++
        rubiesCountElem.innerText = rubiesCount
    }

    statusLabel.innerText = result.toUpperCase()
}

function spinGem() {
    const random = Math.random()
    const result = random < 0.5 ? 'sapphires' : 'rubies'

    gem.classList.remove('animate-sapphires', 'animate-rubies')
    void gem.offsetWidth // Trigger reflow to restart CSS animation
    gem.classList.add('animate-' + result)

    setTimeout(() => {
        processResult(result)
    }, 2900)
}

spin.addEventListener('click', spinGem)
