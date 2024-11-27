const billAmount = document.getElementById("billAmount");

const customTipAmount = document.getElementById("customTipAmount");

const splitCount = document.getElementById("splitCount");



//const submitBtn = document.getElementById("");
const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");
const amountPerHead = document.getElementById("amountPerPerson");


function submit() {
    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(customTipAmount.value);
    const numberofPeople = splitCount.value;
    if(!bill || !tip || !numberofPeople){
        alert("some fields are empty")
    }else {
        const totalBill = parseFloat(bill + tip);
        const amountPerPerson = parseFloat(totalBill / numberofPeople).toFixed(2);

        totalAmount.innerHTML = `The total amount is: ${totalBill}`;
        tipAmount.innerHTML = `Your tip is: ${tip}`;
        amountPerHead.innerHTML = `Each person pays: ${amountPerPerson}`;
    }
}

//Function to reset fields
function reset(){
    billAmount.value = "";
    customTipAmount.value = "";
    splitCount.value = "";
  }

  function toggleDivVisibility(){
    const serviceRatingRadioButton = document.getElementById("serviceRating");
    const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

    if(serviceRatingRadioButton.checked){
        serviceRatingInputDiv.style.display = "block";
    } else {
        serviceRatingInputDiv.style.display = "none"
    }
  }

//function customToggle(){
// const customRatingBtn = document
//}