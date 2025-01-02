/* Create an array of make values. That array containing make values [ 'Maruti', 'Hyudai' ] */

const cars = [
  {
    make: "Maruti",
    model: "Alto",
    year: 2010
  },
  {
    make: "Hyudai",
    model: "i10",
    year: 2018
  }
];

const companyNames = cars.map((car) => car.make);
console.log(companyNames);