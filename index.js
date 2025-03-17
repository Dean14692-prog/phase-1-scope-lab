// Write your solution in this file!
// Declare a global variable using var
var customerName = "bob";

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it a value
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope
const leastFavoriteCustomer = "some customer";

// Function that attempts to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another customer"; // This will cause an error
}

// Export functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};
