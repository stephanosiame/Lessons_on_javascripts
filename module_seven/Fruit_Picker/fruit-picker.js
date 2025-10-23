import { notify } from './notifier.js';
import { order } from './grocer.js';

function onSuccess() {
  notify({ message: 'SUCCESS' });
}

function onError() {
  notify({ message: 'ERROR' });
}

function orderFromGrocer(query, onSuccess, onError) {
  order(query, onSuccess, onError);
}

// Simplify order placement
function postOrder(variety, quantity) {
  const query = { variety, quantity };
  orderFromGrocer(query, onSuccess, onError);
}

// Test orders
console.log('--- Test Orders ---');
postOrder('apple', 20);    // SUCCESS
postOrder('banana', 100);  // ERROR
postOrder('pear', 50);     // SUCCESS
postOrder('peach', 75);    // ERROR

