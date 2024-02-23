// 1. Write a function mapBy to convert an array of objects into an object mapped by the specified key:

let users = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09"
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05"
}];

const mapBy = (users,key) => {
  let object = {};
  for(let i=0;i<users.length;i++){
     object[users[i][key]] = users[i]
  }
  return object
}
console.log(mapBy(users, "first_name") )
 
//This should return
//{
// “Nicki”:{id:1, first_name:”Nicki”, ...},
// “Raychel”:{id:2, first_name:”Raychell”, ...},
//}

// 2. Write a functiongroupBy to convert an array of objects into groups based on the specified key:

 let user = [{
"id": 1,
"first_name": "Nicki",
"email": "ncrozier0@squarespace.com",
"date_of_birth": "2009/05/09",
"gender":"Male",
}, {
"id": 2,
"first_name": "Raychel",
"email": "rmcgrady1@cpanel.net",
"date_of_birth": "1996/11/05",
"gender":"Female"
}, {
"id": 3,
"first_name": "Demetris",
"email": "dkilshall2@elpais.com",
"date_of_birth": "2018/12/31",
"gender":"Male",
}, {
"id": 4,
"first_name": "Amata",
"email": "abraiden3@canalblog.com",
"date_of_birth": "2012/05/23",
  "gender":"Female"
}];

const groupBy = (user, key)=>{
  let object = {}
  let male = [];
  let female = [];

  for(let i=0;i<user.length;i++){
   
    if(user[i][key] == "Male")
    {
      male.push(user[i])
    }else{
      female.push(user[i])
    }
  }
  object["Male"] = male;
  object["Female"] = female;
  return object
}
console.log(groupBy(user, "gender"))

//This should return 
//{
//“Male”:[
// {id:1, first_name:”Nicki”, ...}, 
// {id:3, first_name:”Demetris”, ...}
//]
//“Female”:[
// {id: 2, first_name:”Raychel”, ...},
// {id: 4, first_name:”Amata”, ...}
//]
//}

// 3.  Write a function that sorts an array of objects by the key that is passed in the second argument, and in the order passed as the 3rd argiment. 
function sort(array, key, order) {
  return array.sort((a, b) => {
      if (order === 'asc') {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
      } else if (order === 'desc') {
          if (a[key] > b[key]) return -1;
          if (a[key] < b[key]) return 1;
          return 0;
      }
  });
}

let user1 = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender": "Male",
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
  "gender": "Female",
}, {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
  "gender": "Male",
}, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
  "gender": "Female",
}];

console.log(sort(user1.slice(), "id", "desc"));        // Sort by id in descending order
console.log(sort(user1.slice(), "first_name", "asc")); // Sort by first_name in ascending order

// 4. Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

let userNames = [{
"id": 1,
"first_name": "Nicki",
}, {
"id": 2,
"first_name": "Raychel",
}, {
"id": 3,
"first_name": "Demetris",
}, {
"id": 4,
"first_name": "Amata",
}]
let userEmails = [{
"id": 2,
"email": "rmcgrady1@cpanel.net",
}, {
"id": 1,
"email": "ncrozier0@squarespace.com",
}, {
"id": 4,
"email": "abraiden3@canalblog.com",
}, {
"id": 3,
"email": "dkilshall2@elpais.com",
}]

function mergeById(arr1, arr2) {
  const map = {};

  for (const obj of arr1) {
      map[obj.id] = { ...obj };
  }
  
  for (const obj of arr2) {
      if (map[obj.id]) {
          map[obj.id] = { ...map[obj.id], ...obj };
      }
  }
  return Object.values(map);
}

console.log(mergeById(userNames, userEmails));

// 5. Write a function to filter an array of strings to hold only unique values

function filterUniqueStrings(array) {
  const uniqueSet = new Set();

  array.forEach(it => uniqueSet.add(it));
 
  return Array.from(uniqueSet);
}

const array = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueArray = filterUniqueStrings(array);
console.log(uniqueArray); // Output: ['apple', 'banana', 'orange']
