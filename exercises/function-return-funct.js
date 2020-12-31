
function Question(hobby) {
    switch (hobby) {
        case "car":
            return function (name, carName) {
                console.log(`${name} ${carName} model araba seviyor`);
            }
            break;

        case "software":
            return function (name, softName) {
                console.log(`${name} ${softName} yazılım dilini seviyor.`);
            }
            break;

        default:
            return function (name) {
                console.log(`${name}, sistemdeki hobilerimizle ilgilenmiyorsun.`);
            }
            break;
    }

}

let q1 = Question("car");
q1("uğur", "BMW");

let q2 = Question("software");
q2("uğur", "React");

let q3 = Question();
q3("Uğur");