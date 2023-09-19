
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

// Call the function to display contact information
displayContactInfo();

