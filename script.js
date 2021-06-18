const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
const showError = function (input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
};

//  show succree outline
const showSuccess = function (input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
};

// Email validation
const checkEmail = function (input) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, "Email is not valid");
	}
};

const inputRequired = function (inputArr) {
	inputArr.forEach((input) => {
		const id = input.id;
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
};

const getFieldName = function (input) {
	const id = input.id;
	return id[0].toUpperCase() + id.slice(1);
};

const checkLength = function (input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} charecter`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} charecter`
		);
	} else {
		showSuccess(input);
	}
};

const checkPasswordMatch = function (input1, input2) {
	if (input1.value !== input2.value)
		showError(input2, "Password does not match.");
	else showSuccess(input2);
};

form.addEventListener("submit", function (e) {
	e.preventDefault();
	inputRequired([username, email, password, password2]);
	checkLength(username, 4, 15);
	checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password,password2)
});
