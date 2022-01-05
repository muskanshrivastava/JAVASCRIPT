// DOM variables
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
        alert('Form Successfully Submitted!')
        location.reload();
    }
})
        
// AJAX functionality

// $(document).ready(function(){
//     $("#form").on("submit", function(event){
//         event.preventDefault();
 
//         var formValues= $(this).serialize();
//         alert("Form Successfully Submitted!")
//         location.reload()
//         $.post("response.php", formValues, function(data){
//             // Display the returned data in browser
//             $("#result").html(data);
            
//         });
        
//     });
// });


// Regular Expression variables for username and password


var regex = /^[^0-9][a-zA-Z]+[^0-9][a-zA-Z]+[^0-9]$/;
var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;


//  First name validation check
function firstName() {
    
    var fnameVal = document.getElementById('fname').value.trim()
    if (fnameVal === "") {
        setErrorMsg(fname, 'This field cannot be blank');
        document.getElementById('fname').style.borderColor = "red";
        return false;
    }
    else if (fnameVal.length < 3) {
        setErrorMsg(fname, 'Length of first name is too short');
        document.getElementById('fname').style.borderColor = "red";
        return false;
    }
    else if (!regex.test(fnameVal)) {
        setErrorMsg(fname, 'This field cannot contain numbers or any special characters');
        document.getElementById('fname').style.borderColor = "red";
        return false;
    }
    else {
        setSuccsessMsg(fname);
        document.getElementById('fname').style.borderColor = "green";
        return true;
    }
}

//  Last name validation check
function lastName() {
    
    var lnameVal = document.getElementById('lname').value.trim()

    if (lnameVal === "") {
        setErrorMsg(lname, 'This field cannot be blank');
        document.getElementById('lname').style.borderColor = "red";
        return false
    }
    else if (lnameVal.length <= 3) {
        setErrorMsg(lname, 'Length of last name is too short');
        document.getElementById('lname').style.borderColor = "red";
        return false;
    }
    else if (!regex.test(lnameVal)) {
        setErrorMsg(lname, 'This field cannot contain numbers or any special characters');
        document.getElementById('lname').style.borderColor = "red";
        return false;
    }
    else {
        setSuccsessMsg(lname);
        document.getElementById('lname').style.borderColor = "green";
        return true;
    }
}

//  email validation check
function emailId() {
    
    var emailVal = document.getElementById('email').value.trim()

    if (emailVal === "") {
        setErrorMsg(email, 'This field cannot be blank');
         document.getElementById('email').style.borderColor = "red";
         return false;
    }
    else if (isEmail(emailVal)) {
        setErrorMsg(email, 'Invalid Email');
         document.getElementById('email').style.borderColor = "red";
         return false;
    }
    else {
        setSuccsessMsg(email);
        document.getElementById('email').style.borderColor = "green";
        return true;
    }
}

//  Phone Number validation check
function phoneNumber() {
    
    var phoneVal = document.getElementById('phone').value.trim()
    if (phoneVal === "") {
        setErrorMsg(phone, 'This field cannot be blank');
         document.getElementById('phone').style.borderColor = "red";
         return false;
    }
    else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Invalid Mobile Number');
         document.getElementById('phone').style.borderColor = "red";
         return false;
    }
    else {
        setSuccsessMsg(phone);
        document.getElementById('phone').style.borderColor = "green";
        return true;
        
    }
}

//  Password validation check
function passwordFunc() {
    var passwordVal = document.getElementById('pass').value.trim()
    if (passwordVal === "") {
        setErrorMsg(password, 'This field cannot be blank');
        document.getElementById('pass').style.borderColor = "red";
        return false;
    }
    // else if (passwordVal.length < 8) {
    //     setErrorMsg(password, 'Length of password must be atleast 8 characters');
    //      document.getElementById('password').style.borderColor = "red";
    //      return false;
    // }
     if (!passwordRegex.test(passwordVal)) {
        setErrorMsg(password,'Password must contain atleast one Capital letter, one digit and one special character and must be of atleast 8 characters');
         document.getElementById('pass').style.borderColor = "red";
         return false;
    }
    else {
        setSuccsessMsg(password);
        document.getElementById('pass').style.borderColor = "green";
        return true;
        
    }
}

//  Confirm Password validation check
function confirmPasswordFunc() {
    
    var confirmPasswordVal = document.getElementById('confirm-password').value.trim()
    var passwordVal = document.getElementById('pass').value.trim()
    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, 'This field cannot be blank');
        document.getElementById('confirm-password').style.borderColor = "red";
        return false;
    }
    else if (confirmPasswordVal != passwordVal) {
        setErrorMsg(confirmPassword, 'Password not matched');
        document.getElementById('confirm-password').style.borderColor = "red";
        return false;
    }
    else if (!passwordRegex.test(confirmPasswordVal)) {
        setErrorMsg(confirmPassword,'Password must contain atleast one Capital letter, one digit and one special character and must be of atleast 8 characters');
        document.getElementById('confirm-password').style.borderColor = "red";
        return false;
    }
    else {
        setSuccsessMsg(confirmPassword);
        document.getElementById('confirm-password').style.borderColor = "green";
        return true;
        
    }
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

// Check Validation of all fields
function validate() {
    if (firstName() && lastName() && emailId() && phoneNumber() && passwordFunc()&& confirmPasswordFunc()) {
        return true;
    }
}

// Check button validation function
function check(checkButton) {
    if (checkButton.checked && validate() ) {
        document.getElementById("submitButton").disabled = false;
    } else {
        disable = true;
        document.getElementById("submitButton").disabled = true;
    }
}


         
   
        
    


  
    