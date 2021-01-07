"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    /*    _id:number;
        _name:string;
        constructor(id,name) {
            this._id=id;
            this._name=name;
        }*/
    //yukarıdaki gibi yapmak yerine aşağıdaki şekilde de constructor'da tanımlama yapabiliriz.
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
