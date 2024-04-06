document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Loop through each dropdown item
    dropdownItems.forEach(function (item) {
        // Add click event listener to each dropdown item
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default action
            const newValue = this.getAttribute('data-value'); // Get the value of the clicked item
            const dropdownToggle = this.closest('.dropdown').querySelector('.dropdown-toggle'); // Find the corresponding dropdown button
            dropdownToggle.textContent = newValue; // Set the text content of the dropdown button
        });
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const topElements = document.querySelectorAll('.top');
const rightElements = document.querySelectorAll('.right');
const leftElements = document.querySelectorAll('.left')
const buttomElements = document.querySelectorAll('.buttom')

topElements.forEach((el) => observer.observe(el));
rightElements.forEach((el) => observer.observe(el));
leftElements.forEach((el) => observer.observe(el));
buttomElements.forEach((el) => observer.observe(el));

