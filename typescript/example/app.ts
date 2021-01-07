import {ProductService} from "./ProductService";
import {Product} from "./Product";

let _productService=new ProductService();

let result;
result=_productService.getProducts();
console.log(result);

let result2=_productService.getById(2);
console.log(result);

let p=new Product();
p.name="Iphone X"
p.price=100000;


_productService.saveProduct(p);

_productService.deleteProduct(result2);

result=_productService.getProducts();
console.log(result);