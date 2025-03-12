// Task 1 - Base Structure Setup

// Creating the risk form to dynamically add a risk to the risk dashboard

const riskdashboard = document.getElementById('riskdashboard');

console.log("Risk Dashboard Loaded");

const form = document.getElementById('addriskform');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const riskitem = document.getElementById('riskitem').value;
    const risklevel = document.getElementById('risklevel').value;
    const department = document.getElementById('department').value;

addriskitem(riskitem, risklevel, department);

document.getElementById('riskitem').value = '';
document.getElementById('risklevel').value = 'Low';
document.getElementById('department').value = '';
});



// Task 2 - Adding Risk Items

// Creating a function to add a risk with a name, level, and department to the dashboard

function addriskitem(riskitem, risklevel, department) {
    const riskcard = document.createElement('div');
    riskcard.classList.add('riskcard');

    const riskdetail = `
    <p><strong>Risk Item:</strong> ${riskitem}</p>
    <p><strong>Risk Level:</strong> ${risklevel}</p>
    <p><strong>Department:</strong> ${department}</p>
    <button class='resolve-btn'>Resolve</button>
    `;
    riskcard.innerHTML = riskdetail
    
    // (Task 3) - Removing Risk Items

    // Creating a Resolve button to remove the risk from the dashboard

    const resolvebutton = riskcard.querySelector('.resolve-btn');
    resolvebutton.addEventListener('click', function() {
        riskcard.remove();
    });

    riskdashboard.appendChild(riskcard);
}

addriskitem("Data Breach", "High", "IT");
addriskitem("Supply Chain Disruption", "Medium", "Operations");