document.getElementById('first-card-donate').addEventListener('click', function(){
    const donateAmount = inputFieldValueById('donate-amount-first');
    
    const updateAmount = runningBalance('update-amount');

    const latestUpdateAmount = updateAmount + donateAmount;
    document.getElementById('update-amount').innerText = latestUpdateAmount;

    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

   

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;
})





// second card donate 


document.getElementById('second-card-donate').addEventListener('click', function(){


    const donateAmount = inputFieldValueById('second-input');
   
    const updateAmount = runningBalance('second-update');

    const latestAmount = updateAmount + donateAmount;

    document.getElementById('second-update').innerText = latestAmount;


    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;


})


//third amount donate


document.getElementById('third-amount-donate').addEventListener('click', function(){
   const donateAmount = inputFieldValueById('third-input');

   const updateAmount = runningBalance('third-update')

   const latestAmount = updateAmount + donateAmount;

   document.getElementById('third-update').innerText = latestAmount;

   

   const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;



})