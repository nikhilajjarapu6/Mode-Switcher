document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to be executed after the DOM is fully loaded
    document.getElementById('toggle').addEventListener('click', function(e) {
        const html = document.querySelector('body');
        html.classList.toggle('dark');

        const toggleButton = document.getElementById('toggle');
        const icon = document.getElementById('icon');

        if (html.classList.contains('dark')) {
            toggleButton.innerHTML = "Light Mode";
            // icon.setAttribute('class', 'fas fa-sun'); // Update class attribute
        } else {
            toggleButton.innerHTML = "Dark Mode";
            // icon.setAttribute('class', 'fas fa-moon'); // Update class attribute
        }
    });
});
