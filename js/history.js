document.getElementById('history-btn').addEventListener('click', function(){
   
    showButton('history-data');

   
    document.getElementById('donation-btn').classList.remove('bg-primary','text-slate-900', 'font-semibold');

    document.getElementById('donation-btn').classList.add('border-2', 'bg-gray-100');

    document.getElementById('history-btn').classList.add('bg-primary','text-slate-900', 'font-semibold' );

})