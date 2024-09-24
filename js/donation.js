document.getElementById('donation-btn').addEventListener('click', function(){
   

    showButton('donation-data');


    document.getElementById('donation-btn').classList.add('bg-primary','text-slate-900', 'font-semibold');

    document.getElementById('history-btn').classList.remove('bg-primary','text-slate-900', 'font-semibold');


    
})