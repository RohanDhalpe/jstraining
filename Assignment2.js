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