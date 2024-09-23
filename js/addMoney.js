
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

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        //primary level, wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            const balanceFirst = getTextFieldValueById('noakhali-balance');
            const noakhaliNewBalance = balanceFirst + addMoney;
            document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

            const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;

            // add to transaction history
            // const p = document.createElement('p');
            // p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            // console.log(p); 

            // should be a common function
            // document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert('Please enter a valid amount.')
        }

    })


    document.getElementById('btn-add-money-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-feni-money');

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        // primary level,wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            const balanceSecond = getTextFieldValueById('feni-balance');
            const feniNewBalance = balanceSecond + addMoney;
            document.getElementById('feni-balance').innerText = feniNewBalance;

            const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;

            // add to transaction history
            // const p = document.createElement('p');
            // p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            // console.log(p); 

            // should be a common function
            // document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert('Please enter a valid amount.')
        }

    })

    document.getElementById('btn-add-money-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-quata-money');

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        
        // primary level,wrong way to verify. do not try it at your serious website
        if(addMoney >= 1){
            const balanceThird = getTextFieldValueById('quata-balance');
            const quataNewBalance = balanceThird + addMoney;
            document.getElementById('quata-balance').innerText = quataNewBalance;

            const oldbalance = getTextFieldValueById('main-balance');
            const mainNewBalance = oldbalance - addMoney;
            document.getElementById('main-balance').innerText = mainNewBalance;
            // add to transaction history
            // const p = document.createElement('p');
            // p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            // console.log(p); 

            // should be a common function
            // document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert('Please enter a valid amount.')
        }

    })