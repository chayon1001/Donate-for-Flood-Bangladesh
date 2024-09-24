document.getElementById('first-card-donate').addEventListener('click', function () {
    const donateAmount = inputFieldValueById('donate-amount-first');

    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    if ((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0) {
        return alert('Invalid donate amount')
    }
    else if (donateAmount > availableBalanceNum) {
        return alert('Available balance is very low');
    }

    else {

        alert('Completed the donation');

    }

    const showModal = document.getElementById('my_modal_1').showModal();


    const updateAmount = runningBalance('update-amount');

    const updateDonateAmount = parseFloat(donateAmount);

    const latestUpdateAmount = updateAmount + updateDonateAmount;

    document.getElementById('update-amount').innerText = latestUpdateAmount;

    const updateAvailableBalance = availableBalanceNum - updateDonateAmount;

    document.getElementById('available-balance').innerText = updateAvailableBalance;

    const header = document.getElementById('header-data').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4', 'rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${updateDonateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)


})



// second card donate 


document.getElementById('second-card-donate').addEventListener('click', function () {


    const donateAmount = inputFieldValueById('second-input');

    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);


    if ((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0) {
        return alert('Invalid donate amount')
    }

    else if (donateAmount > availableBalanceNum) {
        return alert('Available balance is very low');
    }
    else {
        alert('Completed the donation');
    }


    const showModal = document.getElementById('my_modal_1').showModal();

    const updateAmount = runningBalance('second-update');

    const updateDonateAmount = parseFloat(donateAmount);

    const latestAmount = updateAmount + updateDonateAmount;

    document.getElementById('second-update').innerText = latestAmount;


    const updateAvailableBalance = availableBalanceNum - updateDonateAmount;


    document.getElementById('available-balance').innerText = updateAvailableBalance;


    const header = document.getElementById('header-data-second').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4', 'rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${updateDonateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)


})


//third amount donate


document.getElementById('third-amount-donate').addEventListener('click', function () {
    const donateAmount = inputFieldValueById('third-input');

    const availableBalance = document.getElementById('available-balance').innerText;

    const availableBalanceNum = parseFloat(availableBalance);

    if ((isNaN(donateAmount)) || donateAmount === '' || donateAmount <= 0) {
        return alert('Invalid donate amount')

    }
    else if (donateAmount > availableBalanceNum) {
        return alert('Available balance is very low');
    }
    else {
        alert('Completed the donation');
    }

    const showModal = document.getElementById('my_modal_1').showModal();

    const updateAmount = runningBalance('third-update');
    const updateDonateAmount = parseFloat(donateAmount);

    const latestAmount = updateAmount + updateDonateAmount;

    document.getElementById('third-update').innerText = latestAmount;

    const updateAvailableBalance = availableBalanceNum - updateDonateAmount;

    document.getElementById('available-balance').innerText = updateAvailableBalance;


    const header = document.getElementById('header-data-third').innerText;

    const date = new Date();

    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'mt-5', 'px-5', 'py-4', 'rounded-xl')
    div.innerHTML = `
        <h3 class="text-xl font-semibold"> ${updateDonateAmount} Taka is ${header}</h3>

        <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
        
    `
    document.getElementById('show-history').appendChild(div)



})