const sections = document.querySelectorAll("section.zoom-in,section.slide-in,section.bounce-in,section.slide-down,section.flip-in") ;
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});