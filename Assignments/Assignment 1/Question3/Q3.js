let applications = [];

document.addEventListener('DOMContentLoaded', () => {
    const applicationForm = document.getElementById('jobApplicationForm');
    const viewTableButton = document.getElementById('viewTableButton');
    const applicationTable = document.getElementById('applicationTable');

    applicationForm.onsubmit = function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        let application = {};
        for (let [key, value] of formData.entries()) {
            application[key] = value;
        }
        applications.push(application);
        console.log("Application submitted:", application);
        this.reset();  // Clear the form for the next entry
    };

    viewTableButton.onclick = function() {
        renderTable(applications, applicationTable);
    };
});

function renderTable(dataArray, tableContainer) {
    tableContainer.innerHTML = '';

    let table = document.createElement('table');
    table.className = 'application-data-table';
    
    let thead = table.createTHead();
    let headerRow = thead.insertRow();
    for (let key in dataArray[0]) {
        let th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);  // Capitalize the first letter
        headerRow.appendChild(th);
    }

    let tbody = table.createTBody();
    dataArray.forEach(item => {
        let row = tbody.insertRow();
        for (let key in item) {
            let cell = row.insertCell();
            let text = (key === 'resume') ? 'Uploaded File' : document.createTextNode(item[key]);
            cell.appendChild(text);
        }
    });

    tableContainer.appendChild(table);
}
