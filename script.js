// document.addEventListener('DOMContentLoaded', function() {
//     const navbarLinks = document.querySelectorAll('.navbar a');

//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             const targetId = this.getAttribute('href');

//             if (targetId.startsWith('#') && targetId !== '#') {
//                 e.preventDefault();
//                 const targetSection = document.querySelector(targetId);
//                 if (targetSection) {
//                     targetSection.scrollIntoView({
//                         behavior: 'smooth'
//                     });
//                 }
//             }
//             // If it's not an internal link (starts with '#'), it will navigate as a normal link
//         });
//     });
    
//     // Typed.js initialization for the 'text' class
//     var typedText = new Typed(".text", {
//         strings: ["Frontend Developer", "YouTuber", "Flutter Developer", "Designer", "Editor"],
//         typeSpeed: 100,
//         backSpeed: 100,
//         backDelay: 1000,
//         loop: true
//     });

    
// });
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If it's not an internal link (starts with '#'), it will navigate as a normal link
        });
    });

    const buttons = document.querySelectorAll('.btn-box');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');

            if (targetUrl.startsWith('#') && targetUrl !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(targetUrl);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // If it's not an internal link (starts with '#'), it will navigate as a normal link
        });
    });

    // Typed.js initialization for the 'text' class
    var typedText = new Typed(".text", {
        strings: ["Frontend Developer", "YouTuber", "Flutter Developer", "Designer", "Editor"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
