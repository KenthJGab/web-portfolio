const image = document.getElementById("zoomImage");
const typingText = document.getElementById("typingText");

// Variables for the image zoom animation
let zoomedIn = false;
let zoomFactor = 1.2;
let originalWidth = image.width;

// Function for the image zoom animation
function zoomImage() {
    if (zoomedIn) {
        image.style.transform = `scale(${zoomFactor})`;
    } else {
        image.style.transform = "scale(1)";
    }
    zoomedIn = !zoomedIn;
    setTimeout(zoomImage, 4000);
}

// Start the image zoom animation
zoomImage();

// Text for the typing animation
function startTypingAnimation() {
    function resetTextAnimation() {
        textIndex = 0;
        typingText.textContent = "";
        typeText();
    }

    const typingText = document.querySelector("#typingText");
    const text = "HI, I'M KENNETH JON GABRIEL";
    let textIndex = 0;

    function typeText() {
        if (textIndex < text.length) {
            typingText.textContent += text.charAt(textIndex);
            textIndex++;
            setTimeout(typeText, 150);
        }
    }

    // Start the typing animation when the page loads
    setTimeout(typeText, 3200);

    const typingPosition = document.querySelector("#typingPosition");
    const positionText = "Full Stack Web Developer";
    const typingSpeed = 200;

    function resetPositionAnimation() {
        charIndex = 0;
        typingPosition.textContent = "";
        typePosition();
    }

    function typePosition() {
        if (charIndex < positionText.length) {
            typingPosition.textContent += positionText.charAt(charIndex);
            charIndex++;
            setTimeout(typePosition, typingSpeed);
        }
    }

    // Start the position animation when the page loads
    setTimeout(typePosition, 3200);

    // Reset both animations every 10 seconds
    setInterval(function () {
        resetTextAnimation();
        resetPositionAnimation();
    }, 3000);
}

// Call the startTypingAnimation function when the page loads
window.addEventListener('load', startTypingAnimation);


