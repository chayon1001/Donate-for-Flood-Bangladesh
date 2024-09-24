document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-data').classList.add('hidden');

    document.getElementById('donation-data').classList.remove('hidden');


    document.getElementById('donation-btn').classList.add('bg-primary','text-slate-900', 'font-semibold');

    document.getElementById('history-btn').classList.remove('bg-primary','text-slate-900', 'font-semibold');


    
})