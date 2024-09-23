

document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney= document.getElementById('input-add-money').value;
    const addMoneyNumber= parseFloat(addMoney);
    console.log(addMoneyNumber)

    const balanceFirst= document.getElementById('noakhali-balance').innerText;
    const balanceFirstNumber= parseFloat(balanceFirst);
    console.log(balanceFirstNumber)


    if(addMoneyNumber >= 1)
    {

        const noakhaliNewBalance = addMoneyNumber + balanceFirstNumber;
        console.log(noakhaliNewBalance)
    
        document.getElementById('noakhali-balance').innerText = noakhaliNewBalance ;
        console.log(noakhaliNewBalance)
    }
    else{
        alert("Please enter a valid amount.");
    }

})
