
//this yerine tanımladığımız object'leride burada kullanabiliriz. (call() metodu ile)
var welcome=function(){
    console.log("welcome"+this.name);
}

var n1={name:"ugur"};
var n2={name:"berkan"}

//fonksiyon parametre almıyorsa call ve apply kullanımı aynı sonuçları verir. 
welcome.call(n1);
welcome.call(n2);

welcome.apply(n1);
welcome.apply(n2);

//Bind'da bir değer döner. Bu örnektee bir function dönecektir.
a=welcome.bind(n1);
b=welcome.bind(n2);

a();
b();


//call ve apply'in farkı parametre kulanımında belli olur. 
var welcome2=function(a,b){
    console.log("welcome"+this.name+". Are you interested in "+a+" and "+b);
}

var n3={name:"ahmet"};
var n4={name:"burak"}

welcome2.call(n3,"Js","React");
welcome2.apply(n4,["c#","PHP"]);//parametreler array şeklinde gönderilmek zorunda


//************************** */

var num={
    min:0,
    max:100,
    checkNumericRange:function(value){
        if(typeof value!=="number"){
            return false;

        }else{
            return value>=this.min && value<=this.max;
        }
    }
}

console.log(num.checkNumericRange(-20));

var numbers={min:50,max:200}

console.log("call",num.checkNumericRange.call(numbers,51))
console.log("apply",num.checkNumericRange.apply(numbers,[501]))

var checkNumber=num.checkNumericRange.bind(numbers);
console.log("checkNumber",checkNumber(800));