import {IProductService} from "./IProductService";
import {Product} from "./Product";
import {SimpleDataSource} from "./SimpleDataSource";

export class ProductService implements IProductService{

    private _dataSource:SimpleDataSource;
    private _products:Array<Product>;

    constructor() {
        this._dataSource=new SimpleDataSource();
        this._products=new Array<Product>();
        this._dataSource.getProducts().forEach(p=>{
            this._products.push(p)
        })
    }

    deleteProduct(product: Product): void {
        let index=this._products.indexOf(product);
        if(index>0){
            this._products.splice(index,1);
        }
    }

    getById(id: number): Product {
        return this._products.filter(item=>item.id===id)[0];
    }

    getProducts(): Array<Product> {
        return this._products;
    }

    saveProduct(product: Product): void {

        if(product.id==0|| product.id==null){
            product.id=this.generateId();
            this._products.push(product);
        }else{
            let index;
            for (let i=0;this._products.length;i++){
                if(this._products[i].id==product.id){
                    index=i;
                }
            }
            this._products.splice(index,1,product);
        }

    }

    private generateId():number{
        let key=1;
        while (this.getById(key)!=null){
            key++;
        }
        return key;
    }

}