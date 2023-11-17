
const earlyBirdSelect = document.getElementById("earlyBirdSelect");
const regularSelect = document.getElementById("regularSelect");
const vipSelect = document.getElementById("vipSelect");
const totalAmount = document.getElementById("totalAmount");

// Add change event listeners to the select elements
earlyBirdSelect.addEventListener("change", calculateTotal);
regularSelect.addEventListener("change", calculateTotal);
vipSelect.addEventListener("change", calculateTotal);

// Function to calculate the total amount
function calculateTotal() {
    const earlyBirdPrice = 80;
    const regularPrice = 100;
    const vipPrice = 120;
    const serviceFeeEarlyBird = 2;
    const serviceFeeRegular = 2.5;
    const serviceFeeVIP = 3;

    const earlyBirdQuantity = parseInt(earlyBirdSelect.value);
    const regularQuantity = parseInt(regularSelect.value);
    const vipQuantity = parseInt(vipSelect.value);

    const total = (earlyBirdPrice * earlyBirdQuantity + serviceFeeEarlyBird * earlyBirdQuantity) +
                 (regularPrice * regularQuantity + serviceFeeRegular * regularQuantity) +
                 (vipPrice * vipQuantity + serviceFeeVIP * vipQuantity);

    totalAmount.textContent = `$ ${total.toFixed(2)}`;
}

// Initialize total amount on page load
calculateTotal();
