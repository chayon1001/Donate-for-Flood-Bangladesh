document.getElementById('first-card-donate').addEventListener('click', function(){
    const donateAmount = inputFieldValueById('donate-amount-first');

    if((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0){
        return alert('Invalid donate amount')
    }
    else{
         alert('Completed the donation');
    }
    
    const updateAmount = runningBalance('update-amount');

    const latestUpdateAmount = updateAmount + donateAmount;
    document.getElementById('update-amount').innerText = latestUpdateAmount;

    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    if(donateAmount > availableBalanceNum){
        return alert('Available balance is very low');
    }

   

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;



    const header = document.getElementById('header-data').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4','rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)
})





// second card donate 


document.getElementById('second-card-donate').addEventListener('click', function(){


    const donateAmount = inputFieldValueById('second-input');


    if((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0){
        return alert('Invalid donate amount')
    }
    else{
        alert('Completed the donation');
   }
   
    const updateAmount = runningBalance('second-update');

    const latestAmount = updateAmount + donateAmount;

    document.getElementById('second-update').innerText = latestAmount;


    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    if(donateAmount > availableBalanceNum){
        return alert('Available balance is very low');
    }

    

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;



    const header = document.getElementById('header-data-second').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4','rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)


})


//third amount donate


document.getElementById('third-amount-donate').addEventListener('click', function(){
   const donateAmount = inputFieldValueById('third-input');

   if((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0){
    return alert('Invalid donate amount')

}
else{
    alert('Completed the donation');
}

   const updateAmount = runningBalance('third-update')

   const latestAmount = updateAmount + donateAmount;

   document.getElementById('third-update').innerText = latestAmount;



   const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    if(donateAmount > availableBalanceNum){
        return alert('Available balance is very low');
    }

    

    const updateAvailableBalance = availableBalanceNum - donateAmount;

    

    document.getElementById('available-balance').innerText = updateAvailableBalance;



    const header = document.getElementById('header-data-third').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4','rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)



})