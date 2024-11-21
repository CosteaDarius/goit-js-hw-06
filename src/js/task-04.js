let counterValue = 0

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueDisplay = document.querySelector('#value');

function updateCounterDisplay() {
    valueDisplay.textContent = counterValue
}

decrementButton.addEventListener('click', () => {
    counterValue -= 1
    updateCounterDisplay()
})


incrementButton.addEventListener('click' , () => {
    counterValue += 1
    updateCounterDisplay()
})
