class Bank {
    constructor (balance){
        this.balance = balance;
    }

    withdraw(num){
        if(this.balance >= num){
            this.balance = this.balance - num;
        }else if(this.balance != 0){
            alert(`You can not withdraw more than ${this.balance}$`);
        }else {
            alert("You must have money on balance to withdraw it.");
        } 
    }

    deposit(num1){
        this.balance = this.balance + num1;
    }
}


const balance = new Bank(0);



function deposited(){
    const dep = document.querySelector(".deposit").value;
    balance.deposit(Number(dep));
    document.querySelector(".balance").innerText = `Your account balance : ${balance.balance + "$"}`;
}

function withdraw(){
    const withd = document.querySelector(".withdraw").value;
    balance.withdraw(Number(withd));
    document.querySelector(".balance").innerText = `Your account balance : ${balance.balance + "$"}`;
}
