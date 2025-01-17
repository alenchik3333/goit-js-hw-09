let formData = {
    email: "", 
    message: ""
    };


const form = document.querySelector('.feedback-form');
if(localStorage.getItem("feedback-form-state"))
{

  formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const formEl = evt.target;
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
  
    if (email === '' || message === '') {
      return alert('Fill please all fields');
    } else {
      formData = {
        email: email,
        message: message,
      };
      console.log(formData);
    }
    form.reset();
    localStorage.removeItem("feedback-form-state");
  }
  form.addEventListener('input', handleInput);
  function handleInput(evt) {
   if(evt.target.matches('input[name="email"]'))
      formData.email = evt.target.value;
   if(evt.target.matches('textarea[name="message"]'))
    formData.message = evt.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData)); 
  }


