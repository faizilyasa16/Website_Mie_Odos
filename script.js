// Get all menu sections
const menuSections = document.querySelectorAll('.nama-menu');

// Initially, hide all menu sections except "Mie Odos"
menuSections.forEach(section => {
    const sectionTitle = section.querySelector('h1').textContent.trim().toLowerCase();
    if (sectionTitle.includes('mie odos')) {
        section.style.display = 'block'; // Show "Mie Odos"
    } else {
        section.style.display = 'none'; // Hide other sections
    }
});

// Get all buttons with the class 'button-one'
const buttons = document.querySelectorAll('.button-one');

// For each button, add a click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text of the clicked button and convert to lowercase
        const menuName = button.textContent.trim().toLowerCase();
        
        // Hide all menu sections
        menuSections.forEach(section => section.style.display = 'none');

        // Show the matching menu section
        menuSections.forEach(section => {
            const sectionTitle = section.querySelector('h1').textContent.trim().toLowerCase();
            if (sectionTitle.includes(menuName)) {
                section.style.display = 'block';
            }
        });
    });
});