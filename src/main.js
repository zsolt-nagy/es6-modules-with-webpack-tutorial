import Account from './Account';

let myAccount = new Account();
let format = transaction =>
    `<li>${transaction.amount} (${transaction.date})</li>`;
let list = document.querySelector( '.js-top-transactions' );

myAccount.deposit( 200000, '2017-01-01' );
myAccount.deposit( 500000, '2017-02-01' );
myAccount.deposit( 100000, '2017-03-01' );
myAccount.withdraw( 300000, '2017-04-01' );

// Top 3: 500000 -300000 200000
list.innerHTML = myAccount.getTopTransactions().map( format ).join('');