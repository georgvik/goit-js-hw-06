const inputEl = document.querySelector('#validation-input');
console.log (inputEl);
inputEl.addEventListener('blur', (event) =>{
     if (inputEl.value.length == inputEl.dataset.length) {
        console.log(inputEl.value.length);
    inputEl.classList.add('invalid');
       }
       inputEl.classList.add('valid');
});