class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({firstName, lastName, personalId}){
        let hasClient = this.allCustomers.find(client => client.personalId === personalId);
        let customer = {firstName, lastName, personalId, totalMoney: 0, transactions: []};
        if(hasClient){
            throw new Error(`${firstName} ${lastName} is already our customer!`); 
        }
        this.allCustomers.push(customer);
        return {firstName, lastName, personalId};
    
    }

    depositMoney(personalId, amount){
        let hasClient = this.allCustomers.find(client => client.personalId === personalId);
        if(!hasClient){
            throw new Error(`We have no customer with this ID!`); 
        }

        hasClient.totalMoney += amount;
        hasClient.transactions.push(`${hasClient.firstName} ${hasClient.lastName} made deposit of ${amount}$!`);
        
        return `${hasClient.totalMoney}$`;
    }

    withdrawMoney(personalId, amount){
        let hasClient = this.allCustomers.find(client => client.personalId === personalId);
        if(!hasClient){
            throw new Error(`We have no customer with this ID!`); 
        }

        if(hasClient && hasClient.totalMoney < amount){
            throw new Error(`${hasClient.firstName} ${hasClient.lastName} does not have enough money to withdraw that amount!`);
        }
        hasClient.totalMoney -= amount;
        hasClient.transactions.push(`${hasClient.firstName} ${hasClient.lastName} withdrew ${amount}$!`);
        return `${hasClient.totalMoney}$`;
    }

    customerInfo (personalId){
        let hasClient = this.allCustomers.find(client => client.personalId === personalId);
        if(!hasClient){
            throw new Error(`We have no customer with this ID!`); 
        }

        let result = `Bank name: ${this._bankName}\n`;
        result += `Customer name: ${hasClient.firstName} ${hasClient.lastName}\n`;
        result += `Customer ID: ${hasClient.personalId}\n`;
        result += `Total Money: ${hasClient.totalMoney}$\n`;
        
        if(hasClient.transactions.length > 0){
            result += 'Transactions:';
            for(let i = hasClient.transactions.length; i > 0; i--){
                result += `\n${i}. ` + `${hasClient.transactions[i-1]}`;
            }
        }

        return result;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

