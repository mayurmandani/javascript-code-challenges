/* 
Write the method to convert input to expetced output.  
let input = [
    { type: 'mobile', name: 'iPhone 13' },
    { type: 'mobile', name: 'Samsung galaxy' },
    { type: 'fashion', name: 'Puma T-Shirt' },
    { type: 'electronics', name: 'Fan' },
    { type: 'electronics', name: 'TV' }
]
Output: {
    mobile: [
        { type: 'mobile', name: 'iPhone 13' },
        { type: 'mobile', name: 'Samsung galaxy' }
    ],
    fashion: [
        { type: 'fashion', name: 'Puma T-Shirt' }
    ],
    electronics: [
        { type: 'electronics', name: 'Fan' },
        { type: 'electronics', name: 'TV' }
    ]
} 
*/

let input = [
    { type: 'mobile', name: 'iPhone 13' },
    { type: 'mobile', name: 'Samsung galaxy' },
    { type: 'fashion', name: 'Puma T-Shirt' },
    { type: 'electronics', name: 'Fan' },
    { type: 'electronics', name: 'TV' }
]

const output = input.reduce((productGroup, product) => {
    const type = product.type;
    if(productGroup[type] == null) {
        productGroup[type] = [];
    }
    productGroup[type].push(product);
    return productGroup;
}, {});

console.log(output, "output");