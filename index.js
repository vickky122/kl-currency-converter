// import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// const freecurrencyapi = new Freecurrencyapi('fca_live_1vfg4nsg15emIowoVeJ34KVtRKw0KelVu3OxvqHp');

// convertCurrency("INR", "USD", 3);

// export async function convertCurrency(fromCurrency, toCurrency, units) {
//   const res = await freecurrencyapi.latest({
//     base_currency: fromCurrency,
//     currencies: toCurrency
//   });
//   const multiplier = res.data[toCurrency];
//   return multiplier * units;
//   //console.log(multiplier);
// }

import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// Create a new instance of Freecurrencyapi
const freecurrencyapi = new Freecurrencyapi('fca_live_1vfg4nsg15emIowoVeJ34KVtRKw0KelVu3OxvqHp');

// Define the convertCurrency function
async function convertCurrency(fromCurrency, toCurrency, units) {
  // Fetch the latest exchange rates
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  // Extract the multiplier for conversion
  const multiplier = res.data[toCurrency];
  // Calculate the converted value
  return multiplier * units;
}

// Now you can use the convertCurrency function
async function main() {
  const convertedValue = await convertCurrency("INR", "USD", 3);
  //console.log(convertedValue);
}

// Call the main function
main();

// Export the convertCurrency function if needed in other modules
export { convertCurrency };
