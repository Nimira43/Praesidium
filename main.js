
const gem = document.getElementById('gem')
const spin = document.getElementById('spin')
const statusLabel = document.getElementById('status')
const sapphires = document.getElementById('sapphires')
const rubies = document.getElementById('rubies')

let sapphiresCount = 0
let rubiesCount = 0

function processResult(result) {

    if (result === 'sapphires') {
        sapphiresCount++
        sapphires.innerHTML = sapphiresCount
    }else{
        rubiesCount++
        rubies.innerHTML = rubiesCount
    }

    statusLabel.innerText = result.toUpperCase()
}


function spinGem() {

    const random = Math.random()
    const result = random < 0.5 ? 'sapphires' : 'rubies'

    setTimeout(() => {
            gem.setAttribute('class','animate-' + result)

            setTimeout(() => {
                    processResult(result)
            }, 2900)

    }, 100)
}

spin.addEventListener('click', spinGem)