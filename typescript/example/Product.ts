export class Product {

    /*    _id:number;
        _name:string;
        constructor(id,name) {
            this._id=id;
            this._name=name;
        }*/

    //yukarıdaki gibi yapmak yerine aşağıdaki şekilde de constructor'da tanımlama yapabiliriz.
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ) {
    }

}