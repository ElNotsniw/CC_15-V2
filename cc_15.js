// Task 1 - Base Structure Setup

// Creating the risk form to dynamically add a risk to the risk dashboard

const riskdashboard = document.getElementById('riskdashboard');

console.log("Risk Dashboard Loaded");

const form = document.getElementById('addriskform');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const riskinput = document.getElementById('riskitem').value;

    const riskitemslist = document.getElementById('riskitemslist');
    const newriskitem = document.createElement('div');
    newriskitem.textContent = riskinput;
    riskitemslist.appendChild(newriskitem);

    document.getElementById('riskitem').value = '';
    });