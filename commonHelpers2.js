import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let a={email:"",message:""};const t=document.querySelector(".feedback-form");localStorage.getItem("feedback")&&(a=JSON.parse(localStorage.getItem("feedback")),t.elements.email.value=a.email,t.elements.message.value=a.message);t.addEventListener("submit",s);function s(e){e.preventDefault(),e.target;const l=t.elements.email.value.trim(),m=t.elements.message.value.trim();if(l===""||m==="")return alert("Fill please all fields");a={email:l,message:m},t.reset(),localStorage.removeItem("feedback")}t.addEventListener("input",r);function r(e){e.target.matches('input[name="email"]')&&(a.email=e.target.value),e.target.matches('textarea[name="message"]')&&(a.message=e.target.value),localStorage.setItem("feedback",JSON.stringify(a))}
//# sourceMappingURL=commonHelpers2.js.map
