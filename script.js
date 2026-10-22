const form = document.getElementById("form");
const firstName =document.getElementById("Fname");
const lastName=document.getElementById("Lname");
const email=document.getElementById("email");
const message=document.getElementById("Message");
const checkbox=document.getElementById("checkbox");

const type= document.querySelector(".radio-group");
const radios = document.querySelectorAll('input[name="type"]');

form.addEventListener("submit",function(event){
    event.preventDefault();
    let isValid=true;
    //first name
    const firstnameerreur= firstName.parentElement.querySelector(".required-message");
    if(firstName.value.trim() ===""){
        firstnameerreur.hidden =false;
        firstName.classList.add("invalid");
        isValid=false;
    }else{
        firstnameerreur.hidden =true;
        firstName.classList.remove("invalid");
    }
    //last name
    const lastNameerreur=lastName.parentElement.querySelector(".required-message");
    if (lastName.value.trim() ===""){
        lastNameerreur.hidden=false;
        lastName.classList.add("invalid");
        isValid=false;
    }else{
        lastNameerreur.hidden=true;
        lastName.classList.remove("invalid");
    }
    //email
    const requirederreur= email.parentElement.querySelector(".required-message");
    const emaileerreur= email.parentElement.querySelector(".error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() ===""){
        requirederreur.hidden =false;
        email.classList.add("invalid");
        isValid=false;
    }else if (!emailPattern.test(email.value.trim())){
        emaileerreur.hidden=false;
        firstName.classList.add("invalid");
        isValid=false;
    }else{
        requirederreur.hidden = true;
        emaileerreur.hidden = true;
        email.classList.remove("invalid");
    }
    // Verifier Query Type
   const radioerreur=type.querySelector(".required-message");
   const selectedradio=document.querySelector('input[name="type"]:checked');
    if (!selectedradio) {
        radioerreur.hidden = false;
        isValid = false;
    } else {
        radioerreur.hidden = true;
    }


    //verifier message 
    const messageerreur=message.parentElement.querySelector(".required-message");
     if (message.value.trim() ===""){
        messageerreur.hidden=false;
        message.classList.add("invalid");
        isValid=false;
    }else{
        messageerreur.hidden=true;
        message.classList.remove("invalid");
    }




    const consentError = checkbox.closest(".consent").querySelector(".required-message");
    const successMessage = document.getElementById("success-message");

    if (!checkbox.checked) {
        consentError.hidden = false;
        isValid = false;
    } else {
        consentError.hidden = true;
    }
    if (isValid) {
           successMessage.classList.add("show");
            form.reset();

            // Masquer le message après 5 secondes
            setTimeout(function() {
                successMessage.classList.remove("show");
            }, 5000);}





});