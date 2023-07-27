document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("comment-form");
    var commentInput = document.getElementById("comment");
    var feedbackMessage = document.getElementById("feedback-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      feedbackMessage.textContent = "Thank you for your feedback!";
      commentInput.value = ""; // Clear the comment input
      setTimeout(function() {
        feedbackMessage.textContent = ""; // Reset the feedback message after a delay
      }, 3000); // Adjust the delay time as needed
    });
  });
  