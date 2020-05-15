//get references to interactive elements
const txtName = document.getElementById("name");
const txtTickets = document.getElementById("hours");
const txtOutput = document.getElementById("output");
const theForm = document.getElementById("wagesForm");
const btnCalculate = document.getElementById("calculate");

//add event listener
btnCalculate.addEventListener("click", calculate);


function calculate() {
    
    const hamiltonTicketPrice = 85;
    const lionKingTicketPrice = 67;
    const missSiagonTicketPrice = 83;
    const phatomOfTheOpera = 79;
    
    const name = txtName.value;
    const hours = parseInt(txtTickets.value); 
    
    const Total Price = ticketPrice * numberOfTickets;
}

if 6 or more tikets are selected apply a 10% discount off total Price
if 10 or more tickets are selected apply a 15% discount off total price

if e-ticket is selected add 0 to the total price
if collect from post office is selcted add 1.50 to the total price
if postal is selcted add 3.99 to the total price

function theatreShow () {
    document.getElementById("theatreShow").classList.toggle("show")
}
window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        } 
    }
}