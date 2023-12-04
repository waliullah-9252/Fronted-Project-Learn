// var let and const er different start --->>>

// function name() {
//   if (true) {
//     const x = "hello world";
//     console.log(x);
//   }
// }
// console.log(x);
// console.log(name());

// const name = "waliullah";

// name = "wali";
// console.log(name);

// let name = "waliullah";
// name = "wali";
// console.log(name);

// var let and const er different end --->>>

// templetes string by es6  start --->>>

// const name = `this is bangladesh , I love this bangladesh
// akajfa`;
// console.log(name);

// const test = "world";
// const test2 = " bangladesh";
// const name = "hello " + test + test2;
// console.log(name);

// const test = "world";
// const name = `hello ${test}`;
// console.log(name);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(...array);//spared opration

// const newArray = ["rahim", "karim", ...array];
// console.log(...newArray);

// console.log(Math.max(...array));
// console.log(Math.min(...array));

// templetes string by es6  end  --->>>

// arrow function start ----------->>>>>>
// function test (){
//     return "hello world"
// }
// console.log(test()); // regular function

// const test2 = () => 2*2; // 1 line kaj jodi return kori
// console.log(test2());

// const test3 = () =>{
//     console.log("yess booosss");
//     return "hello world";
// }
// console.log(test3());

// arrow function end ----------->>>>>>

// array and object distructing start --->>
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const [a,b,c,d] = numbers;
// console.log(a,b,c,d);

// const obj = {
//     firstName: "wali",
//     lastName: "ullah",
//     age: 22,
//     github: "yes",
//     status: "single",
// }
//  const age = obj.age;
// const {age,status,firstName}= obj;
//  console.log(age);
//  console.log(status);
//  console.log(firstName);

// const test = [
//   {
//     name: "waliullah",
//     age: 22,
//     friends: ["rahim", "karim",{
//         name: "rahat",
//         age:23,
//     }],
//     status: "active",
//   },
//   {},
//   {},
// ];
// console.log(test[0].friends[2].name);
// array and object distructing end --->>

// map , filter ,find and for each start --->>
//map function long and short form
// const nums = [2,2,5,8];
// const temp = [];
// for (let i = 0; i < nums.length;i++){
//     const element = nums[i];
//     const square = element * element;
//     temp.push(square);
// }
// console.log(temp);
// const square = nums.map(x => x*x);
// console.log(square);

//filter function
// const products = [
//     {id: 1, brandName: "Apple", price: 800, color: "golden"},
//     {id: 2, brandName: "Xiaomi", price: 500, color: "black"},
//     {id: 3, brandName: "Realme", price: 400, color: "blue"},
//     {id: 4, brandName: "Samsung", price: 300, color: "black"},
//     {id: 5, brandName: "Oppo", price: 340, color: "red"},
//     {id: 6, brandName: "Vivo", price: 420, color: "aqua"},
//     {id: 7, brandName: "Lenevo", price: 250, color: "black"},
//     {id: 8, brandName: "Moto", price: 440, color: "pink"},
// ]
// const result = products.filter(pd => pd.color == "black");
// console.log(result);

// find function use
// const result2 = products.find(pd => pd.id == 3);
// console.log(result2);

// for each function use
// const productContainer = document.getElementById("product-container");
// const result3 = products.forEach(pd => {
//     console.log(pd);
//     const h1 = document.createElement("h1");
//     h1.innerText = pd.brandName;
//     productContainer.appendChild(h1);
// })
// map , filter ,find and for each start --->>

// API calls function
// fetch("https://fakestoreapi.com/products/1")
// .then(res => res.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })

// javascript assynchronous function
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// name(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// function name(x){
//     setTimeout(()=> console.log(x));
// }

// function name(x) {
//   fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// const getData = new Promise((resolve, reject) => {
    // return resolve(20);
//     return reject("no data available");
// })
// getData
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// const loadData = async () =>{
//     try{
//         const response = await fetch("https://fakestoreapi.com/products/1");
//         const data = await response.json();
//         console.log(data);
//     } catch{
//         (err) => console.log(err);
//     }    
// }

// loadData();


