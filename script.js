document.querySelectorAll(".btn").forEach(button => {
    // Hover effect
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#ff5733"; // Change color on hover
        button.style.transform = "scale(1.1)"; // Slightly enlarge
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#007bff"; // Restore original color
        button.style.transform = "scale(1)"; // Restore size
    });

    // Click event
    button.addEventListener("click", () => {
        button.style.backgroundColor = "#28a745"; // Change color when clicked
        alert("Button Clicked! 🎉"); // Show alert message

        // Restore color after delay
        setTimeout(() => {
            button.style.backgroundColor = "#007bff"; // Restore after 300ms
        }, 300);
    });
});
