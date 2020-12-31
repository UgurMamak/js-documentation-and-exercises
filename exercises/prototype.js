// function Employee(name,salary){

//     if(!(this instanceof Employee)){//employee türü değilse demek 

//         return new Employee(name,salary);
//     }

//     this.name=name;
//     this.salary=salary;
// }

// Employee.prototype.calculateSalary=function(){
//     var month=new Date().getMonth()+1;
//     var tax=0,total=this.salary*month;

//     if(this.salary*month<=20000){
//         tax=total*0.2;
//     }else if(total>20000 && total<=30000){
//         tax=total*0.25;
//     }
//     else{
//         tax=total*0.3;
//     }
//     return{
//         tax:tax,paid:total-tax
//     }
// }

// // var em1=Employee("Uğur",3000);//Bu şekilde çağırdığımızda hata alırız. Bunun önüne geçmek için constructor içinde new'leme işlemi yapılabilir.
// // console.log(em1)

// var em1= Employee("Uğur",3000);
// console.log(em1.calculateSalary());
// console.log(em1)

// var em2=new Employee("Berkan",4000);
// console.log(em2.calculateSalary());
// console.log(em2)

//******************************************************************************************************************

// let personProto={
// 	calculateAge:function(){
// 		return 2020-this.yearOfBirth;
// 	}

// }

// let ugur=Object.create(personProto);
// ugur.name="uğur";
// ugur.yearOfBirth=1998;
// ugur.job="developer"


// console.log(ugur.calculateAge())
//******************************************************************************************************************




// let Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     return 2020 - this.yearOfBirth
// }

// let Teachher = function (name, yearOfBirth, job, subject) {
//     Person.call(this,name,yearOfBirth,job) //this burada teacher'ı temsil eder. (kalıtım işlevi görür.)
//     this.subject = subject
// }

// Teachher.prototype=Object.create(Person.prototype); //Inherit the Person prototype methods (Birebir eşitleme yaptığımız için Person'ın constructor'ını alır.)
// Teachher.prototype.constructor=Teachher; //Set Teacher constructor

// Teachher.prototype.greeting=function(){
//     return "hello my name is"+this.name
// }


// let ugur=new Person("Uğur",1998,"developer");
// console.log(ugur);
// console.log(ugur.calculateAge())

// let furkan=new Teachher("furkan",1990,"teacher","math")
// console.log(furkan);
// console.log(furkan.calculateAge());


//******************************************************************************************************************

// var str1="Uğur"; //type'ı string'dir.
// var str2=new String("Uğur"); //type'ı objecttir.

// var num1=10;
// var num2=new Number(10);
// console.log(num1.toFixed(2))
// console.log(num2.toFixed(2))

// var bool1=true;
// var bool2=new Boolean(true);
// console.log(bool1)
// console.log(bool2)

// var obj1={name:"Uğur"}
// var obj2=new Object({name:"Uğur"});
// console.log(obj1);
// console.log(obj2);


// var arr1=["uğur","berkan","furkan"]
// var arr2=new Array("uğur","berkan","furkan");

// //String constructor'ına yeni özellik eklendi. (Extend işlemi)
// String.prototype.repeat=function(n){
//     return new Array(n+1).join(this);
// }
// console.log("uğur".repeat(2));



// Array.prototype.remove=function(member){
//     var index=this.indexOf(member);
//     if(index>-1){
//         this.splice(index,1);
//     }
//     return this;
// }

// //Eğer js sürümlerinde yazdığımız isimlerde method eklenirse yazdığımız kod methodu ezer bunu kontrol etmek için aşağıdaki işlem yapılarak method oluşturulmalı

// Array.prototype.remove=Array.prototype.remove || function(member){
//     var index=this.indexOf(member);
//     if(index>-1){
//         this.splice(index,1);
//     }
//     return this;
// }

// console.log(arr1.remove("berkan")) 

//******************************************************************************************************************

let Person = function (name) {
    this.name = name;
}
Person.prototype.Introduce = function () {
    console.log(`Hello my name is ${this.name}`);
}
let p1 = new Person("Uğur");
p1.Introduce();


let Student = function (name, number) {

    Person.call(this, name);
    this.number = number;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    console.log(`my student number: ${this.number}`);
}

let s1 = new Student("Furkan", "100");
s1.Introduce();
s1.study();



let Teacher = function (name, branch) {

    Person.call(this, name);
    this.branch = branch;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
    console.log(`I teach ${this.branch}`);
}

let t1 = new Teacher("berkan", "math");
t1.Introduce();
t1.teach();




let HeadMaster = function (name, branch) {
    Teacher.call(this, name, branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;

HeadMaster.prototype.shareTask = function () {
    console.log(`hello headMater`);
}

let h1 = new HeadMaster("Yeliz", "english");
h1.Introduce(); //Person
h1.teach();//Teacher
h1.shareTask();//HeadMaster


var obj1 = { name: "Uğur" }
var obj2 = obj1;

obj2.name = "berkanv"

console.log(obj1);
console.log(obj2);

