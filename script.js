function volume_sphere(event) {
    // Prevent form submission (page reload)
    event.preventDefault();

    // Get the radius from input
    let radius = parseFloat(document.getElementById("radius").value);

    // Validate input: non-negative & numeric
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = NaN;
        return false;
    }

    // Calculate volume: (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);

    return false; // Prevent default form submission
}

// Attach function to form submit
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
