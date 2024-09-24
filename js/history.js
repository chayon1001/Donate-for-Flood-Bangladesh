document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-data').classList.add('hidden');
   
    document.getElementById('history-data').classList.remove('hidden')

   
    
    document.getElementById('donation-btn').classList.remove('bg-primary','text-slate-900', 'font-semibold');

    document.getElementById('donation-btn').classList.add('border-2', 'bg-gray-100');

    document.getElementById('history-btn').classList.add('bg-primary','text-slate-900', 'font-semibold' );

})