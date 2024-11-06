const sections = document.querySelectorAll("section.zoom-in,section.slide-in,section.bounce-in,section.slide-down,section.flip-in") ;
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

         // validations 
         document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("contactForm").addEventListener("submit", function(event) {
                event.preventDefault();  // Prevent the form from submitting until we validate
        
                // Retrieve form values and trim any leading/trailing spaces
                const name = document.getElementById("floatingTextarea").value.trim();
                const email = document.getElementById("floatingInput").value.trim();
                const phone = document.getElementById("floatingNumber").value.trim();
                const message = document.getElementById("floatingTextarea2").value.trim();
        
                // Check if any field is empty or contains only spaces
                if (!name || !email || !phone || !message) {
                    alert("Please fill in all fields with valid information.");
                    return;
                }
        
                // Phone number validation (must be a 10-digit number)
                if (!/^\d{10}$/.test(phone)) {
                    document.getElementById("phoneError").style.display = "block";
                    return;
                } else {
                    document.getElementById("phoneError").style.display = "none"; // Clear the error message if valid
                }
        
                // Prepare form data to send via AJAX
                const formData = new FormData(event.target);
        
                // Send the form data via fetch()
                fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Your details have been shared with the owner, The Frame Heaven.");
                        window.location.href = "index.html";
                    } else {
                        alert("An error occurred while submitting your details. Please try again later.");
                    }
                })
                .catch(error => {
                    alert("Failed to submit the form. Please check your network connection.");
                });
        
                // Reset the form after submission
                document.getElementById("contactForm").reset();
            });
        });
        