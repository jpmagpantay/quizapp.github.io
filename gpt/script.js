// Add your javascript logic here 
// Get the container div
let container = document.querySelector('.container');

// Add the class "fade-in" to the container when the page loads
window.onload = function() {
  container.classList.add("fade-in");
}

document.getElementById("submit-button").addEventListener("click",function() {
	// body...
	location.href ="quiz.html";
});