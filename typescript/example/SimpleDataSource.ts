import {Product} from "./Product";

export class SimpleDataSource{
    private _products:Array<Product>
    constructor() {
        this._products=new Array<Product>(
            new Product(1,"Samsung","Telefon",1000),
            new Product(2,"Iphone","Telefon",2000),
            new Product(3,"Huawei","Telefon",5000),
            new Product(4,"Xaomi","Telefon",3000),
            new Product(5,"Oppo","Telefon",6000)
        );
    }

    getProducts():Product[]{
        return this._products;
    }
}