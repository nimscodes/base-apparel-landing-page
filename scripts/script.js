function validateForm(){
    let input = document.forms["email-form"]["email"].value;
    const error_message = document.querySelector('.error-message');
    const error_icon = document.querySelector('.error-icon');
    const form = document.querySelector('.form');
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if( input == "" || !input.match(emailPattern)){
        error_message.style.display = "block";
        error_icon.style.display = "block";
        form.style.border = "2px solid var(--soft-red)";
        return false;
    }else{
        alert(input);
        return true;
    }
    
}