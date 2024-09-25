

// card-1
document.getElementById('donate-1').addEventListener('click', function () {
    const aidMoney = getInputValue('input-money-noakhali');

    const aidMoneyAmount = parseFloat(aidMoney);
    const fundAmount = getTextValue('fund-noakhali');
    const fundBalance = parseFloat(fundAmount);
    const mainBalance = getTextValue('main-balance');
    const mainAmount = parseFloat(mainBalance);
    if (!isNaN(aidMoney) && aidMoneyAmount >= 0) {
        if (aidMoney > mainAmount) {
            alert('Don not have enough money in balance');
            return;
        }
        const totalFund = aidMoneyAmount + fundBalance;
        document.getElementById('fund-noakhali').innerText = totalFund;
        const remainingBalance = mainAmount - aidMoney;
        document.getElementById('main-balance').innerText = remainingBalance;
        const noakhali = 'Taka is Donated for faid-2024 at Noakhali, Bangladesh';
        appendToHistory('history',aidMoney, noakhali);
        my_modal_1.showModal();
        document.getElementById('input-money-noakhali').value = '';
    } else {
        alert('Invalid Input');
        document.getElementById('input-money-noakhali').value = '';
    }
});

// card-2
document.getElementById('donate-2').addEventListener('click', function () {
    const aidMoney = getInputValue('input-money-feni');

    const aidMoneyAmount = parseFloat(aidMoney);
    const fundAmount = getTextValue('fund-feni');
    const fundBalance = parseFloat(fundAmount);
    const mainBalance = getTextValue('main-balance');
    const mainAmount = parseFloat(mainBalance);
    if (!isNaN(aidMoney) && aidMoneyAmount >= 0) {
        if (aidMoney > mainAmount) {
            alert('Don not have enough money in balance');
            return;
        }
        const totalFund = aidMoneyAmount + fundBalance;
        document.getElementById('fund-feni').innerText = totalFund;
        const remainingBalance = mainAmount - aidMoney;
        document.getElementById('main-balance').innerText = remainingBalance;
        const feni = 'Taka is Donated for Flood Relief in Feni,Bangladesh';
        appendToHistory('history', aidMoney, feni);

        my_modal_1.showModal();
        document.getElementById('input-money-feni').value = '';
    } else {
        alert('Invalid Input');
        document.getElementById('input-money-feni').value = '';
    }
});

// card-3
document.getElementById('donate-3').addEventListener('click', function () {
    const aidMoney = getInputValue('aid');
    const aidMoneyAmount = parseFloat(aidMoney);
    const fundAmount = getTextValue('fund-aid');
    const fundBalance = parseFloat(fundAmount);
    const mainBalance = getTextValue('main-balance');
    const mainAmount = parseFloat(mainBalance);
    if (!isNaN(aidMoney) && aidMoneyAmount >= 0) {
        if (aidMoney > mainAmount) {
            alert('Don not have enough money in balance');
            return;
        }
        const totalFund = aidMoneyAmount + fundBalance;
        document.getElementById('fund-aid').innerText = totalFund;
        const remainingBalance = mainAmount - aidMoney;
        document.getElementById('main-balance').innerText = remainingBalance;
        const aid ='Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';
        appendToHistory('history', aidMoney, aid);
        my_modal_1.showModal();
        document.getElementById('aid').value = '';
    } else {
        alert('Invalid Input');
        document.getElementById('aid').value = '';
    }
});


// toggle showSection
document.getElementById('donation-btn').addEventListener('click',function(){
showDiv('donation-card');

});
document.getElementById('history-btn').addEventListener('click',function(){
showDiv('history', 'history-btn');
});

