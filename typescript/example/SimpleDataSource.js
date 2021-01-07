"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this._products = new Array(new Product_1.Product(1, "Samsung", "Telefon", 1000), new Product_1.Product(2, "Iphone", "Telefon", 2000), new Product_1.Product(3, "Huawei", "Telefon", 5000), new Product_1.Product(4, "Xaomi", "Telefon", 3000), new Product_1.Product(5, "Oppo", "Telefon", 6000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this._products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
