/* Write a JavaScript function flattenObject(obj) that takes a nested object and returns a new, flattened object. The nested keys should be concatenated with a dot ('.') as a separator. The function should handle nested objects and arrays (though for this problem, we'll assume arrays don't contain objects and can be treated as final values).

// Example:
// Input:

const user = {
  name: "John Doe",
  address: {
  street: "123 Main St",
  city: "Anytown",
  geo: {
    lat: 40.7128,
    lng: -74.0060
    }
  },
  roles: ["Admin", "Editor"]
};

/* Output:

{
"name": "John Doe",
"address.street": "123 Main St",
"address.city": "Anytown",
"address.geo.lat": 40.7128,
"address.geo.lng": -74.0060,
"roles": ["Admin", "Editor"] 
}

*/

const user = {
  name: "John Doe",
  address: {
  street: "123 Main St",
  city: "Anytown",
  geo: {
    lat: 40.7128,
    lng: -74.0060
    }
  },
  roles: ["Admin", "Editor"]
};

function flattenObject(obj, prefix ='', result = {}) { 
  for(const key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key)) {  // Ensure it's an own property
      const newKey = prefix ? `${prefix}.${key}`: key;

      if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          // If it's a nested object, recurse
          flattenObject(obj[key], newKey, result);
      } else {
        // Otherwise, add to the flattened result
        result[newKey] = obj[key];
      }   
    }
  }
  return result;  
}

console.log(flattenObject(user));

/* 
{
  name: 'John Doe',
  'address.street': '123 Main St',
  'address.city': 'Anytown',      
  'address.geo.lat': 40.7128,     
  'address.geo.lng': -74.006,     
  roles: [ 'Admin', 'Editor']    
}
*/