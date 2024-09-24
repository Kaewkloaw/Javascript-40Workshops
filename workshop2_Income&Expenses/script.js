const balance = document.getElementById('balance');
const add_income = document.getElementById('add-income');
const add_expenses = document.getElementById('add-expenses');
const listhistory = document.getElementById('list-history');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransaction=[
    {id:1,text:"new phone",amount:-15990},
    {id:2,text:"rent",amount:-799},
    {id:3,text:"gift",amount:+1000}
]

const transactions=dataTransaction;
// console.log(transaction);

function init(){
    transactions.forEach(addDataToList);
    calculateBalance();
}
function addDataToList(transactions){
    const symbol = transactions.amount < 0 ? '-' : '+';
    const status = transactions.amount < 0 ? 'minus':'plus'
    console.log(status);
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${Math.abs(transactions.amount)}</span><button class="delete>x</button>`;
    listhistory.appendChild(item)
}

function calculateBalance(){
    const amounts = transactions.map(transaction=>transaction.amount);
    console.log(amounts)

}

init();