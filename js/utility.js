function inputFieldValueById(id){
    const amount = document.getElementById(id).value;
    return amount;

}

function runningBalance(id){
    const balance = document.getElementById(id).innerText;
    const updateBalance = parseFloat(balance);
    return updateBalance;
}

function showButton(id){
    document.getElementById('donation-data').classList.add('hidden');
    document.getElementById('history-data').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}