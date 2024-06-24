class car {
    constructor(namee,model){
        this.namee=namee;
        this.model=model;
    }
    startToThecar(){
 return `the car ${this.model} has started`
    }
}
    class elctric extends car {
        constructor(namee,model,battry_size){
            super(namee,model);
            
            this.battry_size=battry_size;
        }
    }

const name1 = new car("bmw","e46")
const name2 = new elctric("bmw","ix5","87kw")

console.log(name1.model)
console.log(name2.namee)

class Account{
    #balance;
    constructor(Balance)
    {
        this.#balance=Balance;
    }
    deposit(amount)
    {
        this.#balance+=amount;
    } 
    withdraw(amount)
    {
       if(this.#balance<amount)console.log("to much");
       else  this.#balance-=amount;
    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(Balan)
    {
        this.#balance=Balan;
    }
}
let accountsss= new Account(500);