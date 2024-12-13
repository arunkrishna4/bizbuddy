

function validate() {
    // Retrieve values
    let bname = document.getElementById("business-name").value.trim();
    let uname = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let pwd = document.getElementById("password").value.trim();
    let cpwd = document.getElementById("confirm-password").value.trim();
    let role = document.getElementById("role-select").value.trim();
    
    

    // Input field references
    let l1 = document.getElementById("business-name");
    let l2 = document.getElementById("username");
    let l3 = document.getElementById("email");
    let l4 = document.getElementById("password");
    let l5 = document.getElementById("confirm-password");
    let l6=document.getElementById("role-select");


    // Error message elements
    let bnameErr = document.getElementById("bnmerr");
    let unameErr = document.getElementById("unmerr");
    let emailErr = document.getElementById("emlerr");
    let pwdErr = document.getElementById("pwderr");
    let cpwdErr = document.getElementById("cpwderr");
    let roleerr=document.getElementById("role-error");

    // Reset error messages
    bnameErr.innerHTML = "";
    unameErr.innerHTML = "";
    emailErr.innerHTML = "";
    pwdErr.innerHTML = "";
    cpwdErr.innerHTML = "";
    roleerr.innerHTML = "";

    let isValid = true;

    // Regular expressions
    const emailPat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pwdPat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$#_@.*])[A-Za-z\d$#_@.*]{8,}$/;

    if (role==="") {
        document.getElementById("role-error").innerHTML = "Please select a role.";
        isValid = false;
    }

    // Business Name Validation
    if (bname === "") {
        bnameErr.innerHTML = "Please enter your business name";
        isValid = false;
    }

    // Username Validation
    if (uname === "") {
        unameErr.innerHTML = "Please enter a username";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        emailErr.innerHTML = "Please enter your email";
        isValid = false;
    } else if (!emailPat.test(email)) {
        emailErr.innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // Password Validation
    if (pwd === "") {
        pwdErr.innerHTML = "Please enter a password";
        isValid = false;
    } else if (!pwdPat.test(pwd)) {
        pwdErr.innerHTML =
            "Password should be at least 8 characters long<br>Include at least:<br>- 1 uppercase letter<br>- 1 lowercase letter<br>- 1 number<br>- 1 special character";
        isValid = false;
    }

    // Confirm Password Validation
    if (cpwd === "") {
        cpwdErr.innerHTML = "Please confirm your password";
        isValid = false;
    } else if (pwd !== cpwd) {
        cpwdErr.innerHTML = "Passwords do not match";
        isValid = false;
    }

    return isValid; // Prevent form submission if validation fails
}

// Real-time input validation
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", function () {
        this.style.border = ""; // Reset border when typing
        let errorElem = this.nextElementSibling; // Get associated error message element
        if (errorElem) errorElem.innerHTML = ""; // Clear error
    });
});
