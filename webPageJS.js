var username = document.getElementById('name')
var password = document.getElementById('pass')
var submit = document.getElementById('submitBtn')
var loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', (event => {
    event.preventDefault();
    if (validateLogin()) {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    }
}))



function validateLogin() {
    var name = document.getElementById('name').value.trim()
    var loginpass = document.getElementById('pass').value.trim()

    var flag = 0;

    if (name == "") {
        // error(username,"Please enter your username")
        username.classList.add('is-invalid');
        username.style.borderColor = 'red';
        flag = 0;
    }
    else {
        // success(username,'Valid username')
        username.classList.remove('is-invalid');
        username.style.borderColor = 'green';
        flag = 1;
    }
    if (loginpass == "") {
        // error(password,"Please enter your password")
        password.classList.add('is-invalid');
        password.style.borderColor = 'red';
        flag = 0;
    }
    else {
        // success(password,'Valid password')
        password.classList.remove('is-invalid');
        password.style.borderColor = 'green';
        flag = 1;

        if (flag == 1) return true;
        else return false;
    }

}
