const toggleSwitch = document.getElementById('theme-toggle');

// Function to switch between dark and light themes
function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        document.querySelectorAll('.navitem').forEach(item => item.classList.add('dark-mode'));
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('.navbar').classList.remove('dark-mode');
        document.querySelectorAll('.navitem').forEach(item => item.classList.remove('dark-mode'));
    }
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', switchTheme);

// gdfgthghg
// hghghhh
// bhjyhyhy

const img = document.querySelector('img[alt="shoe"]');
img.addEventListener('mousemove', function(e) {
    const zoom = document.querySelector('.zoom-lens');
    // Logic to show zoomed part of the image based on cursor position
});