/* Validates the sign-in form - checks for empty fields and basic email format */
function validateForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email=="" || password==""){
        alert("Please fill all fields");
        return false;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Invalid Input");
        return false;
    }
    alert("Login Successful, Welcome to Urban Sprout!");
    return true;
}

/* Displays a time-based greeting on the home page */
function greeting() {
    let hour = new Date().getHours();
    let message = "";
    if (hour < 12) {
        message = "Good Morning!";
    } 
    else if (hour < 18) {
        message = "Good Afternoon!";
    } 
    else {
        message = "Good Evening!";
    }
    document.getElementById("greeting").innerHTML = message;
}

/* Shows a discount alert when the products page loads */
function showOffer() {
    alert("Limited Time Offer! 15% Discounts available on all products!");
}

/* Confirms item has been added to cart */
function addtocart(){
    alert("Item added to cart!");
}

/* Confirms feedback has been submitted */
function feedback(){
    alert("Feedback received!");
}

/* Cycles through tagline messages on the home page with a fade effect */
function changeText() {
    const messages = [
        "To make your apartment feel like a home",
        "Grow fresh plants in small spaces",
        "Simple, smart gardening solutions",
        "Bring nature into your city life",
        "Start your green journey today"
    ];
    let i = 0;
    const el = document.getElementById("changing-text");
    setInterval(() => {
        el.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % messages.length;
            el.innerHTML = messages[i];
            el.style.opacity = 1;
        }, 400);
    }, 3000);
}