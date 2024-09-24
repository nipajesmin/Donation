
// document.getElementById('btn-add-money')
// .addEventListener('click',function(event){
//     event.preventDefault();
//     const addMoney= document.getElementById('input-add-money').value;
//     const addMoneyNumber= parseFloat(addMoney);
//     console.log(addMoneyNumber)

//     const balanceFirst= document.getElementById('noakhali-balance').innerText;
//     const balanceFirstNumber= parseFloat(balanceFirst);
//     console.log(balanceFirstNumber)

//     if(addMoneyNumber >= 1)  {
//         const noakhaliNewBalance = addMoneyNumber + balanceFirstNumber;
//         console.log(noakhaliNewBalance)
    
//         document.getElementById('noakhali-balance').innerText = noakhaliNewBalance ;
//         console.log(noakhaliNewBalance)
//     }
//     else{
//         alert("Please enter a valid amount.");
//     }
// })



document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-money');
        const balanceFirst = getTextFieldValueById('noakhali-balance');
        const oldbalance = getTextFieldValueById('main-balance');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        //primary level, wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            if(addMoney > oldbalance){
                alert('You do not have enough money to donate');
                return;
            }
            const donationModal = document.getElementById('donationModal');
            donationModal.classList.remove('hidden');

            // Close modal when the "Close Information" button is clicked
            const closeModal = document.getElementById('closeModal');
            closeModal.addEventListener('click', () => {
                donationModal.classList.add('hidden');
            });
            
            const noakhaliNewBalance = balanceFirst + addMoney;
            document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

            //const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;

            // add to history
             //const p = document.createElement('p');
             //p.innerText = `Added: ${addMoney} Tk. New Balance: ${mainNewBalance}`;
            // console.log(p);            
            // should be a common function
             //document.getElementById('history-container').appendChild(p);

             //adding date and time
            // let donationTime = ""; 
             const now = new Date();
             const donationTime = now.toString();  
             const donationDiv = document.createElement('div');

             donationDiv.classList.add('border', 'border-gray-300', 'rounded-lg', 'p-4');
         
             //const pp = document.createElement('pp');
             //pp.innerText = `Donation made at: ${donationTime}`;
             donationDiv.innerText = `${addMoney} Taka is Donated for Flood at Noakhali, Bangladesh\n
            Donation made at: ${donationTime}`;

             //console.log(pp);
             //document.getElementById('history-container').appendChild(pp);
             document.getElementById('history-container').appendChild(donationDiv);
             document.getElementById('history-container').appendChild(donationDiv);

             

             
        }
        else{
            alert('Please enter a valid amount.')
        }

    })


    document.getElementById('btn-add-money-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-feni-money');
        const balanceSecond = getTextFieldValueById('feni-balance');
        const oldbalance = getTextFieldValueById('main-balance');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        // primary level,wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            if(addMoney > oldbalance){
                alert('You do not have enough money to donate');
                return;
            }
            const donationModal = document.getElementById('donationModal');
            donationModal.classList.remove('hidden');

            // Close modal when the "Close Information" button is clicked
            const closeModal = document.getElementById('closeModal');
            closeModal.addEventListener('click', () => {
                donationModal.classList.add('hidden');
            });
            
            const feniNewBalance = balanceSecond + addMoney;
            document.getElementById('feni-balance').innerText = feniNewBalance;

            //const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;

            const now = new Date();
            const donationTime = now.toString();  
            const donationDiv = document.createElement('div');

            donationDiv.classList.add('border', 'border-gray-300', 'rounded-lg', 'p-4');
         
            donationDiv.innerText = `${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh\n
            Donation made at: ${donationTime}`;

             //console.log(pp);
             //document.getElementById('history-container').appendChild(pp);
             document.getElementById('history-container').appendChild(donationDiv);
             document.getElementById('history-container').appendChild(donationDiv);
        }
        else{
            alert('Please enter a valid amount.')
        }

    })

    document.getElementById('btn-add-money-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-quata-money');
        const balanceThird = getTextFieldValueById('quata-balance');
        const oldbalance = getTextFieldValueById('main-balance');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        const donationModal = document.getElementById('donationModal');
            donationModal.classList.remove('hidden');

            // Close modal when the "Close Information" button is clicked
            const closeModal = document.getElementById('closeModal');
            closeModal.addEventListener('click', () => {
                donationModal.classList.add('hidden');
            });
        // primary level,wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            if(addMoney > oldbalance){
                alert('You do not have enough money to donate');
                return;
            }
            
            const quataNewBalance = balanceThird + addMoney;
            document.getElementById('quata-balance').innerText = quataNewBalance;

            //const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;
            
            const now = new Date();
             const donationTime = now.toString();  
             const donationDiv = document.createElement('div');

             donationDiv.classList.add('border', 'border-gray-300', 'rounded-lg', 'p-4');
         
             //const pp = document.createElement('pp');
             //pp.innerText = `Donation made at: ${donationTime}`;
             donationDiv.innerText = `${addMoney} Taka is Donated for Injured in the Quota Movement\n
             Donation made at: ${donationTime}`;

             //console.log(pp);
             //document.getElementById('history-container').appendChild(pp);
             document.getElementById('history-container').appendChild(donationDiv);
             document.getElementById('history-container').appendChild(donationDiv);
        }
        else{
            alert('Please enter a valid amount.')
        }

    })
    