// console.log("Hello");
// prgram bubble sort to sort array /values
// let data = [2,4,6,8,98,77,44,32,11,12,55,77,77]
// for(let i = 0;i<data.length;i++){
//     for(let j = 0;j<data.length;j++){
//         if(data[j]>data[j+1]){
//             let temp = data[j]
//             data[j] = data[j+1]
//             data[j+1]=temp
//         }
//     }
// }
// console.log(data);

// const { data } = require("jquery");

// const { reset } = require("nodemon");

// const { reset } = require("nodemon");

// let person = {
//     name: "Vikas",
//     age: 20,
//     language: "javaScript"
// }
// console.log(person);

// function square(number) {
//     return number*number
// }
// let number = square(7)
// console.log(number);

// function square(number) {
//     return number*number
// }

// console.log(square(9));


// let x = 2;
// let y = 2;
// console.log(x + y);
// console.log(x- y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// increment operator and decrement
// console.log(x++);
// console.log(x);

// x = x - 2
// console.log(x);

// x *= 2
// console.log(x);

// console.log(x>2);
// console.log(x>=2);
// console.log(x<2);
// console.log(x<=2);


// console.log(x===2);
// console.log(x!==2);

// console.log(1===1);
// console.log(1=='1');
// console.log(1==1);
// console.log(0==false);

// let points  = 110;
// let type = points > 100 ? "Gold" : "silver"
// console.log(type);

// console.log(false && false);

// let highIncome = true; // logical AND operator
// let goodCredit = true;
// let eligible = (highIncome && goodCredit)
// let eligiblE = !eligible
// console.log(eligible);
// console.log(eligiblE);

// console.log(true || false);
// console.log("Vk" || false);
// console.log(true || true);
// console.log(false || 0);

// let userColor = undefined;
// let defaultColor = "Blue";
// let currentColor = userColor || defaultColor
// console.log(currentColor);

// let 1 = 00000001
// let 2 = 00000010
// console.log(4&4);
// console.log(1&0);

// let readPermission = 4;
// let writePermission = 2;
// let executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | writePermission
// let message = 
// (myPermission & readPermission) ? 'yes' : 'no'
// console.log(message);

// let z = 3
// let v = ++z
// console.log(v);

// let a = "red"
// let b = "blue"
// let c = a
// a = b
// b = c
// console.log(a);
// console.log(b);


// let num1 = 4
// let num2 = 5
// console.log(num1);
// console.log(num2);
// let num3 = num1
// num1 = num2
// num2 = num3
// console.log(num1);
// console.log(num2);

// let a = 5
// let b = 10



// a = a^b
// b = a^b
// a = a^b
// console.log(a);
// console.log(b);

// let a = 5;
// let b = 6;
// [a, b] = [b, a];
//  console.log(a);
// console.log(b);

// let date = new Date()
// let hour = date.getHours()
// if(hour>=6 && hour<12){
//     console.log("Good Morning");
// }
// else if(hour>=12 && hour <15){
//     console.log("Afternoon");
// }
// else if(hour>=15 && hour < 19){
//     console.log(Evening);

// }
// else{
//     console.log("Night");
// }


// let role = 'Relatives';
// switch (role) {
//     case 'guest':
//         console.log("Hello guests");
//         break;
//     case 'relatives':
//         console.log("Relatives");
//         break;
//     case 'Relatives':
//         console.log("reLatives");
//         break;

//     default:
//         break;
// }


// let role = 'relatives';
// if(role === 'guests') console.log("Guests");
// else if(role === 'relatives') console.log("Relatives");

// for (let i = 0; i <= 10; i++) {
//     if(i % 2 !==0) console.log(i);

// }
// let i = 15
// while (i<=10) {
//     if (i % 2 == 0 ) {
//         console.log(i);
//     }
//     i++
// }

// let i = 11;
// do{
//     if(i%2!==0 ) console.log(i);
//     i++
// }while(i<5)

// let i = 0
// while(i<5){
//     console.log(i);
//     i++
// }

// let person = {
//     name: "Vikas",
//     age: 20,
//     subject: "javaScript",
// }
// for(let key in person){
//     console.log(person[key]);
// }

// let colors = ["Red","Green","Blue"]
// for(let index in colors){
//     console.log(colors[index]);
// }

// let colors = ["Red","green","Blue"]
// for(color of colors){
//     console.log(color);
// }

// let i = 0;
// while(i<10){
//     // if(i===5) break;
//     if(i % 2 == 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }
// let num1 = 5; // Find max from given number
// let num2 = 10;
// function maxNumber(num1,num2) {
//     if(num1>num2){ 
//         console.log(`${num1}`); 
// }
// else{
//     console.log(`${num2}`)
// }
// }
// (maxNumber(num1,num2))


// let number  = max(50,10);

