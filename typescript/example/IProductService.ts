import {Product} from "./Product";

//IProduct interface'inden implement alan class'lar Product içindeki metotlara erişebilecek.
export interface IProductService{
    getById(id:number):Product;
    getProducts():Array<Product>; //    getProducts():Product[]; bu şekilde de tanımlayabiliriz.
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;
}
//Bu şekilde yaparak katmanlı yapı sağlamış oluyoruz.
//Farklı veritabanları için farklı kodlar yazıldığı için interface' metot tanımlamalarını yaparız.
//ve her farklı yöntem için bu interface'i implement ederek metotları kullanırız.