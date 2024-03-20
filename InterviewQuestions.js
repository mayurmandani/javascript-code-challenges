/* let val = [{name:'x', value:'12.3'},{name:'y', value:'12.4'},{name:'z', value:'12.5'}] and Expected output is ["y 12.4"] */

let val = [{name:'x', value:'12.3'},{name:'y', value:'12.4'},{name:'z', value:'12.5'}];

let result = val.filter((x) => x.value == 12.4).map(x => x.name + " " + x.value);

console.log(result, "result");