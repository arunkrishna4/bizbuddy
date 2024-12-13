// Typing effect for dynamic text
function typeWriter(element, text, speed, callback) {
    element.innerHTML = ""; // Clear existing content
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }
    type();
}


// Function to validate form fields on submission
function validate() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pwd").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    // Reset error messages
    document.getElementById("roleerr").innerHTML = "";
    document.getElementById("emlerr").innerHTML = "";
    document.getElementById("pwderr").innerHTML = "";

    let isValid = true;

    // Validate role

    // Validate email
    if (email === "") {
        document.getElementById("emlerr").innerHTML = "Please enter your email";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emlerr").innerHTML = "Enter a valid email ID";
        isValid = false;
    }

    // Validate password
    let pwdpat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$#_@.*])[A-Za-z\d$#_@.*]{8,}$/;
    if (pass === "") {
        document.getElementById("pwderr").innerHTML = "Please enter your password";
        isValid = false;
    } else if (!pwdpat.test(pass)) {
        document.getElementById("pwderr").innerHTML = `
            <ul>
                <li>Password should be at least 8 characters long</li>
                <li>1 Uppercase</li>
                <li>1 Lowercase</li>
                <li>1 Special Character</li>
            </ul>`;
        isValid = false;
    }

    return isValid; // Prevent form submission if validation fails
}

// Function to reset error messages as the user types
function addEventListeners() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pwd");

    emailInput.addEventListener("input", function () {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailError = document.getElementById("emlerr");

        if (emailInput.value.trim() === "") {
            emailError.innerHTML = "Please enter your email";
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.innerHTML = "Enter a valid email ID";
        } else {
            emailError.innerHTML = ""; // Clear error if input is valid
        }
    });

    passwordInput.addEventListener("input", function () {
        const passwordError = document.getElementById("pwderr");

        if (passwordInput.value.trim() === "") {
            passwordError.innerHTML = "Please enter your password";
        } else {
            passwordError.innerHTML = ""; // Clear error if input is valid
        }
    });
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addEventListeners);

// Apply the typing effect to the elements
window.onload = function () {
    const text1 = "BizBuddy";
    const text2 = "Hello user,";
    const text3 = "Welcome to Your Business Command Center - Track, Manage, and Thrive with Ease!";

    typeWriter(document.getElementById("dynamicText1"), text1, 40, function () {
        typeWriter(document.getElementById("dynamicText2"), text2, 40, function () {
            typeWriter(document.getElementById("dynamicText3"), text3, 20);
        });
    });
};
