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


//for the accordion
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const toggleBtn = item.querySelector('.toggle-btn');

      header.addEventListener('click', function () {
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0';
        }
      });
    });
  });


