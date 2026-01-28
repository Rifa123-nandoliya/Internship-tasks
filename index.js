document.addEventListener("DOMContentLoaded", function () {

  alert("Hello! Welcome to Rifa's Portfolio");

  
  const img = document.querySelector("#aside_id img");
  const footer = document.querySelector("#footer_id");
  const navLinks = document.querySelectorAll("#nav_id a");
  const about = document.querySelector("#about");
  const skills = document.querySelector("#skills");
  const contact = document.querySelector("#contact");

  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const phoneInput = document.querySelector("input[name='contact']");
  const form = document.querySelector("#contact form");

  
  img.addEventListener("mouseenter", function () {
    img.classList.toggle("zoomed");
  });

  
  footer.addEventListener("click", function () {
    footer.textContent = "Thanks for visiting!";
  });

  navLinks[0].addEventListener("click", function (e) {
    e.preventDefault();
    about.classList.toggle("highlight");
  });
  
  navLinks[1].addEventListener("click", function (e) {
    e.preventDefault();
    skills.classList.toggle("highlight");
  });
  
  navLinks[2].addEventListener("click", function (e) {
    e.preventDefault();
     contact.classList.toggle("highlight");
  });

  form.addEventListener("submit", function (e) {
  e.preventDefault();           
  validateForm();               
});

  function getFormValues() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    console.log(name, email, phone);
    return {name,email,phone};
  }
  
  function validateForm(){
    const data=getFormValues();
    if(data.name==""){
    alert("Name is required!");
    return false;
    }
     if(!data.email.includes('@')){
        alert("Enter a valid email");
        return false;
     }

     if(data.phone==""){
        alert("Phone number required");
        return false;
     }

     alert("Form submitted successfully");
     form.innerHTML="Your response has been recorded..☑️";
     return true;
  }
  
});
