// Firebase imports and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const appSetting = {
  databaseURL: "https://cgnrchits-cd7d1-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const collectionListDB = ref(database, "collection");


const idEl = document.querySelector("#id");
const hiddenBranchNameEL = document.querySelector("#hiddenBranchName");
const depositDateEL = document.querySelector("#depositDate");
const staffNameEL = document.querySelector("#staffName");
const receiptDateEL = document.querySelector("#receiptDate");
const custNameEL = document.querySelector("#custName");
const chitNumberEL = document.querySelector("#chitNumber");
const instalmentEL = document.querySelector("#instalment");
const receiptNumEL = document.querySelector("#receiptNum");
const amountEL = document.querySelector("#amount");
const commissionEL = document.querySelector("#commission");
const bankAmountEL = document.querySelector("#bankAmount");
const collectionForm = document.querySelector("#collectionForm");

// Event listener for the submit button
collectionForm.addEventListener("submit", function(e) {
    e.preventDefault();  // Prevents form from submitting the traditional way

    if(idEl.value){
        //update Record

    }
    //insert

    const collect = {
        
        hiddenBranchName:hiddenBranchNameEL.value,
        depositDate: depositDateEL.value,
        staffName: staffNameEL.value,
        receiptDate: receiptDateEL.value,
        customerName: custNameEL.value,
        chitNumber: chitNumberEL.value,
        instalment: instalmentEL.value,
        receiptNumber: receiptNumEL.value,
        amount: amountEL.value,
        commission: commissionEL.value,
        bankAmount: bankAmountEL.value
    };

    push(collectionListDB, collect)
        .then(() => {
            alert("Data Saved......");
            collectionForm.reset(); // Optional: Reset the form after submission
        })
        .catch((error) => {
            console.error("Error adding data: ", error);
            alert("An error occurred. Please try again.");
        });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwhgZCH_8UgMKeOUgq7V0tq7oBCijfnkW5bsglv6qSNrbj9OciG-_PK21nDH0mN0uYP/exec';
    const form = document.forms['collectionForm'];
    
  
   
      // Capture current date and time
      const currentDateTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' });
      const [date, time] = currentDateTime.split(', ');
      document.getElementById('date').value = date;
      document.getElementById('time').value = time;

      // Submit the form programmatically
      form.requestSubmit(); // Use requestSubmit to trigger submit event
    

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission

      fetch(scriptURL, { method: 'POST', body: new collectionForm(form) })
        .then(response => {
          alert("Thank you! Your form is submitted successfully.");
          form.reset(); // Clear the form
          
        })
        .catch(error => {
          console.error('Error!', error.message);
          
        });
    });

    const branchName = localStorage.getItem('branchName');
    if (branchName) {
      document.getElementById('branchName').textContent = branchName;
      document.getElementById('branchName').value = branchName;
    } else {
      window.location.href = 'collection.html'; // Redirect to login if no branch name found
    }

    const saveAndClearBtn = document.getElementById('saveAndClearBtn');

    function saveAndClear() {
      // Disable the button to prevent multiple submissions
      saveAndClearBtn.disabled = true;

      // Capture current date and time
      const currentDateTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' });
      const [date, time] = currentDateTime.split(', ');
      document.getElementById('date').value = date;
      document.getElementById('time').value = time;

      // Submit the form programmatically
      form.requestSubmit(); // Use requestSubmit to trigger submit event
    }


