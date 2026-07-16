const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💜";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = "floatUp 6s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);

// Add floating animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-110vh);
        opacity:0;
    }
}`;
document.head.appendChild(style);
