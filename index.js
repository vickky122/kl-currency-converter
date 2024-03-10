import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_1vfg4nsg15emIowoVeJ34KVtRKw0KelVu3OxvqHp');

convertCurrency("INR", "USD", 3);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  const multiplier = res.data[toCurrency];
  return multiplier * units;
  //console.log(multiplier);
}

