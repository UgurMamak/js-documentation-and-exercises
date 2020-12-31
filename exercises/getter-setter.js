//****************************** *
// const person={
//     firstName:"Uğur",
//     lastName:"Mamak",
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person.firstName="Berkan"
// console.log(person.fullName())
//****************************** *
// const person = {
//     firstName: "Uğur",
//     lastName: "Mamak",

//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },


//     setFullName: function (value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }


// person.setFullName("Berkan Mamak")

// console.log(person.firstName)

// console.log(person.getFullName())
//****************************** *


// const person = {
//     firstName: "Uğur",
//     lastName: "Mamak",

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },


//     set fullName(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }

// person.fullName="Berkan Mamak",
// console.log(person.fullName);
// console.log(person);

//****************************** *
////ÇALIŞMIYOR
// const person = {
//     firstName: "Uğur",
//     lastName: "Mamak",


// }
// Object.defineProperty(person,'fullName',{

//     get function() {
//         console.log("geldi")
//         return `${this.firstName} ${this.lastName}`
//     },


//     set function(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// });
// Object.defineProperty(person,"age",{
//     value:50,
//     writable:true //SET metodu oluşturur.
// });

// person.age=55;
// //person.fullName="Berkan Mamakk",
// console.log("d",person.fullName);
// console.log(person);


//******************************************************************** */

//developer mozillayı inceleyebilirsin.
/*var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function (){
    if(xhr.readyState===4 && xhr.status===200){
        console.log(xhr.responseText);
    }
}

//
xhr.onprogress=function (){
    console.log("getiriliyor.");
}

//method,url,(sync mi async mi)
xhr.open("GET",'mssg.txt',true);
xhr.send();//göndemek*/

