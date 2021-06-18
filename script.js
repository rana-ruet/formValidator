const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// show input error message
const showError = function (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

//  show succree outline
const showSuccess = function (input) {
    const formControl = input.parentElement;
     formControl.className = "form-control success";
}

// Email validation
const isValidEmail = function (email) {
    const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value == "") {
        showError(username,'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value == "") {
			showError(email, "Email is required");
        } else if (!isValidEmail(email.value)) {
            showError(email, "Email is not valid");
    }else {
			showSuccess(email);
		}
})
