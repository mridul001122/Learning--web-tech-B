// name validation
function validateName() {
    const name = document.getElementById("name").value.trim();
    const error = document.getElementById("error");

    if (name === "") {
        error.textContent = "Name cannot be empty.";
        return false;
    }

    if (!/^[a-zA-Z]+([ .-][a-zA-Z]+)*$/.test(name)) {
        error.textContent = "Name must contain at least two words and can only contain letters, dots, or dashes.";
        return false;
    }

    if (!/^[a-zA-Z]/.test(name)) {
        error.textContent = "Name must start with a letter.";
        return false;
    }

    error.textContent = "";
    alert("Name is valid!");
    return true;
}

// email validation
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error");

    if (email === "") {
        error.textContent = "Email cannot be empty.";
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    error.textContent = "";
    alert("Email is valid!");
    return true;
}

// gender validation
function validateGender() {
    const gender = document.querySelector('input[name="gender"]:checked');
    const error = document.getElementById("error");

    if (!gender) {
        error.textContent = "Please select a gender.";
        return false;
    }

    error.textContent = "";
    alert("Gender is valid!");
    return true;
}
// Birth validation
function validateDOB() {
    const day = document.getElementById("day").value.trim();
    const month = document.getElementById("month").value.trim();
    const year = document.getElementById("year").value.trim();
    const error = document.getElementById("error");

    if (day === "" || month === "" || year === "") {
        error.textContent = "Date of Birth cannot be empty.";
        return false;
    }

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
        error.textContent = "Date of Birth must be valid numbers.";
        return false;
    }

    if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12 || yearNum < 1900 || yearNum > 2016) {
        error.textContent = "Invalid Date of Birth. Day: 1-31, Month: 1-12, Year: 1900-2016.";
        return false;
    }

    error.textContent = "";
    alert("Date of Birth is submitted!");
    return true;
}
// degree validation
function validateDegree() {
    const degrees = document.querySelectorAll('input[name="degree"]:checked');
    const error = document.getElementById("error");

    if (degrees.length === 0) {
        error.textContent = "At least one degree must be selected.";
        return false;
    }

    error.textContent = "";
    alert("Degree selection is valid!");
    return true;
}
// bloodGroup validation
function validateBloodGroup() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const error = document.getElementById("error");

    if (bloodGroup === "") {
        error.textContent = "Blood Group must be selected.";
        return false;
    }

    error.textContent = "";
    alert("Your Blood Group is Submitted!");
    return true;
}
// picture validation
function validateProfilePicture() {
    const profilePicture = document.getElementById("profilePicture").value;
    const error = document.getElementById("error");

    if (profilePicture === "") {
        error.textContent = "Please select a profile picture.";
        return false;
    }

    error.textContent = "";
    alert("Profile Picture is valid!");
    return true;
}