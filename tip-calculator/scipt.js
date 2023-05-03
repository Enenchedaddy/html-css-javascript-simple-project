@@ -1,11 +1,13 @@
const calculateBtn = document.getElementById("calculate");
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

calculateBtn.addEventListener("click", function () {
  const bill = billInput.value;
  const tip = tipInput.value;
  const total = bill * (1 + tip / 100);
  totalSpan.innerText = `$${total.toFixed(2)}`;
});
function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);