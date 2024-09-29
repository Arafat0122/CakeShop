document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});
