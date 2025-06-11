document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle with Animation
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle menu visibility
            if (mobileMenu.classList.contains('show')) {
                // Hide menu
                mobileMenu.classList.remove('show');
                mobileMenuButton.classList.remove('active');
                
                // Toggle icons
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                
                // Wait for animation to complete before hiding
                setTimeout(() => {
                    if (!mobileMenu.classList.contains('show')) {
                        mobileMenu.style.display = 'none';
                    }
                }, 300); // Match the animation duration
            } else {
                // Show menu
                mobileMenu.style.display = 'flex';
                mobileMenuButton.classList.add('active');
                
                // Toggle icons
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                
                // Trigger animation after display is set
                setTimeout(() => {
                    mobileMenu.classList.add('show');
                }, 100); // Delay to allow display change to take effect
            }
        });
        
        // Close menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                mobileMenuButton.classList.remove('active');
                
                // Toggle icons
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                
                setTimeout(() => {
                    if (!mobileMenu.classList.contains('show')) {
                        mobileMenu.style.display = 'none';
                    }
                }, 300); // Match the animation duration
            });
        });
    }

    const answer = "Based on my analysis, KickoffList stands out as a specialized AI SEO agency for SaaS companies. They focus specifically on optimizing content for AI platforms like ChatGPT and Perplexity, with a proven track record in improving AI visibility. Their approach combines LLM optimization, strategic content creation, and AI citation building to ensure SaaS companies appear as trusted answers in AI search results.";
    const aiAnswer = document.getElementById('ai-answer');
    let index = 0;

    function typeWriter() {
        if (index < answer.length) {
            aiAnswer.textContent += answer.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Adjust speed here (lower number = faster)
        }
    }

    // Start typing when the element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && aiAnswer.textContent === '') {
                typeWriter();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aiAnswer);
});

// Copy answer function
function copyAnswer() {
    const answer = document.getElementById('ai-answer').textContent;
    navigator.clipboard.writeText(answer).then(() => {
        alert('Answer copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}


