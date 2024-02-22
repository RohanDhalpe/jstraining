// 1. How will you create a new copy of the object below while updating the value of address.details[0] to "5"?
let originalObject = {
 name:"Harry Potter",
 age: 12,
 address: {
  details: ["4", "Privet Drive"],
  area:"Little Whinging",
  city: "Surrey",
  state: "England"
 } 
}

let newObject = {...originalObject};
console.log(newObject);

newObject.address.details[0] = "5";
console.log(originalObject);


// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
let obj = {
  a:"Apple",
  b:["Basketball","Baseball"],
  c: {
   call: "cellphone"
  },
  d: "Dog"
 }
 
 function filterObj(obj) {
   const filteredObj = {};
 
   for (const key in obj) {
     if (typeof obj[key] !== 'object') {
       filteredObj[key] = obj[key];
     }
   }
   return filteredObj;
 }
 let res = filterObj(obj);
 console.log(res)
 