// function max(num1,num2){
//     if(num1>num2){
//         return num1
//     }
//     else{
//         return num2
//     }
// }
// console.log(number);


// let number = max(50,100);
// console.log(number);
// function max(num1,num2){
//   return  (num1>num2) ? `${num1}`: `${num2}`
// }
// let camera = isLandsape(500,900);

// function isLandsape(width,height){
//     return (width>height) ? "LandScape" : "Portrait"
// }
// console.log(camera);


// const output = fizzBuzz();
// console.log(output);
// function fizzBuzz(input){
//     if(typeof input !=='number'){
//         return NaN
//     }
//     if((input % 3 === 0) && (input % 5 === 0)){
//         return "fizzBuzz"
//     }
//     if(input % 3 === 0){
//         return "Fizz"
//     }
//     if(input % 5 === 0){
//         return "Buzz"
//     }
//     return input

// }

// let speed = checkSpeed(75);

// console.log(speed);
// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed<speedLimit + kmPerPoint){
//         console.log("OK");
//     }
//     else{
//        const point = Math.floor( (speed - speedLimit) / kmPerPoint);
//        if(point>=12){
//         console.log("License Suspended");
//        }
//        else{
//         console.log("points",point);
//        }

//     }
// }
// let number = oddEven(10)
// console.log(number);
// function oddEven(input){
//     for(let i = 0;i<=input;i++){
//         if(i % 2 !== 0){
//             console.log(i+ " "+"ODD");
//         }
//         else{
//             console.log(i+ " "+"EVEN");
//         }
//     }
// }

// let array = [1,2,3,4,null,undefined,'',55,66,33,55,23]
// console.log(truthyValue(array));

// function truthyValue(array){
//     let count = 0;
//     for(let index of array){
//         if(index){
//             count++
//         }

//     }
//     return count;

// }


// let person = {
//     name: "Vikas",
//     age: 20,
//     sub: "JS"
// }
// console.log(stringProp(person));

// function stringProp(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string'){
//             console.log(key,obj[key]);
//         }
//     }
// }



// let person = {
//     name: "Vikas",
//     age: 20,
//     sub: "JS"
// }
// console.log(stringFind(person));
// function stringFind(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string'){
//             console.log(key,obj[key]);
//         }
//     }
// }

// let limit = 10;
// console.log(sumOf(limit));

// function sumOf(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 == 0) {
//             sum+=i

//         }

//     }
//     return sum
// }

// let marks = [0,0,0];

// function studentGrade(marks){
//     let total = 0;
//     for(let i in marks){
//         total += marks[i];
//     }
//     const avg = total/marks.length;
//     if(avg>=90 && avg<=99){
//             console.log("A"); 
//         }
//     else if(avg>79 && avg<=89){
//             console.log("B"); 
//         }
//     else if(avg>=70 && avg<=79){
//             console.log("C"); 
//         }
//     else if(avg>=60 && avg<=69){
//             console.log("D"); 
//         }
//     else if(avg>=1 && avg<=59){
//         console.log("F"); 
//     }
//     else if(avg<1){
//         console.log("FAIL"); 
//     }

// }
// studentGrade(marks);

// function star(rows){
//     for(let i = 1;i<=rows;i++){
//         let pattern = '';
//         for(let j = 0;j<i;j++){
//             pattern += '* '

//         }console.log(pattern);
//     }
// }star(5)

// let int = reverseInt(123)
// function reverseInt(int){
//     return (
//     // parseFloat(
//         int
//         .toString()
//         .split('')
//         .reverse()
//         .join('')

//     )
// }console.log(int);


//  primeNumber(50);
// function primeNumber(limit) {
//     for (let i = 2; i <= limit; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {

//             console.log(`${i}`);
//         }
//     }
// }
// console.log(prime);

// let circle = {
//     radius: 5,
//     location: {
//         x: 1,
//         y: 2
//     },
//     draw: function () {
//         console.log("hello");
//     }
// };
// (circle.draw());
// console.log(circle);

// let circle = {
//     radius: 5,
//     location: {
//         x:1,
//         y:2
//     },
//     draw: function(){
//         console.log("hello");
//     }
// };
// circle.draw();

// let num = 8
// function square(num){
//     let ans = num*num;
//     return ans;
// }
// console.log(square(num))
// let square2 = square(num)
// console.log(square2);







// pass by value 
// let data = {
//     name: "vikas"
// };
// console.log(data);
// let data2 = {...data}
// // let data2 = JSON.parse(JSON.stringify(data));
// data2.name = "vk";
// console.log(data2);

// console.log(data);



// Max min without using Function
// let data = [1,2,4,7,8,88]
// console.log(Math.max());
// let data = [1,2,4,7,8,88]
// let sum =0
// for(let i of data){
// sum+=i
// }
// console.log(sum);



