const formEl = document.querySelector('.login-form');
console.log (formEl);

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
   const formSubmit = event.currentTarget.elements;
   const mailForm = formSubmit.email.value;
   const passForm = formSubmit.password.value;

   if (mailForm === '' || passForm === ''){
    alert ('Все поля должны быть заполены');
       } else {
        const formData = {
            mailForm,
            passForm,
                    };
       
       console.log (formData);
       formEl.reset();
    };
});