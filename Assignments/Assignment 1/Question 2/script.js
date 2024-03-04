let applications = []; // Array to store application objects

function validateForm(application) {
    // Simple regex for basic email and phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Simple pattern: expecting 10 digits

    // Check required fields are not empty
    if (!application.firstName || !application.lastName || !application.email || !application.phoneNumber) {
        alert("First name, last name, email, and phone number are required.");
        return false;
    }

    // Validate email format
    if (!emailRegex.test(application.email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number format
    if (!phoneRegex.test(application.phoneNumber)) {
        alert("Please enter a valid 10-digit phone number without any dashes or spaces.");
        return false;
    }

    // Add more validations here if needed

    // If all validations pass
    return true;
}

function submitApplication() {
    // Collect form data
    const form = document.getElementById('applicationForm');
    const formData = new FormData(form);
    let application = {};
    for (let [key, value] of formData.entries()) {
        application[key] = form.elements[key].type === 'checkbox' ? form.elements[key].checked : value;
    }

    // Validate the form data
    if (!validateForm(application)) {
        return; // Stop the submission if validation fails
    }

    // Simulate storing application data (e.g., in a database)
    applications.push(application);
    console.log("Application submitted:", application);

    // Clear the form for the next entry
    form.reset();
    document.getElementById('viewTableBtn').style.display = 'block'; // Show the "View Applications as Table" button
}

function viewApplications() {
    // Generate table with application data
    let tableHTML = "<table><tr><th>Name</th><th>Email</th><th>Phone Number</th><th>Education Level</th><th>Skills</th><th>Start Date</th><th>References</th></tr>";
    applications.forEach(app => {
        tableHTML += `<tr>
                        <td>${app.firstName} ${app.lastName}</td>
                        <td>${app.email}</td>
                        <td>${app.phoneNumber}</td>
                        <td>${app.educationLevel}</td>
                        <td>${app.skills}</td>
                        <td>${app.startDate}</td>
                        <td>${app.referenceName} (${app.referenceContact}, ${app.referenceRelationship})</td>
                      </tr>`;
    });
    tableHTML += "</table>";
    document.getElementById('applicationsTable').innerHTML = tableHTML;
}

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    submitApplication();
});
