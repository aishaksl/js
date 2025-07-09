const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#first-option");
const secondOption = document.querySelector("#second-option");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => (resultInput.value = result));
}
