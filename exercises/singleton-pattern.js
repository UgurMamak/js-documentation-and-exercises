var singleton=(function (){
    var instance;
    createInstance=function (){
        return{
            randomNumber:Math.random()
        }
    }

    //instance kontrolü singleton oluşturmamıza yarıyor.
    getInstance=function (){
        if(!instance){
            instance=new createInstance();
        }
        return instance;
    }

    return{
        getInstance
    }

})();
const instance1=singleton.getInstance();
const instance2=singleton.getInstance();
console.log(instance1.randomNumber,instance2.randomNumber);//aynı değerler gelir.

//
var singleton2=(function (){
    var instance;

    function ProductController(){
        const products=[
            {name:"Samsung s8",price:4000},
            {name:"Iphone X",price:10000},
            {name:"Huawei",price:3000},
            {name:"Xaomi",price:2000},
        ];

        const add=function (product){
            products.push(product);
        }

        const get=function (){
            return products;
        }

        return{
            add,
            get
        }

    }

    return {
        getInstance:function (){
            if(!instance){
                instance=new ProductController();
            }
            return instance;
        }
    }

})();

const productController1=singleton2.getInstance();
const productController2=singleton2.getInstance();

productController1.add({name:"yeni ürün",price:5100});
console.log(productController2.get());