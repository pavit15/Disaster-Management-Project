
document.getElementById("goToPageButton").addEventListener("click", function () {
    window.location.href = "dis1.html"; 
});
document.getElementById("goToPage2Button").addEventListener("click", function () {
    window.location.href = "contact.html"; 
});

function displayContactInfo() {
    const contactInfo = {
        cityName: "New York",
        phone: "123-456-7890",
        email: "info@newyork.com"
    };

    const contactDiv = document.getElementById('contact-info');
    contactDiv.innerHTML = `
        <h2>Contact Information for ${contactInfo.cityName}</h2>
        <p>Phone: ${contactInfo.phone}</p>
        <p>Email: ${contactInfo.email}</p>
    `;
}

// Google Map API
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.0760, lng: 72.8777}, // Change the coordinates to your desired location
        zoom: 12 // Adjust the zoom level as needed
    });
}

// Call the function to display contact information
displayContactInfo();

