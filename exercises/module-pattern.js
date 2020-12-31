//MODULE PATTERN
//IIFE
//scopelar arasındaki değerler scope içinde kullanılabilir sadece (bu yöntem doc'deki 1.problemi çözmemizi sağlar)
(function () {

})();
//es6
(() => {

})();

// dışarıya metot açmak istediğimizde IIFE'ye isimlendirmeliyiz. (Bu kullanım şekli doc'daki 2.problem olan kapsüllemedeki sorunu çözmeti sağlar.)
var Module1 = (function () {
    //private members (sadece bu scope içinde kullanılabilir.)
    let number = 0;

    let increment = function () {
        return ++number;
    }
    let decrement = function () {
        return --number;
    }

    //console.log(increment()); //ulaşılır.
    return {
        //public members (dışarıda kullanabilmeyi sağlar.)
        increment,
        decrement
    }
})();

//console.log(number);//number tanımlanmadı hatası verir.
//console.log(increment());//ulaşamayız.

console.log(Module1.increment());
console.log(Module1.increment());
console.log(Module1.decrement());

var module2 = (function () {
    var privateMethod = function () {
    };
    return {
        publicMethod: function () {
        }
    }
})();
module2.publicMethod();

//////
var products=[
    {name:"Samsung s8",price:4000},
    {name:"Iphone X",price:10000},
    {name:"Huawei",price:3000},
    {name:"Xaomi",price:2000},
];

var ProductController=(function (data){
    let collections= data || [];

    addProduct=function (product){
        collections.push(product);
    }
    removeProduct=function(product){
        var index=collections.indexOf(product);
        if(index>=0){
            collections.splice(index,1);
        }
    }
    getProducts=function (){
        return collections;
    }

    return{
        addProduct,
        getProducts,
        removeProduct
    }

})(products);

console.log(ProductController.getProducts());

ProductController.addProduct({name:"deneme",price:3500});
console.log(ProductController.getProducts());

ProductController.removeProduct(products[1]);
console.log(ProductController.getProducts());


//ProductContrtoller modülünü genişletmiş olduk.***
//Bu şekilde ana modüle dokunmadan extended modülünü kullanarak işlemlerimizi gerçekleştirebiliriz.****
//Module extending (Modülü genişletmek anlamına gelmektedir.) //function'ın aldığı parametre en alttaki parantez verilen module'e denk gelmektedir.
var extended=(function (m){
    m.sayHello=function(){
        console.log("Moülü genişlettiniz.");
    }
    return m;
})(ProductController);
extended.sayHello();
console.log(extended.getProducts());