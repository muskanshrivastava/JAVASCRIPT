var form = document.getElementById('form')
var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var password = document.getElementById('pass')
var confirmPassword = document.getElementById('confirm-password')

// Event Listner function
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validate()) {
        alert( "Form Successfully Submitted!")
        location.reload()
    }
    
})

// Function of Form Validation
function validate() {

    var fnameVal = document.getElementById('fname').value.trim()
    var lnameVal = document.getElementById('lname').value.trim()
    var emailVal = document.getElementById('email').value.trim()
    var phoneVal = document.getElementById('phone').value.trim()
    var passwordVal = document.getElementById('pass').value.trim()
    var confirmPasswordVal = document.getElementById('confirm-password').value.trim()

    var regex =  /^[a-zA-Z]+[^0-9][a-zA-Z]+[^0-9]$/;
    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    flag = 0;

    //  First name validation check
    if (fnameVal === "") {
        setErrorMsg(fname, 'This field cannot be blank');
        document.getElementById('fname').style.borderColor = "red";
        flag = 0;   
    }
    else if (fnameVal.length < 3) {
        setErrorMsg(fname, 'Length of first name is too short');
         document.getElementById('fname').style.borderColor = "red";
         flag = 0;
    }
    else if (!regex.test(fnameVal)) {
        setErrorMsg(fname, 'This field cannot contain numbers or any special characters');
         document.getElementById('fname').style.borderColor = "red";
         flag = 0;
    }
    else {
        setSuccsessMsg(fname);
        document.getElementById('fname').style.borderColor = "green";
        flag = 1;
    }
        

    //  Last name validation check
    if (lnameVal === "") {
        setErrorMsg(lname, 'This field cannot be blank');
         document.getElementById('lname').style.borderColor = "red";
         flag = 0;
    } else if (lnameVal.length <= 2) {
        setErrorMsg(lname, 'Length of last name is too short');
         document.getElementById('lname').style.borderColor = "red";
    }
    else if (!regex.test(lnameVal)) {
        setErrorMsg(lname, 'This field cannot contain numbers or any special characters');
         document.getElementById('lname').style.borderColor = "red";
         flag = 0;
    }
    else {
        setSuccsessMsg(lname);
         document.getElementById('lname').style.borderColor = "green";
         flag = 1;
    }

    //  Email validation check
    if (emailVal === "") {
        setErrorMsg(email, 'This field cannot be blank');
         document.getElementById('email').style.borderColor = "red";
         flag = 0;
    }
    else if (isEmail(emailVal)) {
        setErrorMsg(email, 'Invalid Email');
         document.getElementById('email').style.borderColor = "red";
         flag = 0;
    }
    else {
        setSuccsessMsg(email);
         document.getElementById('email').style.borderColor = "green";
         flag = 1;
    }

    //  Phone Number validation check
    if (phoneVal === "") {
        setErrorMsg(phone, 'This field cannot be blank');
         document.getElementById('phone').style.borderColor = "red";
         flag = 0;
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Invalid Mobile Number');
         document.getElementById('phone').style.borderColor = "red";
         flag = 0;
    }
    else {
        setSuccsessMsg(phone);
         document.getElementById('phone').style.borderColor = "green";
         flag = 1;
    }

    //  Password validation check
    if (passwordVal === "") {
        setErrorMsg(password, 'This field cannot be blank');
        document.getElementById('pass').style.borderColor = "red";
        flag = 0;
    }
    else if (passwordVal.length < 8) {
        setErrorMsg(password, 'Length of password must be atleast 8 characters');
         document.getElementById('password').style.borderColor = "red";
         flag = 0;
    }
    else if (!passwordRegex.test(passwordVal)) {
        setErrorMsg(password,'Password must contain atleast one Capital letter, one digit and one special character');
         document.getElementById('pass').style.borderColor = "red";
         flag = 0;
    }
    else {
        setSuccsessMsg(password);
         document.getElementById('pass').style.borderColor = "green";
         flag = 1;
    }

    //  Confirm Password validation check
    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, 'This field cannot be blank');
        document.getElementById('confirm-password').style.borderColor = "red";
        flag = 0;
    }
    else if (confirmPasswordVal != passwordVal) {
        setErrorMsg(confirmPassword, 'Password not matched');
        document.getElementById('confirm-password').style.borderColor = "red";
        flag = 0;
    }
    else if (!passwordRegex.test(confirmPasswordVal)) {
        setErrorMsg(confirmPassword,'Password must contain atleast one Capital letter, one digit and one special character');
        document.getElementById('confirm-password').style.borderColor = "red";
        flag = 0;
    }
    else {
        setSuccsessMsg(confirmPassword);
         document.getElementById('confirm-password').style.borderColor = "green";
         flag = 1;
    }


    if (flag === 1) {
        return true;
    }
    else return false;
    
}

//  Error Message Function
function setErrorMsg(input, errormsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-design error";
    small.innerHTML = errormsg;

}

//  Valid Input Success Message
function setSuccsessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-design success";
     const small = formControl.querySelector('small');
}

//  Email validation Condition function
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;

    var dot = emailVal.indexOf('.');
    if (dot <= atSymbol + 3) return false;

    if (dot === emailVal.length - 1) return false;

    return true;
        
    
}

// Check button validation function
function check(checkButton) {
    if (checkButton.checked  ) {
        document.getElementById("submitButton").disabled = false;
    } else {
        disable = true;
        document.getElementById("submitButton").disabled = true;
    }
}

  
    