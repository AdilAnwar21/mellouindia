var menuIcon = document.getElementById('menu-icon');
var isDisplaying = false;
menuIcon.onclick= function(){
    var popMenu = document.getElementById('navbar')
    popMenu.style.zIndex = "1000";
    if(!isDisplaying){
        popMenu.style.display = "block";
        menuIcon.classList.replace("fa-bars","fa-x");
        isDisplaying = true;
    }else{
        popMenu.style.display = "none"
        menuIcon.classList.replace("fa-x", "fa-bars");
        isDisplaying = false;
    
    }
    
}


// Add this JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                // Close the accordion
                content.style.maxHeight = null;
                content.style.opacity = 0;
            } else {
                // Open the accordion
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = 1;
            }
        });
    });
});

//for carousel
// JavaScript to handle automatic movement of the carousel

//for navabar



//js for scroll reveal
const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2500,
    reset : true
})

const srinverse = ScrollReveal({
    origin:'bottom',
    distance:'85px',
    duration:2500,
    reset : true
})

const srleft = ScrollReveal({
    origin:'left',
    distance : '85px',
    duration: 2000,
    reset:true
})

// const srright = ScrollReveal({
//     origin:'right',
//     distance : '85px',
//     duration: 2000,
//     reset:true
// })

//delicacy-text

sr.reveal ('.delicacy-text',{delay:300});
sr.reveal('.button-nav',{delay:300})
srleft.reveal('.top-image',{delay:250})
srinverse.reveal('.item',{delay:350})
sr.reveal('.right-side',{delay:350})
srleft.reveal('.headers',{delay:350})
// sr.reveal('.logo',{delay:200})
// sr.reveal('.navbar')
// sr.reveal('.social') 
srleft.reveal('.section-part')
srleft.reveal('.section-part2')
srinverse.reveal('.testimonail-head')



var slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: null
};

ScrollReveal().reveal('.containera-images', slideUp);
ScrollReveal().reveal('.signature', slideUp);


//delay for each image logo
const sr2 = ScrollReveal();

    // Define the reveal configuration for each image
    sr2.reveal('.image-grid img:nth-child(1)', {
        delay: 200, // Set the delay for the first image in milliseconds
        duration: 800 // Set the duration of the animation in milliseconds
    });

    sr2.reveal('.image-grid img:nth-child(2)', {
        delay: 400, // Set the delay for the second image in milliseconds
        duration: 800 // Set the duration of the animation in milliseconds
    });

    sr2.reveal('.image-grid img:nth-child(3)', {
        delay: 600, // Set the delay for the third image in milliseconds
        duration: 800 // Set the duration of the animation in milliseconds
    });

    sr2.reveal('.image-grid img:nth-child(4)', {
        delay: 800, // Set the delay for the fourth image in milliseconds
        duration: 800 // Set the duration of the animation in milliseconds
    });


//scroll reveal for gallery
const srgallery = ScrollReveal();

    // Define the reveal configuration for each image
    srgallery.reveal('.image-container img', {
        origin: 'bottom', // Set the origin of the reveal animation
        distance: '20px', // Set the distance of the reveal animation
        duration: 800, // Set the duration of the animation in milliseconds
        delay: 200, // Set the delay for the animation in milliseconds
        easing: 'ease-in-out', // Set the easing function for the animation
        scale: 0.1, // Set the initial scale to 0.1
        opacity: 0, // Set the initial opacity to 0
        beforeReveal: (domEl) => {
            // Set a callback function to gradually increase scale and opacity before reveal
            domEl.style.transition = 'transform 800ms, opacity 800ms';
            domEl.style.transform = 'scale(1)';
            domEl.style.opacity = 1;
        }
    });

//scroll reveal for footer
const srFooter = ScrollReveal({
    origin: 'bottom', // Set the origin of the reveal animation to bottom
    distance: '100px', // Set a larger distance to ensure complete emergence
    duration: 800, // Set the duration of the animation in milliseconds
    easing: 'ease-in-out' // Set the easing function for the animation
});

// Apply the reveal animation to the footer image
srFooter.reveal('.footer img', {
    beforeReveal: (domEl) => {
        domEl.style.transition = 'transform 800ms';
        domEl.style.transform = 'translateY(0)';
    }
});


