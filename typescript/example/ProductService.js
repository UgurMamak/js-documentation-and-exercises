"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this._dataSource = new SimpleDataSource_1.SimpleDataSource();
        this._products = new Array();
        this._dataSource.getProducts().forEach(function (p) {
            _this._products.push(p);
        });
    }
    ProductService.prototype.deleteProduct = function (product) {
        var index = this._products.indexOf(product);
        if (index > 0) {
            this._products.splice(index, 1);
        }
    };
    ProductService.prototype.getById = function (id) {
        return this._products.filter(function (item) { return item.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this._products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this._products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; this._products.length; i++) {
                if (this._products[i].id == product.id) {
                    index = i;
                }
            }
            this._products.splice(index, 1, product);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
