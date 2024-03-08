const toggleMenu = () => {
    const element = document.getElementById('menu')
    if (element.style.display === "none") {
        element.style.display = "block";
        element.style.color = "#ffffff";
    }
    else {
        element.style.display = "none";
    }
}


document.getElementById('theme-toggle-switch').addEventListener('change', function(event){
    if(event.target.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function(currentAccordion) {
        currentAccordion.addEventListener('click', function() {
            
            accordions.forEach(function(accordion) {
                const panel = accordion.nextElementSibling;
                if (accordion !== currentAccordion) {
                    accordion.classList.remove('active');
                    panel.style.maxHeight = null;
                    accordion.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });

            const currentPanel = currentAccordion.nextElementSibling;
            const isExpanded = currentAccordion.classList.contains('active'); 

            if (!isExpanded) {
                currentAccordion.classList.add('active');
                currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
                currentAccordion.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                currentAccordion.classList.remove('active');
                currentPanel.style.maxHeight = null;
                currentAccordion.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
const leftBtn = document.querySelector('.how-btn:first-of-type');
const rightBtn = document.querySelector('.how-btn:last-of-type');

leftBtn.addEventListener('mouseover', () => leftBtn.classList.add('bounce-left'));
leftBtn.addEventListener('mouseout', () => leftBtn.classList.remove('bounce-left'));

rightBtn.addEventListener('mouseover', () => rightBtn.classList.add('bounce-right'));
rightBtn.addEventListener('mouseout', () => rightBtn.classList.remove('bounce-right'));


});


document.addEventListener("DOMContentLoaded", function(){
    const arrowIcon = document.querySelector('.learn-more-btn .fa-arrow-right');

    arrowIcon.addEventListener('mouseover', () =>{
        arrowIcon.classList.add('bounce');
    });

    arrowIcon.addEventListener('mouseout', () =>{
        arrowIcon.classList.remove('bounce');
    });
});