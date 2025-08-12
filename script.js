document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Close all other open answers
            document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
                if (openAnswer !== answer) {
                    openAnswer.classList.remove('open');
                    openAnswer.previousElementSibling.classList.remove('active');
                }
            });

            // Toggle the clicked answer
            answer.classList.toggle('open');
            question.classList.toggle('active');
        });
    });

    // Language Selector Functionality
    const languageSelectors = document.querySelectorAll('.language-select, .language-select-footer');

    languageSelectors.forEach(selector => {
        selector.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            console.log('Language changed to:', selectedLanguage);

            // Sync both dropdowns
            languageSelectors.forEach(otherSelector => {
                otherSelector.value = selectedLanguage;
            });
        });
    });

    // Code for 'Get Started' Button
    const getStartedButtons = document.querySelectorAll('.btn-red');
    getStartedButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const parentSection = button.closest('.hero, .faq');
            const emailInput = parentSection.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                alert(`Thank you for your interest! An account would be created for ${emailInput.value} on a real Netflix website. This is a project clone.`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address to get started.');
            }
        });
    });
    
    // Code for Sign-in Modal
    const signInBtn = document.getElementById('signInBtn');
    const signinModal = document.getElementById('signinModal');
    const closeBtn = document.querySelector('.close-btn');

    // Show the modal when 'Sign In' button is clicked
    signInBtn.addEventListener('click', () => {
        signinModal.style.display = 'flex';
    });

    // Hide the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        signinModal.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal content
    signinModal.addEventListener('click', (event) => {
        if (event.target === signinModal) {
            signinModal.style.display = 'none';
        }
    });

    // Handle form submission (for demo purposes)
    const signinForm = document.querySelector('.signin-form');
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        alert(`Attempting to sign in with email: ${email} and password: ${password}. This is a static demo.`);
        signinModal.style.display = 'none';
    });
});