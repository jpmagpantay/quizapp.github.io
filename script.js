
// Add your javascript logic here 
// Get the container div
let container = document.querySelector('.container');

// Add the class "fade-in" to the container when the page loads
window.onload = function() {
  container.classList.add("fade-in");
}

// alert function trigger after the fade in function
window.addEventListener("load",
    function() {
  alert("This site is still in development phase, you may login with any details for now and press the Login button in order to proceed with the test.");
})


//
// for login.html
document.getElementById("submit-button").addEventListener("click",
  function(event){
  // body...
  event.preventDefault();
  location.href ="quiz.html";
});

function handleFormSubmit(event) {

  event.preventDefault();
    location.href = "quiz.html";
      return false;
}
// for login.html until here

// 

  // Get the input fields in createAccount.html
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const email = document.getElementById("email");
  const contactNumber = document.getElementById("contactNumber");
  const dob = document.getElementById("dob");
  const submitBtn = document.querySelector('input[type=submit]');

  // Add a click event listener to the button
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the input values
    const nameValue = name.value;
    const usernameValue = username.value;
    const passwordValue = password.value;
    const emailValue = email.value;
    const contactNumberValue = contactNumber.value;
    const dobValue = dob.value;

    // Save the input values to local storage
    localStorage.setItem("name", nameValue);
    localStorage.setItem("username", usernameValue);
    localStorage.setItem("password", passwordValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("contactNumber", contactNumberValue);
    localStorage.setItem("dob", dobValue);

    // Clear the input fields
    name.value = "";
    username.value = "";
    password.value = "";
    email.value = "";
    contactNumber.value = "";
    dob.value = "";

    alert("Account created successfully!");
  });


    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
