/* Flatten or Restructure Nested Objects for Easier Access 

const nestedObj = {
  user: {
    id: 1,
    info: {
      name: "Mayur",
      contact: {
        email: "mmandani9@gmail.com"
      }
    }
  }
};

expected output are below:

 outputObj = {
  user_id: 1,
  user_name: "Mayur",
  user_email: "mmandani9@gmail.com"
}

*/

const nestedObj = {
  user: {
    id: 1,
    info: {
      name: "Mayur",
      contact: {
        email: "mmandani9@gmail.com"
      }
    }
  }
};

function flattenObject(obj, parentKey = "", result = {}) {
  for(const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}_${key}` : key;
    if(typeof value === "object" && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

console.log(flattenObject(nestedObj));

/* 

{
  user_id: 1,
  user_info_name: 'Mayur',
  user_info_contact_email: 'mmandani9@gmail.com'
}

*/