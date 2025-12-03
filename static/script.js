const fortuneText = document.getElementById('fortuneText');
const crystalBall = document.getElementById('crystalBall');

crystalBall.addEventListener('click', getFortune);

function getFortune(event) {
    event.preventDefault(); // stop any default navigation

    // Show loading message
    fortuneText.innerHTML = '<p style="animation: pulse 1s ease-in-out infinite;">Consulting the spirits...</p>';
    
    // Add glow effect
    crystalBall.style.filter = 'brightness(1.6) drop-shadow(0 0 50px rgba(147, 51, 234, 1))';
    
    // Fetch fortune from backend
    fetch('/get-fortune')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                fortuneText.innerHTML = `<p>${data.fortune}</p>`;
                crystalBall.style.filter = 'brightness(1)';
                fortuneText.style.animation = 'none';
                setTimeout(() => {
                    fortuneText.style.animation = 'fadeInScale 1.5s ease';
                }, 10);
            }, 800);
        })
        .catch(error => {
            console.error('Error:', error);
            fortuneText.innerHTML = '<p>The spirits are silent... try again.</p>';
            crystalBall.style.filter = 'brightness(1)';
        });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}
`;
document.head.appendChild(style);
