document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var First_name = document.getElementById('First_name').value;
    var Last_name = document.getElementById('Last_name').value;
    var email = document.getElementById('email').value;
    var subscribe = document.getElementById('subscribe').checked;
    var city = document.getElementById('city').value;
    var Contact = document.getElementById('Contact').value;
    var Password = document.getElementById('Password').value;
    var Conform_Password = document.getElementById('Conform_Password').value;

    console.log("First name: " + First_name);
    console.log("Last name: " + Last_name);
    console.log("Email: " + email);
    console.log("Subscribe: " + (subscribe ? "Yes" : "No"));
    console.log("City: " + city);
    console.log("Contact: " + Contact);
    console.log("Password: " + Password);

    if(Password !== Conform_Password) {
        alert("Password is not the same as Conform Password");
    } else {
        console.log("Conform_Password: " + Conform_Password);

        // Clear form fields
        document.getElementById('First_name').value = "";
        document.getElementById('Last_name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('subscribe').checked = false;
        document.getElementById('city').value = "";
        document.getElementById('Contact').value = "";
        document.getElementById('Password').value = "";
        document.getElementById('Conform_Password').value = "";
    }
});