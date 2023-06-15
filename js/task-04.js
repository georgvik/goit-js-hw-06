const counterValue = document.querySelector('#value');
const incrementBtnEl = document.querySelector("button[data-action='increment']");
const decrementBtnEl = document.querySelector("button[data-action='decrement']");


let value = 0;
incrementBtnEl.addEventListener('click', () =>{
    value +=1;
    counterValue.textContent = value;

});
decrementBtnEl.addEventListener('click', () => {
    value -=1;
    counterValue.textContent = value;
})
