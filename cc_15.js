// (Task 1) - Base Structure Setup

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



// --------------------------------------------------------------------------------------------------------------------



// (Task 2) - Adding Risk Items

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
    resolvebutton.addEventListener('click', function(event) {
        riskcard.remove();
    });

    riskdashboard.appendChild(riskcard);

    // (Task 4) - Risk Categorization

    // Set certain colors to certain risk level

    switch(risklevel) {
        case 'Low':
            riskcard.style.backgroundColor = 'green';
            break;
        case 'Medium':
            riskcard.style.backgroundColor = 'yellow'
            break;
        case 'High':
            riskcard.style.backgroundColor = 'red';
            break;
        default:
            riskcard.style.backgroundColor = 'gray'
    }
}



// --------------------------------------------------------------------------------------------------------------------



// (Task 5) - Bulk Risk Updates

// Creating an increase risk level button to apply a new higher risk level to any risk in the dashboard

const increaseriskbutton = document.createElement('button');
increaseriskbutton.textContent = 'Increase Risk Levels';
increaseriskbutton.addEventListener('click', function() {
    const riskcards = document.querySelectorAll('.riskcard');

    riskcards.forEach(card => {
        const riskleveltext = card.querySelector('p:nth-child(2)').textContent;

        if (riskleveltext.includes('Low')) {
            updaterisklevel(card, 'Medium');
        } else if (riskleveltext.includes('Medium')) {
            updaterisklevel(card, 'High');
        }
    });
});

document.body.insertBefore(increaseriskbutton, riskdashboard);

// Change the color whenever a new risk level is assigned to a risk

function updaterisklevel(card, newrisklevel) {
    const riskleveltextelement = card.querySelector('p:nth-child(2)');
    riskleveltextelement.innerHTML = `<strong>Risk Level:</strong> ${newrisklevel}`;

    switch(newrisklevel) {
        case 'Low':
            card.style.backgroundColor = 'green';
            break;
        case 'Medium':
            card.style.backgroundColor = 'yellow'
            break;
        case 'High':
            card.style.backgroundColor = 'red';
            break;
        default:
            card.style.backgroundColor = 'gray'
    }
}


addriskitem("Data Breach", "High", "IT");
addriskitem("Supply Chain Disruption", "Medium", "Operations");
addriskitem("HR Compliance Issue", "Low", "Human Resources");