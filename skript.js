document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    
    // Add click event listener to the home button
    homeButton.addEventListener('click', function() {
        // Scroll the page to the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const coursesButton = document.getElementById('courses-button');
    
    // Add click event listener to the courses button
    coursesButton.addEventListener('click', function() {
        // Scroll the page to the courses section
        const coursesSection = document.getElementById('courses-section');
        coursesSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const FAQButton = document.getElementById('FAQ-button');
    
    // Add click event listener to the courses button
    FAQButton.addEventListener('click', function() {
        // Scroll the page to the courses section
        const FAQSection = document.getElementById('FAQ-section');
        FAQSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function showLoginForm() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("loginPopup").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("registerPopup").style.display = "block";
}

function closeRegisterForm() {
    document.getElementById("registerPopup").style.display = "none";
}

// Close the popup when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = "none";
    }
}

