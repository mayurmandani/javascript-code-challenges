/* convet the input array of string ['Berlin', 'amsterdam', 'Paris'] to expected array string ['amsterdam', 'Berlin', 'Paris'] */

const cities = ['Berlin', 'amsterdam', 'Paris'];

const sortedCities = cities.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base'}));

console.log(sortedCities); // [ 'amsterdam', 'Berlin', 'Paris' ]