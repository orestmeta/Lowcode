'use strict';
const MAX_PURCHASE = 2000;
const calculateSubtotal = (goods) => goods.reduce((amount, item) => {
  if (item.price < 0) throw 'Negative price';
  return amount + item.price;
}, 0);
const calculateTotal = (order) => {
  const expenses = new Map();
  let total = 0;
  Object.entries(order).forEach(([groupName, goods]) => {
    const amount = calculateSubtotal(goods);
    total += amount;
    expenses.set(groupName, amount);
  });
  return { total, expenses };
};
const validateExpenses = (items) => {
  items.forEach((total, groupName) => {
    if (total > MAX_PURCHASE) throw `${groupName} total is above the limit`;
  });
};
module.exports = { calculateSubtotal, calculateTotal, validateExpenses };
