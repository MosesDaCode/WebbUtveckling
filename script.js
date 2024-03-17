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


document.querySelectorAll('form').forEach(form => {
    let inputs = form.querySelectorAll('input[data-val="true"], select[data-val="true"]')

    inputs.forEach(input => {

        input.addEventListener('change', (e) => {
            switch (e.target.type){
                case 'text':
                    textValidator(e);
                    break;
                case 'email':
                    emailValidator(e)
                    break;
            }
        });
    });
});

const textValidator = (e, minLength = 2) => {

    let sibling = e.target.nextElementSibling;

    if (e.target.value.length >= minLength){
        sibling.innerHTML = "";
        return true;
    }

    sibling.innerHTML = e.target.dataset.valRequired;
    return false;
};

const emailValidator = (e) => {
    let sibling = e.target.nextElementSibling;

    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(e.target.value)) {
        sibling.innerHTML = "";
        return true;
    }

    sibling.innerHTML = e.target.dataset.valRequired;
    return false;
};





document.addEventListener('DOMContentLoaded', async () => {
    async function fetchSpecialistsAndFillSelect() {
        const selectElement = document.getElementById('spec');
        if (!selectElement) {
            console.error('Select element #spec not found');
            return;
        }

        try {
            const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/specialists', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const specialists = await response.json();

            selectElement.innerHTML = '<option value="">Välj en specialist</option>';

            specialists.forEach(specialist => {
                const option = new Option(`${specialist.firstName} ${specialist.lastName}`, specialist.id);
                selectElement.add(option);
            });
        } catch (error) {
            console.error('Could not fetch specialists:', error);
        }
    }

    await fetchSpecialistsAndFillSelect();

});



    