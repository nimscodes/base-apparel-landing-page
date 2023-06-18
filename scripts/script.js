
    const email_form = document.querySelector('#email-form');
    const input = document.getElementById('email');
    const error_message = document.querySelector('.error-message');
    const error_icon = document.querySelector('.error-icon');
    const form = document.querySelector('.form');
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    email_form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (input.value == "" || !input.value.match(emailPattern)) {
            error_message.style.display = "block";
            error_icon.style.display = 'flex';
            form.style.border = "2px solid var(--soft-red)";
            input.value = "";
        }else{
            input.value = ""
            alert("Email submitted");
        }
    })

    
