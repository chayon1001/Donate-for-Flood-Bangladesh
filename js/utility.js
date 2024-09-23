function inputFieldValueById(id){
    const amount = document.getElementById(id).value;
    
    const convertAmount = parseFloat(amount);
    return convertAmount;

}

function runningBalance(id){
    const balance = document.getElementById(id).innerText;
    const updateBalance = parseFloat(balance);
    return updateBalance;
}