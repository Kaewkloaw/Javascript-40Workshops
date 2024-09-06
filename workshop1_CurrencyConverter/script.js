const currency_one = document.getElementById('currency_one');
const currency_two = document.getElementById('currency_two');

const amount_one = document.getElementById('amount_one');
const amount_two = document.getElementById('amount_two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change', calculateRate);
currency_two.addEventListener('change', calculateRate);

function calculateRate() {
    const one = currency_one.value;
    const two = currency_two.value;
    amount_one.addEventListener('input', calculateRate);
    amount_two.addEventListener('input', calculateRate);
    let url = `https://api.exchangerate-api.com/v4/latest/${one}`;

    fetch(url)
        .then(res => res.json()).then(data => {
            const rate = data.rates[two];
            rateText.innerText = `1 ${one} = ${rate}${two}`;
            amount_two.value=(amount_one.value*rate).toFixed(2);
        })
}
swap.addEventListener('click',()=>{
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculateRate();
 });

calculateRate();
