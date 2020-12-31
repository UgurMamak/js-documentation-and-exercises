
//Alt Sınıflar-Sub Classes (inheritance)

//ES5
function PersonES5(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

PersonES5.prototype.sayHi= function(){
    return `Hello ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,userName){

    PersonES5.call(this,firstName,lastName);
    this.phone=phone;
    this.userName=userName;
}

CustomerES5.prototype=Object.create(PersonES5.prototype);

let customer=new CustomerES5("ugur","mamak","4325342","ugurmamak");
console.log(customer.sayHi());


//ES6
class PersonES6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayHi(){
        return `Hello2 ${this.firstName} ${this.lastName}`
    }
}


//extend ile customer es6 persones6'dan kalıtım almış olur.extend genişletmek demek.
class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,userName){
        super(firstName,lastName);//es5'deki call işleminin karşılığına denk gelir. super metoud
        this.phone=phone;
        this.userName=userName;
    }
    static getTotal(){
        return 1000;
    }
}

let customer2=new CustomerES6("Furkan","mamak","21243622926","furkanmamak");
console.log(customer2.sayHi());
console.log(customer2.getTotal());//HATA VERİR. çünkü static metod instance üzerinden çağrılamaz.