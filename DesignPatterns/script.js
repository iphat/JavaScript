// // design patterns
// //1- Module Pattern(IIFE) - its a design pattern where code is written in self executing function to keep variables and functions private

//IIFE - imediately invoked function expression
let Bank = (function(){
    let bankbalance = 12000;
    function checkBalance(){
        console.log(bankbalance);
    }
    function setBalance(val){
        bankbalance = val;
        console.log(bankbalance);
    }
    function withdraw(val){
        if(val <= bankbalance){
            bankbalance -= val;
            console.log(bankbalance);
        }
    }
// // module pattern
//     return {
//         checkBalance,
//         setBalance,
//         withdraw
//     }
//revelling module pattern
    return {
        check : checkBalance,
        set : setBalance,
        withdraw : withdraw
    }
})();
Bank.check();

//Factory function
function createProduct(name, price){
    let stock = 10;
    return {
        name,
        price,
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`booked your ${qty} pieces`);
            }else{
                console.error(`we only have ${stock} pieces`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled the stock - ${stock} pieces now.`);
        }
    }
}
let iphone = createProduct("iphone", 70000);
iphone.buy(prompt("item"));
let kitkat = createProduct("kitkat", 10);
kitkat.buy(8);
