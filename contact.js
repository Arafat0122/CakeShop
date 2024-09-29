document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (!name || !email || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields before submitting!',
        });
        return;
    }

    // Confirmation using SweetAlert2
    Swal.fire({
        title: 'Confirm Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Send',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Show success message
            Swal.fire(
                'Sent!',
                'Your message has been sent successfully.',
                'success'
            );

            // Optionally, clear the form
            document.getElementById("contactForm").reset();
        }
    });
});
