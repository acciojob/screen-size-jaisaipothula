function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimensions = document.getElementById('dimensions');
    dimensions.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial call to set dimensions on page load
updateDimensions();

// Event listener for window resize
window.addEventListener('resize', updateDimensions);
