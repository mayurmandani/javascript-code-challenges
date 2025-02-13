/* Write a code to eliminate duplicate objects in an array where each object has an 'id' property 
which can be used to identify the object and the duplicate object with lower rank to be removed */

const arr = [
  {
    id: 1,
    name: "emp1",
    rank: 4,
  },
  {
    id: 2,
    name: "emp2",
    rank: 1,
  },
  {
    id: 2,
    name: "emp2",
    rank: 2, // this is a duplicate object (id = 2) and has lower rank
  },
  {
    id: 3,
    name: "emp3",
    rank: 3,
  },
];

const map = new Map();

arr.forEach((obj) => {
  if (map.has(obj.id)) {
    if (obj.rank < map.get(obj.id).rank) {
      map.set(obj.id, obj);
    }
  } else {
    map.set(obj.id, obj);
  }
});

let distinctArr = [...map.values()];

console.log(distinctArr);