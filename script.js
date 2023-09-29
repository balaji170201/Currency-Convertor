let url1 = `https://api.frankfurter.app/currencies`;
let option = document.querySelectorAll('ul');
console.log(option);

let btn = document.getElementById('convert');

// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');

async function getCurrencies(){
    
    let response = await fetch(url1);
    let data = await response.json();
    console.log(data);
    displayDropdown(data);
}
getCurrencies();

function displayDropdown(data){
    let curr = Object.entries(data);    //converting our object into an array
    //console.log(curr);
    for(let i=0;i<curr.length;i++){
        let values = `<li><button class="dropdown-item " type="button"  data-value="${curr[i][0]}">${curr[i][0]}</button></li>`;
        option[0].innerHTML += values;
        option[1].innerHTML += values;
        //console.log(curr[i][0]);      prints the abbreviation of the currency since it is a 2-dimensional array
    }
}

function display1(){
    // Get references to the button and dropdown menu
    let button1 = document.getElementById('btn1');
    let dropdownMenu = document.getElementById('dropdown1');
  
    // Add an event listener to the dropdown menu items
    dropdownMenu.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default button behavior
  
      // Check if a dropdown item button was clicked
      if (e.target && e.target.nodeName === 'BUTTON') {
        // Get the selected value from the data-value attribute
        let selectedValue = e.target.getAttribute('data-value');
  
        // Update the button text with the selected value
        button1.innerText = selectedValue;
      }
    });
}


function display2() {
    // Get references to the button and dropdown menu
    let button2 = document.getElementById('btn2');
    let dropdownMenu = document.getElementById('dropdown2');
  
    // Add an event listener to the dropdown menu items
    dropdownMenu.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default button behavior
  
      // Check if a dropdown item button was clicked
      if (e.target && e.target.nodeName === 'BUTTON') {
        // Get the selected value from the data-value attribute
        let selectedValue = e.target.getAttribute('data-value');
  
        // Update the button text with the selected value
        button2.innerText = selectedValue;
      }
    });
}


function convert(){
    
    var curr1 = document.getElementById('btn1').innerText;
    var curr2 = document.getElementById('btn2').innerText;
    console.log(curr1);
    console.log(curr2);
    var input = document.getElementById('currency1').value;
    console.log(input);
    //var output = document.getElementById('currency2');
    
    if(curr1 === curr2){
        alert("Select different currencies");
    }
    else{
        let url2 = `https://api.frankfurter.app/latest?amount=${input}&from=${curr1}&to=${curr2}`;
        fetch(url2)
        .then((response) => response.json())
        .then((data) => {
            console.log(Object.values(data.rates)[0]);
            document.getElementById('currency2').value = Object.values(data.rates);
        })
        .catch((error) => console.log("Error encountered",error));   
    }
}