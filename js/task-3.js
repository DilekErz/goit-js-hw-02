function checkForSpam(message) {
  let yasakli1 = "sale";
  let yasakli2 = "spam";
  //   let kucukyasakli1 = yasakli1.toLowerCase();
  //   let kucukyasakli2 = yasakli2.toLowerCase();
  let kucukMessage = message.toLowerCase();

  if (kucukMessage.includes(yasakli1)) {
    return true;
  } else if (kucukMessage.includes(yasakli2)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
