// Function to update the size information
function updateSize() {
    const width = window.innerWidth; // Get the width of the window
    const height = window.innerHeight; // Get the height of the window
    const sizeInfo = document.getElementById('sizeInfo'); // Select the div with id sizeInfo
    sizeInfo.querySelector('h1').textContent = `Width: ${width} and Height: ${height}`; // Update h1 text
}

// Initial call to set size on page load
updateSize();

// Add event listener for window resize
window.addEventListener('resize', updateSize);