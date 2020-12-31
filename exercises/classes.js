var personES5=function(name,job,yearOfBirth){

    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
}
personES5.prototype.calculateAge=function(){
   return 2020-this.yearOfBirth;
}

var ugur=new personES5("uğur","developer",1998);
console.log(ugur.calculateAge());

//ES6
class PersonES6{
    constructor(name,job,yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
    }

    calculateAge(){
        return 2020 -this.yearOfBirth;
    }

    
    static sayHi(){
        console.log("HEllo there");
    }

}

let berkan=new PersonES6("berkan","student",2003);
console.log(berkan.calculateAge());

//arka tarafta yapılan işlemler aynı
//her instance için kopya oluştururlur.


//static metodlar instance üzerinden çalışmaz hata verir. Object üzerinden çağırabiliriz.
berkan.sayHi(); //hata verir. metod olarak görmez.
PersonES6.sayHi();//Bu şekilde çalışır.

//Static metodlar
//yardımcı metot oluşturmak istediğimizde, db'ye bağlanıp veri çekmek istediğimizde veya veri silmek istediğimizde kullanabiliriz.

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){

        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.hypot(dx,dy);
    }
}

const d1=new Point(10,10);
const d2=new Point(20,20);

Point.distance(d1,d2);