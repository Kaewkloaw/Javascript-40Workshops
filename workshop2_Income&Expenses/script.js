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

let transactions=dataTransaction;
// console.log(transaction);

function init(){
    listhistory.innerHTML = '';
    transactions.forEach(addDataToList);
    calculateBalance();
}
function addDataToList(transactions){
    const symbol = transactions.amount < 0 ? '-' : '+';
    const status = transactions.amount < 0 ? 'minus':'plus'
    console.log(status);
    const item = document.createElement('li');
    result = formatNumberWithCommas(Math.abs(transactions.amount));
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>`;
    listhistory.appendChild(item)
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

function calculateBalance(){
    const amounts = transactions.map(transaction=>transaction.amount);
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2); //ทศนิยมสองตำแหน่ง    console.log(total);
    // console.log(total);
    const income = amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2);
    // console.log(income);
    const expenses = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2);
    // console.log(expenses);

    // display on screen
    balance.innerText = `฿`+ formatNumberWithCommas(total);
    add_income.innerText = `฿`+ formatNumberWithCommas(income);
    add_expenses.innerText = `฿`+ formatNumberWithCommas(expenses);
}

// function generate auto ID
function autoID(){
    return Math.floor(Math.random()*1000000000);
}

// add list
form.addEventListener('submit',addTransaction);
function addTransaction(event){
    event.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please enter text and amount');
    }else{
        // console.log(typeof(text.value));
        // console.log(typeof(+amount.value)); //change amount from string to number
        // console.log(autoID());
        const data={
            id:autoID(),
            text:text.value,
            amount:+amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calculateBalance();
        text.value='';
        amount.value='';
    }
}
// remove list
function removeData(id){
    // console.log("remove data",id);
    transactions=transactions.filter(transactions=>transactions.id !==id)
    init();
}

init();