// let a = 20
// function square(num){
//     return num*num
// }
// let a = square(3)
// console.log(a);

// let data = [2,3,0,55,66,77,12234,4569384]
// let max = data[0];
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max){
//         max = data[i]
//     }
// }console.log(max);


// function createCircle(radius){ //factory functions
//     return{
//     radius,
//     draw(){
//         console.log("draw");
//     }
// }
// }
// let circle1 = createCircle(5)
// console.log(circle1);




//constructors

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw");
//     }
// }
// let circle1 = new Circle(4)
// console.log(circle1);

// let circle = {
//     radius: 5
// };

// circle.color = "Blue"
// circle.draw = function(){
//     console.log("draw");
// }

// delete circle.color
// delete circle.draw
// console.log(circle);

// let x = 6
// let y = x
// x = 10
// console.log(x);
// console.log(y);


// let data = [1,4,666,33,99,34,9];
// for(let i = data.length;i>=0;i--){
//     // console.log(data[i]);
//     let j = data[0]
//     let k = data[data.length-1]
//     if(j>k){
//         let temp = k
//         k=j
//         j = temp
//     console.log(`${temp} is greater`);
//     }
// }

// counter Token 
// function counter(){

//     let count = 100;
//     this.incrementCounter = function (){
//         count++;
//         console.log(`Your Token is: `);
//         console.log(`${count}`);
//     }
//     this.decrementCounter = function (){
//         count--;
//         console.log(`Your Token is: `);
//         console.log(`${count}`);
//     }

// }

// let counter1  = new counter()
// counter1.incrementCounter()
// counter1.decrementCounter()


// function a(){
//     console.log("a called");
// }
// // var b = 
// (function (){
//     console.log("b called");
// })();

// const test=str=>{
//     console.log(str)
// }

// test("abcd")



// let b = function call(param1){
//     return  function call1(){
//         console.log(param1);
//     }
// }
// console.log(b("vikas"))

//CALLBACK FUNCTIONS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function x(name,y){

//         setTimeout(() => {

//             console.log("I am hello 1");
//             console.log("I am hello 2");
//             console.log("I am hello 3");
//             console.log("I am hello 4");
//             console.log("I am hello 5");
//             console.log(`Hello ${name}`);
//         }, 5000);

//     y()

// }
// x("vikas",function y(){
//     setTimeout(() => {

//         console.log("I am hello 6");
//     }, 1000);
// })
// console.log();


// function calling(name,callback){

//         console.log(`Hello ${name}`);

//         callback();

// }

// function callback(){
//       return  console.log("vikas");  
// }

// calling("Vikas",callback)



// function x(y){
//     setTimeout(() => {

//         console.log("hello");
//     }, 2000);
//     y("vk");
// }
// function y(name){
//     console.log(`hello ${name}`)
// }
// y("vikas")
// x(y)

// let circle = {
//     radius: 5,
//     diameter: 10
// }
// let anotherCircle = Object.assign( {color: 'yellow',x: 'heee'},circle);
// // for(let key in circle){
// //     anotherCircle[key]  = circle[key]
// // }

// console.log(anotherCircle);

// var a = 20
// function c(){
//     var a = 10;
//     console.log(a);
// }
// c()
// console.log(a);
// console.log(typeof(typeof(undefined)))
// let data = [1,2,34,4]
// data.unshift(100)
// console.log(data);


// var a = 10
// var a = 30
// console.log(a);


// let a = ["BBB",'AAA','Cab','ACB','ABC'];
//Event listeners
// function attach(){

//     let count = 0
//     document.getElementById('clickMe').addEventListener('click',
//     function xyz(){
//         console.log("Hello i'm clicked",++count);
//     })
// }
// attach()

//  a = (num1,num2) =>{
//     console.log("hello");
//     sum = num1+num2
//     console.log(sum); 

// }
// a(4,12);   


// let array = ["vikas","Satendra","Virenra"]
// array.shift()
// console.log(array);

// console.log(Array.from("Vikas"));

// var sum = 0
// const number = [1,2,3,4,5]
// number.forEach(function(number){
//     sum+=number+" "
//     console.log(sum);
// })
// function cb() {
//     console.log("callback");
// }
// cb()
// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);
// console.log("End");

// //while loop to keep execution context busy

// let startDate = new Date().getTime;
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime;
// }

// console.log("While loop Expirees");


// const radius = [5,10,15,20];
// const areaOfCircle = function (radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push (Math.PI*radius[i]*radius[i])
//         // output = Math.floor()
//     }
//     return output
// }
// console.log(areaOfCircle(radius));

// let radius = [1,2,3,4,5]
// let area = function(radius){
//     return Math.PI*radius*radius
// }
// const calculate = function (radius,logic){
//     let output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }return output
// }
// console.log(calculate(radius,area));
// let radius = [1,1,1,1]
// let logic = function(radius){
//     return 2*Math.PI*radius
// }

// const calculate = function (radius,logic){
//     let output = []
//     for(let i =0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return  output
// }
// console.log(radius.map(logic));


// let array = [1,2,3,4,5]
// let mult2 = function (array){
//     return array*630
// }
// let b = array.map(mult2)
// console.log(b);

// let array = [1,2,3,4,5]

// function binary(array){
//     return array.toString(2)
// }
// let b  = array.map(binary)
// console.log(b);
// for(let i =0;i<b.length;i++){
//     parseInt(b)
//     console.log(b[i]);
// }
// console.log(b);


// let array = [1,2,10,3,4,5,6,7,8,9]
// function isEven(array){
//     array.sort()
// }
// let output = array.reverse(isEven)
// console.log(output);

// let array = [1,2,3,4,5,6,7,8,9,0,10,11,22,33,44,55,66]
// function max(array){
//     return array>=10;
// }

// let output = array.filter(max)
// console.log(output);

// let data = [1,2,3,4,5,6,7,8,9]
// for(let i = 0;i<data.length;i++){
//     if(data[0]>data[1]){
//         console.log(`${data[0]} is greater`);
//     }
//     else if(data[1]>data[2]){
//         console.log(`${data[1]} is greater`);
//     }
//     else if(data[2]>data[3]){
//         console.log(`${data[2]} is greater`);
//     }
//     else if(data[3]>data[4]){
//         console.log(`${data[3]} is greater`);
//     }
//     else if(data[4]>data[5]){
//         console.log(`${data[4]} is greater`);
//     }
//     else if(data[5]>data[6]){
//         console.log(`${data[5]} is greater`);
//     }
//     else if(data[6]>data[7]){
//         console.log(`${data[6]} is greater`);
//     }
// }



// let data = [10,20,30,400]
// function addSum(data){
//     let sum = 0
//     for(let i =0;i<data.length;i++){
//         sum = sum + data[i]
//     }
//     return sum
// }
// console.log(addSum(data))

// let array = [10,20,30,400]
// let output = array.reduce(function(sum,value){
//     sum = sum + value
//     return sum
// })
// console.log(output);



// let array = [1000,2234230,400]
// let output = array.reduce(function (max,value){
//     if(value>max){
//         max=value
//     }
//     return max
// })
// console.log(output);

// let data = [

//         {fName: "Vikas",lName: "Maurya",age: 20},
//         {fName: "Satendra",lName: "Kushwaha",age: 20},
//         {fName: "Vishal",lName: "Pal",age: 22},
//         {fName: "Vishal",lName: "Pal",age: 232},
//         {fName: "Vishal",lName: "Pal",age: 22},
//         {fName: "Vishal",lName: "Pal",age: 222},
//         {fName: "Vishal",lName: "Pal",age: 242},
//         {fName: "Raksh",lName: "Maurya",age: 25}

// ]

// let output = data.reduce( (acc,curr) =>{
//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }
//     else{
//         acc[curr.age] = 1
//     }
//     return acc
// },{});
// console.table(output);


// let data = [

//         {fName: "Vikas",lName: "Maurya",age: 210},
// {fName: "Satendra",lName: "Kushwaha",age: 20},
// {fName: "Vishal",lName: "Pal",age: 22},
// {fName: "Vishal",lName: "Pal",age: 232},
// {fName: "Vishal",lName: "Pal",age: 22},
// {fName: "Vishal",lName: "Pal",age: 222},
// {fName: "Vishal",lName: "Pal",age: 242},
//         {fName: "Raksh",lName: "Maurya",age: 255}

// ]
//  const names = [];
// let output = data.reduce( function (acc,curr){
//     console.log(acc.fName)

//     if(curr.age>20){
//         console.log(acc)
//          names.push[curr.fName]

//     }

// },[])
// console.log(names);

// const arr=[1,2,3,4,5,6,7]
// const newarr=[]
// const res=data.reduce((acc,curr)=>{
//     //console.log("acc:",acc)
//     if(curr.age>20) return data.map(x=>x.fName)

// },0)

// console.log(res)

// let string = 'hello vikas'
// console.log(string);

// let output = string.split('')
// console.log(output);

// console.log(Math.pow())

////////Factory functions
// function factoryFunctions(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     }

// }
// let factoryFunctions1 = factoryFunctions("Rani Sati Marg","Mumbai Suburban",400097)
// console.log(factoryFunctions1);


///////////Constructor functions

// function Address(street,city,zipcode) {
//     this.street = street
//     this.city = city
//     this.zipcode = zipcode

// }
// let newAddress = new Address('Marg','Mumbai','400097')
// let anotherAddress = new Address('Marg','Mumbai','400097')
// // console.log(newCircle);
// function areSame(newAddress,anotherAddress){
//     return newAddress.street === anotherAddress.street &&
//     newAddress.city === anotherAddress.city &&
//     newAddress.zipcode === anotherAddress.zipcode

// }
// console.log((areSame(newAddress,anotherAddress)))

// function areEqual(newAddress,anotherAddress){
//     return newAddress === anotherAddress
// }
// console.log((areEqual(newAddress,anotherAddress)))


// function BlogPost(title,body,author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }
// let newConstructor = new BlogPost("PUBG","Playing","Squad",5,"Play Better")
// console.log(newConstructor);

// const number = [1, -1, 2, 3, 4, 5];
// let sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// })
// console.log(sum);
// const data = [1, 3, 4, 5];
// let output = function (data, searchEl) {

//     for (let i = 0; i < data.length; i++) { 
//         if (data[i] === searchEl) {
//             return true   
//         }  
//     }
//     return false;
// }
// console.log(output(data,11));
//$$$$$$$$$$$$$$$$$$ swapping without using 3rd variable
// let number1 = 1000;
// let number2 = 500;
// number1 = number2 + number1
// // console.log(number1);
// number2 = number1 - number2 
// // console.log(number2);
// number1 = number1 - number2
// // console.log(number1);
// console.log(`Number1 is ${number1}`);
// console.log(`Number2 is ${number2}`);

//$$$$$$$$$$$$ PAttern print
// function patternPrint(rows){
//     for(let i = 1 ;i<=rows;i++){
//         let str = ""
//         for(let j = 1;j<=i;j++){
//             str+=" * "
//         }console.log(str);
//     } 
// }
// patternPrint(5)

// let numbers = [1,2,3,4,5];
// function remove(numbers,excluded){
//     let array = []
//     for(let elements of numbers){
//         if(!excluded.includes(elements)){
//             array.push(elements)
//         }
//     }
//     return array

// }
// let output = remove(numbers,[1])
// console.log(output);

// let data = [1,2,3];
// function moving(data,index,position){
//     let output = [...data]

//     let element = output.splice(index,1)[0]
//     output.splice(index+position,0,element)
//     return output


// }
// let a = moving(data,0,2);
// console.log(a);

// let data = [1, 2, 3, 1];
// function counter(data, searchEl) {
//     return data.reduce((accumulator, currentValue) => {
//         let occurance = (currentValue===searchEl) ? 1 : 0
//         console.log(accumulator,currentValue,searchEl);
//         return accumulator + occurance
//     },0)
// // return occurance
// }
// let output = counter(data, 1);
// console.log(output);

///////////SSSSSSSSS  MAx of array
// let array = [-2,-3,-456,-55,-44,-77,-88]
// function maximum(array){
//     let max = array[0];
//     for(let element in array){
//         if(array[element]>max){
//             max = array[element]
//         }
//     }
//     return max
// }
// let output = maximum(array);
// console.log(output);
// let movies = [
//     { title: "a", year: 2017, rating: 3.4 },
//     { title: "c", year: 2018, rating: 4.5 },
//     { title: "b", year: 2018, rating: 4.2 },
//     { title: "d", year: 2022, rating: 4.8 },
//     { title: "e", year: 2015, rating: 4.0 },
// ];
// //write code to filter movies year and rating 
// // write code to keep rating in descending order
// // write code to keep  title only in output
// const titles = movies
// .filter (m =>m.year === 2018 && m.rating >4)
// .sort((a,b) =>a.rating - b.rating )
// .reverse()
// .map(m =>m.title)
// console.log(titles);

// function sum(discount,...price){///using rest operator
//     let total = price.reduce((a,b) => 
//         a+b)
//         return total *(1-discount)
// }                 
// console.log(sum(0.1,3,4,5,6,7,8,9,0));

// let person = {
//     fname: "Vikas",
//     lname: "Maurya",
//     set fullname(value){

//         if(typeof value != 'string'){
//             throw new Error('Value is not string')
//         }
//         const parts = value.split(" ")
//         if(parts.length != 2){
//             throw new Error("name should have more then 2 letters")
//         }
//         this.fname = parts[0]
//         this.lname = parts[1]
//     }
// };
// try{
//     person.fullname = ''

// }catch(e){
//     console.log(e);
// }
// console.log(person);

// function start() {
//     for (let i = 0; i < 5; i++) 
//         console.log(i);

//     // console.log(i);
// }
// start()

// let video = {
//     title: "a",
//     tags: ['Tag 1','Tag 2','Tag 3'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         })
//     }
// }
// video.showTags()











// let video = {
//     title: "A",
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach( (tag) =>{
//             console.log(this.title,tag);
//         })
//     }
// }
// video.showTags()

// function sum(...args){
//     if(args.length == 1 && Array.isArray(args[0]))
//     args = [...args[0]]


//      return args.reduce((a,b) => a+b )
// }

// console.log(sum([1,2,3,4,5]));

// let circle = {
//     radius: 5,
//     get  area() {
//         return Math.PI *( this.radius * this.radius)
//     },

// }
// circle.radius = 5 
// console.log(circle.area);


// try{

//     let number = [5,2,3,4,5];
//     let count = occurances(null,5);
//     console.log(count);
// }catch(e){
//     console.log(e.message);
// }

// function occurances(number,searchEl){
//     if(!Array.isArray(number)){
//         throw new Error("Invalid Array")
//     }
//     return number.reduce((accumulator,current) =>{
//         const occurance = (current === searchEl) ? 1 : 0
//         return accumulator + occurance
//     },0)
// }


// try{
// let number = [1, 2, 3, 4];
// let output = sum(null);
// console.log(output);
// }
// catch(e){
//     console.log(e.message);
// }
// function sum(number) {
//     let total = 0
//     if (!number === 'string') {
//         throw new Error("Please Enter Valid Array")
//     }
//     for(let values of number){
//         total +=  values
//     }
//     return total
// }
// function Stopwatch(){
//     let start, stop, running, duration = 0;
//     this.start = function(){
//         if(running){
//             throw new Error("Stopwatch has already Started.")
//         }
//         running = true
//         start = new Date();
//     };
//     this.stop = function(){
//         if(!running){
//             throw new Error("The Stopwatch is not started.");
//         }
//         running = false
//         stop = new Date();
//         let seconds = (stop.getTime()-start.getTime())/1000;
//         duration += seconds;
//     };
//     this.reset = function(){
//         start =  null;
//         end =  null;
//         running =  false;
//         duration = 0;
//         Object.defineProperty(this,'duration',{
//             get: function(){return duration}
//         })
//     };

// }
// const sw = new Stopwatch();
// sw.start();
// sw.stop();
// sw.duration();
// console.log(sw.reset());


// let sum = (...args) => {
//     let total = 0;
//     for(let i in args){
//         total += args[i]
//     }
//     return `The total sum is: ${total}`
// }
// let array = [1,2,3,4,5,6,7,8,9]
// console.log(sum(...array));


// let a = new Object();
// a.fname = "Vikas";
// a.lname = "Maurya";
// console.log(a);

// let fname = "Vikas"
// let age = 20;
// let sub = "Js"
// let details = {
//     fname,
//     age,
//     sub,
// }
// // let details1 = new details("Vikas",20,"js");
// console.log(details);


// let n = "student";
// let person = {
//     [`${n} name`]: "Vikas",
//     course: "JS"
// }
// console.log(person);
// console.log(person.course);

// let person = {
//     name: "Vikas",
//     sum(...args){
//         let total = 0;
//         for(let i in args){
//             total+= args[i]
//         }
//         return total
//     }
// }
// let array  = [1,2,3,4,5,6,7,8,9];
// console.log(person.sum(...array));

// let name = "Vikas";
// let age = 20;
// let person = (name,age) =>{
//     return {name,age}
// }
// console.log(person(name,age));
// person = ["vikas",20,23,45,6,789,123]
// let [name,age,...array] = person;
// console.log(name);
// console.log(age);
// console.log(array);

// let person  = ([name,age,sub]) =>{
//     console.log(name);
//     console.log(age);
//     console.log(sub);
// }
// person(["Vikas",20,"JS"])

//object destructuring
// let person = {
//     name: "vikas",
//     age: 20,
//     subject: "js"
// };
// let {name,age,subject} = person
// console.log(person.name);
// console.log(person.age);
// console.log(person.subject);
// // let user = {"Vikas",20, "JS"}

//classes in js
// class hello {
//      message = ()=>{
// console.log("Hii");
//     }
// }
// let output = new hello();
// // console.log(output);
// output.message();
// class student{
//     constructor(){
//         let name;
//         console.log("Hii");
//     }
//     hello(){

//     }
// }
// let factorial = (num) => {
//     if(num==0) return 1
//     else{
//         return num*factorial(num-1)
//     }
// }
// let output = factorial(5)
// console.log(output);




// class student{
//     constructor(name,age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log("constructor-Function");
//     }
//     hello(){
//         console.log("Hello",this.studentname + " " + "your age is" + this.studentage);
//     }
// }
// let output = new student("Vikas",20)
// // output.name  = "Viaks"
// output.hello()

// class employee {
//     constructor(name,salary) {
//         this.empname  = name
//         this.salary  = salary
//         console.log("Hello " + this.empname);
//     }
//     info(){
//         console.log("Employee Is:" + this.empname,"Salary" + this.salary);
//     }
// }
// class manager extends employee { 
//     info(){
//         let td = 1000;
//         let pd = 300;
//          this.total = this.salary+td+pd
//         console.log("Manager is "+this.total);
//     }
// }
// let out = new employee("Vikas",12000);
// let output = new manager("Ram",20000);
// // console.log(out);
// // console.log(output);
// out.info()
// output.info()
// let data = [1,2,3,4,5,6,7,8,9];
// let total = data.reduce((acc,curr) =>
// acc+curr)
// let result = total**data.length;
// console.log(result);
// let data = [1,2,3,4,5];
// let t = Math.random(1,4);
// setInterval(() => {
//     t++
//     console.log(t);
// }, 1000);

// function prom(){
//     return new Promise((resolve,reject) =>{
//         console.log("Promise started");

//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/posts',function(data){
//                 console.log(data);
//             })
//         }, 1000);
//     })
// }
// prom(10,5).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// let promiseCall = ((returnData,msg)=>{
//     return function(resolve,reject){
//         setTimeout(() => {
//             console.log(`The ${msg} promise has resolved.`);
//             resolve(returnData)
//         }, returnData*100);
//     }
// })
// let p1 = new Promise(promiseCall(10,"First"));
// let p2 = new Promise(promiseCall(20,"second"));
// let p3 = new Promise(promiseCall(30,"third"));
// let p4 = new Promise(function(resolve,reject){
//     reject("The 4th promise has been rejected")
// });

// let total = 0
// Promise.all([p1,p2,p3,p4]).then((result) => {
//     for(let i in result){ total += result[i]}
//         console.log(`Results: ${result}`);
//         console.log(`total: ${total}`);  
// }).catch((error) => { 
//     console.log(`Error: ${error}`)
// });

// function Circle(radius){
//     this.radius = radius

// };
// Circle.prototype.move = function(){
//     this.draw()
//     console.log("move");
// }
// const c1 = new Circle(5);
// console.log(c1);

// Circle.prototype.toString = function(){
//     return "Circle radius is:" + this.radius
// }
// Circle.prototype.draw = function(){
//     console.log("draw");
// }

// function Stopwatch() {
//     let start, stop,running, duration = 0;
//     Object.defineProperty(this, 'duration', {
//         get: function () { return duration },
//         set: function(value) {duration=value}
//     })
//     Object.defineProperty(this, 'start', {
//         get: function () { return start }
//     })
//     Object.defineProperty(this, 'stop', {
//         get: function () { return stop }
//     })
//     Object.defineProperty(this, 'running', {
//         get: function () { return running }
//     })
// };
// Stopwatch.prototype.start = function () {
//     if (this.running) {
//         throw new Error("Stopwatch has already Started.")
//     }
//     this.running = true
//     this.start = new Date();
// };
// Stopwatch.prototype.stop = function () {
//     if (!this.running) {
//         throw new Error("The Stopwatch is not started.");
//     }
//     this.running = false
//     this.stop = new Date();
//     let seconds = (stop.getTime() - start.getTime()) / 1000;
//     this.duration += seconds;
// };
// Stopwatch.prototype.reset = function () {
//     this.start = null;
//     this.end = null;
//     this.running = false;
//     this.duration = 0;

// }

// let sw1 = new Stopwatch();
// console.log(sw1);
// function Shape(color){
//     this.color = color;
// }
// Shape.prototype.duplicate = function(){
//     console.log("Duplicate");
// }
// Circle.prototype = Object.create(Shape.prototype);
// function Circle(radius,color) {
//     Shape.call(this,color);
//  this.radius = radius;
// }
// Circle.prototype.draw = function(){
//     console.log("Draw");
// }

// const s = new Shape();
// const c = new Circle(2,"Blue");
// console.log(c);

//Inheritance using prototype
// const proto = {
//   slogan: function(){
//     return `This is best`
//   },
//   changeName: function(newName){
//     this.name = newName
//   }
// }

// let vk = Object.create(proto,{
//     name:{value: "Vikas", writable:true},
//     role:{value: "JS"}
// })
// vk.changeName('Viks')
// // console.log(vk);
// function Employee(name,salary,experience){
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }
// Employee.prototype.slogan = function(){
//     return `This comp is best,regards ${this.name}`
// }
// let output = new Employee("ViKaS",20000,2)
// // console.log(output.slogan());
// function Programmer(name,salary,experience,language){
//     Employee.call(this,name,salary,experience);
//     this.language = language
// }
// Programmer.prototype  = Object.create(Employee.prototype)

// let rohan = new Programmer("Rohan",30000,5,"JAVASCRIPT")
// console.log(rohan.slogan());
//                                        24/11/2022
// class Employee {
//     constructor(givenName, givenExperience, givenDivision) {
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.division = givenDivision;
//     }
//     slogan() {
//         return `I am ${this.name} and this comp. is best`
//     }
//     joiningYear() {
//         return 2022 - this.experience;
//     }
// }

// class Programmer extends Employee() {
//     constructor(givenName, givenExperience, givenDivision, language) {
//         super(givenName, givenExperience, givenDivision, language)
//         this.language = language
//     }

//      favLanguage(){
//         if(this.language=='Python'){
//             return 'python'
//         }
//         else{
//             return 'js'
//         }
//     }
// }

// let Vikas =  new Programmer("VIKS",3,"JAVSC","Javascript");
// console.log(Vikas);
// class Library{
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issuedBooks = {};
//     }
//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element);
//         });
//     }
//     issueBook(bookname, user){
//         if(this.issuedBooks[bookname] == undefined){
//             this.issuedBooks[bookname]=user
//         }
//         else{
//             console.log("Book is already Issued.");
//         }
//     }
//     returnBook(bookname){
//        delete this.issuedBooks[bookname]
//     }
// }
// let vkLibrary = new Library(["1st Day","An Afternoon"]);
// vkLibrary.getBookList()
// console.log(vkLibrary);
// vkLibrary.issueBook("An Afternoon","Vk");
// vkLibrary.returnBook("An Afternoon");
// console.log(vkLibrary);

// let data = [11,33,44,55];
// let position = 1;
// let element = 100;
// for(let i =data.length-1;i>=position;i--){
//     if(i>=position){
//         data[i+1]=data[i]
//     }
//     if(i==position){
//         data[i]=element
//     }
// }
// console.log(data);


// let data = [1,2,3,45,66];
// data[3] = undefined
// console.log(data);

// let data = [1,2,3,45,66];
// let position = 3;
// for(let i = position;i<data.length;i++){
//     // console.log(data[i]);
//     data[i]=data[i+1]
// }
// data.length = data.length-1
// console.log(data);


// let data = [1,22,77,65,90,333];
// let max = data[0];
// for(let i =0;i<data.length;i++){
//     if(data[i]>max){
//         max=data[i]
//     }
// }
// console.log(max);
// let num1 = 20;
// let num2 = 50;
// num1=num2-num1
// num2=num2-num1
// num1=num1+num2
// console.log(num1);
// console.log(num2);

// let num1 = 10;
// let num2 = 20;
// let num3 = num1 //1
// num1=num2 //1
// num2=num3

// console.log(num1);
// console.log(num2);
// let data = [1,22,666,666,88,88,555,55];        //2nd max by Satya Bhai
// let max1  = 0
// let max2 = 0
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){
//         max2=max1
//         max1 = data[i]
//     }
// }

// for(let i = 0;i<data.length;i++){
    
//     if(max2 > data[i] || max2 < max1){

//         max2 = data[i]
//     }
// }
// console.log("max here" , max2)

// console.log(max2);

//i=4=>88
//max1=666
//max2=666


// //i=1=>

// let data = [1,22,35,55,11,73,56];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){
//         max1 = max2
//         max2 = data[i]
//     }
// }
// console.log(max1);
//i=1 => 22
//max1 = 0
//max2 = 1
// let array = [99, 88, 77, 44, 12,100,1008];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<array.length;i++){
//     if(array[i]>max1){
//         max2=max1
//         max1 = array[i]
//     }
//     else if(array[i]>max2){
//         max2=array[i]
//     }
// }
// console.log(max2);
// let integer = 123;
// function reverse(integer) {
    

// }

// (reverse(integer))

// // 123%10=3
// // 12%10=2
// // 1
// [1,1,2,2,2]
// let store = integer%10;
//      25/11/2022
// let integer = 3023;//                              reverse of an integer
// let string=""
// while(integer>0){
//     let rem=integer%10
//     string+=rem
//     integer=Math.floor(integer/10)
// }

// console.log(string);
//123>0
// 12.3

// if(integer>0){
//     let rem=integer%10
//     string+=rem
// }
// console.log(string);

// let number="123456789"
// let splitnumber=number.split('')
// console.log(splitnumber);

// let num = 12345
// function reverse(num){
//     return(
//        parseFloat (
//             num
//             //.split('')
//             .reverse()
//             .join('')

//         )
//     )
// }
// console.log(reverse(num));
// let data = [0,2,33,4,9,98,99,87];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//     if(data[i]>max1){               // i=1 =>2
//         // max2=max1;               
//         max1=data[i];              //max1 =>2
//     }
// }
// for(let i = 0;i<data.length;i++){
//         if(data[i]>max2 && data[i] < max1){       // i=0 =>0
//                 max2= data[i]                    //max2 =>0
//         }
// }
// console.log(max2);




// let num = 2341;
// let store = "";
// while(num>0){
//    let rem=num%10
//    store+=rem
//     num=Math.floor(num/10)
// }
// console.log(Number(store));
// let num = 35;
// let store = '';
// while(num>0){
//     let rem=num%10
//     store+=rem
//     num=Math.floor(num/10)
// }
// console.log(store);






















































































































