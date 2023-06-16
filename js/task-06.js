const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () =>{
     const inputText = inputEl.value.trim();
     if (inputText.length === Number(inputEl.dataset.length)) {
            inputEl.classList.add("valid");
            inputEl.classList.remove("invalid");
            
       }else {
       inputEl.classList.add("invalid");
            inputEl.classList.remove("valid");
       }
       
});