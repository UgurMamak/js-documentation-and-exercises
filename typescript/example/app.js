"use strict";
exports.__esModule = true;
var ProductService_1 = require("./ProductService");
var Product_1 = require("./Product");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts();
console.log(result);
var result2 = _productService.getById(2);
console.log(result);
var p = new Product_1.Product();
p.name = "Iphone X";
p.price = 100000;
_productService.saveProduct(p);
_productService.deleteProduct(result2);
result = _productService.getProducts();
console.log(result);