// Simple Subscribe Function
function subscribe() {
    const email = document.getElementById('email').value;
    if (email === "") {
        alert("Please enter a valid email address.");
    } else {
        alert(`Thank you for subscribing with: ${email}`);
        document.getElementById('email').value = "";
    }
}

// Optional: Add a fade-in effect to posts on load
window.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, index * 200);
    });
});