var menuIcon = document.getElementById('menu-icon');
var isDisplaying = false;
menuIcon.onclick= function(){
    var popMenu = document.getElementById('navbar')
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



