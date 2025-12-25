function formatMessage(message, maxLength) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  } else {
    return message.slice();
  }
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
