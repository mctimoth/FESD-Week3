//index.js
var isHotOutside = false;
var isWeekday = false;
var hasMoneyInPocket = true;
var costOfMilk = 3.00;
var moneyInWallet = 20.00;
var thirstLevel = 5;
var shouldBuyIceCream = !isHotOutside && hasMoneyInPocket;
var willGoSwimming = !isHotOutside && !isWeekday;
var isAGoodDay = !isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = (!isHotOutside && thirstLevel >= 3) && moneyInWallet >= 2 * costOfMilk;

console.log(shouldBuyIceCream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);