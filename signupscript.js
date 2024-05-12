// Get references to all the buttons
const learnMoreBtn = document.getElementById('learn-more-btn');
const getStartedBtn = document.getElementById('get-started-btn');
const signupBtn = document.getElementById('signup-btn');

// Add event listeners to each button
learnMoreBtn.addEventListener('click', () => {
    // Redirect to the "About Us" section
    window.location.href = "#about";
});

getStartedBtn.addEventListener('click', () => {
    // Redirect to the signup form (replace with your actual form URL)
    window.location.href = "your-signup-form-url.com";
});

signupBtn.addEventListener('click', () => {
    // Redirect to the signup form (replace with your actual form URL)
    window.location.href = "your-signup-form-url.com";
});

// Show the lead magnet pop-up after 30 seconds
setTimeout(() => {
    const popup = document.getElementById('lead-magnet-popup');
    popup.style.display = 'block';
}, 30000); // 30000 milliseconds = 30 seconds