var amount=0
function balance(){
    alert(`Your balance is ${amount}`)
}
function Deposite(cash){
    amount+=cash
    alert(`Amount Credited`)
}
function Withdraw(cash){
    if((amount-cash)<0){
        alert('Not enough money in the account')
    }
    else{
        amount-=cash
    alert(`Amount Debited`)
    }
}
while(true){
    choice=parseInt(prompt('Enter your choice \n 1.Balance \n 2.Deposite \n 3.Withdraw \n 4.Exit'))

    if(choice==1){
        balance()
    }
    else if(choice==2){
        let cash=parseInt(prompt('Enter the amount that you want to deposite'))
        Deposite(cash)
    }
    else if(choice==3){
        let cash=parseInt(prompt('Enter the amount that you want to withdraw'))
        Withdraw(cash)
    }
    else if(choice==4){
        alert(`Account exited successfully`)
        break
    }
    else{
        alert('Invalid choice')
    }
}

