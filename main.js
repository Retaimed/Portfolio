let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* scroll */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* sticky */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* toggle navbar and icon */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* scroll reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* type js reveal */
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Engineer', 'Computer Science Student', 'Fullstack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Your message has been sent successfully!');
            form.reset(); // Reset the form after successful submission
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const moreInfo = document.getElementById('more-info');

    toggleBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            toggleBtn.textContent = 'Read less';
        } else {
            moreInfo.classList.add('hidden');
            toggleBtn.textContent = 'Read more';
        }
    });
});



