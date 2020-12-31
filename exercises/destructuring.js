//Destructuring assigment
var a,b,rest;

// a=10;
// b=20;

// [a,b]=[10,20]

[a,b,...rest]=[10,20,30,40,50,60] //a=10  b=20 rest=[30,40,50,600] değerlerini alır. rest array halinde tutar

//({a,b})={a:10,b:20} //a=10 b=20

//({a,b,...rest})={a:10,b:20,c:30,d:40}//a=10 b=20 rest={c:30,d:40} rest object halinde tutar.




//Array Destructuring

//ES5
const arr1=["localhost","8080","900"]
// var server=arr[0];
// var port=arr[1];
// var timeOut=arr[2]

//ES6 ile tek tek tanımlamak yerine bu şekilde eşitleme yapabiliriz.
//const [server,port,timeOut]=arr1;


//Object Destructuring
// const obj1={
//     server:"localhost",
//     port:"8080",
//     timeout:900
// }

//ES5
// var server=obj1.server;
// var port=obj1.port;
// var timeoutt=obj1.timeout;

//ES6
// const {server,port,timeout}=obj1;
// let {timeout:t}=obj1; //obj1'deki timeout değerini okur ve t değişkenine atar.

const obj2={
    server:"localhost",
    port:"8080",
    timeout:1000
}
const {server,port,timeout=900}=obj2;//timeout obj2 içinde olmadığı için 900 değerini atar. olsaydı obj2 içindeki değeri tanır.
console.log(timeout);

const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const [,,wed,,fri]=days;//boş geçmek istediğiniz elemanlar için "," koymak yeterli