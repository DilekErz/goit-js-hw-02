function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalDroid = quantity * pricePerDroid;
  if (totalDroid > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalDroid} credits!`;
  }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(10, 5000, 8000));
