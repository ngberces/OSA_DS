document.addEventListener('DOMContentLoaded', function () {
    // Initially show the home content
    changeContent('PhilLaw', document.querySelector('.navbar a'));
});

function changeContent(page, clickedNavLink) {
    // Hide all content divs
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Remove 'active' class from all navbar links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected content
    const selectedContent = document.getElementById(`${page}-content`);
    selectedContent.style.display = 'block';

    // Add 'active' class to the clicked navbar link
    clickedNavLink.classList.add('active');
}
