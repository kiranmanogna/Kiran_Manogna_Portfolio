/*=================== Toggle icon navbar =====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
   

/*=================== Scroll section active link =====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /*=================== Sticky navbar =====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*=================== Remove toggle icon and navbar =====================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


    /*=================== Scroll reveal =====================*/
ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading' , {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about=content', {origin: 'right'});

    /*=================== Scroll reveal =====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer' , 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});




document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        phone: document.querySelector("input[name='phone']").value,
        subject: document.querySelector("input[name='subject']").value,
        message: document.querySelector("textarea[name='message']").value
    };

    fetch("http://localhost:8080/api/sendEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("Message Sent: " + data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to send message.");
    });
});