// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        alert("Thank you, " + name + "! Your message has been received.");

        contactForm.reset();
    });
}


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ================= GALLERY IMAGE CLICK =================

/* ========================================
   GALLERY CATEGORY SWITCHING
   ======================================== */

function showCategory(category) {

    // Get both categories

    const categories = document.querySelectorAll(".art-category");

    // Hide both categories

    categories.forEach(function(item) {

        item.classList.remove("active-category");

    });


    // Get all category buttons

    const buttons = document.querySelectorAll(".category-btn");

    // Remove active style from all buttons

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Show selected category

    const selectedCategory =
        document.getElementById(category);

    selectedCategory.classList.add("active-category");


    // Make clicked button active

    event.currentTarget.classList.add("active");

}