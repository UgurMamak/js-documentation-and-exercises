function Factory() {
    this.createEmplyee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        }

        employee.type=type;
        employee.say=function (){
            console.log(this.type+": saatlik ücreti: "+this.hourly);
        }

        return employee;
    }
}
var FullTime=function (){
    this.hourly="30TL"
}
var PartTime=function (){
    this.hourly="20TL"
}
var Temporary=function (){
    this.hourly="15TL"
}

var factory=new Factory();
var fullTimeEmp= factory.createEmplyee("fulltime");
fullTimeEmp.say();

var partTimeEmp= factory.createEmplyee("parttime");
partTimeEmp.say();

var employees=[];
employees.push(factory.createEmplyee("fulltime"));
employees.push(factory.createEmplyee("parttime"));
employees.push(factory.createEmplyee("temporary"));
employees.push(factory.createEmplyee("fulltime"));

employees.forEach(item=>{
    console.log(item);
});

