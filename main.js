const gem = document.getElementById('gem')
const spin = document.getElementById('spin')
const statusLabel = document.getElementById('status')
const sapphiresCountElem = document.getElementById('sapphires-count')
const rubiesCountElem = document.getElementById('rubies-count')

let sapphiresCount = 0
let rubiesCount = 0

function updateCount(result) {
    if (result === 'sapphires') {
        sapphiresCount++
        sapphiresCountElem.textContent = sapphiresCount
    } else {
        rubiesCount++
        rubiesCountElem.textContent = rubiesCount
    }
    statusLabel.textContent = result.toUpperCase()
}

function applyAnimation(result) {
    gem.classList.remove('animate-sapphires', 'animate-rubies')
    void gem.offsetWidth
    gem.classList.add('animate-' + result)
}

function spinGem() {
    const random = Math.random();
    const result = random < 0.5 ? 'sapphires' : 'rubies'

    applyAnimation(result)

    gem.addEventListener('animationend', () => updateCount(result), { once: true })
}

spin.addEventListener('click', spinGem)

