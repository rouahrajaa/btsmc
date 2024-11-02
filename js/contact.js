// Initialize EmailJS
(function() {
    emailjs.init("D242nU-aqRYeLGLUb"); // Replace with your actual EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing/clearing immediately

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_88vk5yn", "template_o4um8uz", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function() {
        showPopup(); // Show popup after successful send
        setTimeout(() => {
            hidePopup();
            clearForm(); // Clear the form after popup disappears
        }, 3000); // Hide popup after 3 seconds
    })
    .catch(function(error) {
        console.log("Failed to send message...", error);
    });
});

function showPopup() {
    const popup = document.getElementById("popupModal");
    popup.style.display = "block";
}

function hidePopup() {
    const popup = document.getElementById("popupModal");
    popup.style.display = "none";
}

function clearForm() {
    document.getElementById("contact-form").reset(); // Clear form fields
}
