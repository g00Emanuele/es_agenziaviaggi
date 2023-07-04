const button = document.getElementById('removeCard')
const card = document.querySelectorAll('.card')

button.addEventListener('click', () => {
    for (let i = 0; i < card.length; i++) {
        let a = card[i]
        a.classList.add('d-none')
    }
})



const  viaggi = document.getElementsByClassName('custom-trip')
const numeroViaggi = document.getElementById('viaggi')

addEventListener("load", () => {
    let count = 0
    for (const i of viaggi) {
        count ++
    }
    numeroViaggi.innerText = count
});

