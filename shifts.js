function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  let pay;
  if (hours > 8) {
    const regularPay = 8 * rate;
    const overtimeHours = hours - 8;
    const overtimePay = overtimeHours * rate * 1.5;
    pay = regularPay + overtimePay;
  } else {
    pay = hours * rate;
  }
  return Math.round(pay);
}

module.exports = { isValidShift, calculatePay };
