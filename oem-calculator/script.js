//Storage Controller
const StorageController = (function () {

    return {
        storeProduct: function (product) {
            let products;
            if (localStorage.getItem("products") === null) {
                products = [];
                products.push(product);
            } else {
                products = JSON.parse(localStorage.getItem("products"));
                products.push(product);
            }
            localStorage.setItem("products", JSON.stringify(products));

        },

        getProducts: function () {
            let products;
            if (localStorage.getItem("products") === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem("products"));
            }
            return products;
        },

        updateProduct:function (product){
            let  products = JSON.parse(localStorage.getItem("products"));
            products.forEach(function (prd,index){
                if(prd.id==product.id){
                    products.splice(index,1,product)
                }
                localStorage.setItem("products", JSON.stringify(products));
            });

        },

        deleteProduct:function (id){
            let  products = JSON.parse(localStorage.getItem("products"));
            products.forEach(function (prd,index){
                if(prd.id==id){
                    products.splice(index,1)
                }
                localStorage.setItem("products", JSON.stringify(products));
            });
        }

    }

})();


//ProductController
const ProductController = (function () {

    //constrıuctor'dır.
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    //DB'den, json api'den gelebilecek datalar olabilir.
    const data = {
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice: 0
    }

    setCurrentProduct = function (product) {
        data.selectedProduct = product;
    }

    getCurrentProduct = function () {
        return data.selectedProduct;
    }

    addProduct = function (name, price) {
        let id;
        if (data.products.length > 0) {
            id = data.products[data.products.length - 1].id + 1;
        } else {
            id = 0;
        }
        const newProduct = new Product(id, name, parseFloat(price));
        data.products.push(newProduct);
        return newProduct;
    }

    getProductById = function (productId) {
        let product = null;

        return data.products.filter(item => item.id == productId);
    }

    updateProduct = function (name, price) {
        let product = null;
        data.products.forEach(function (prd) {
            if (prd.id == data.selectedProduct.id) {
                prd.name = name;
                prd.price = parseFloat(price);
                product = prd;
            }
        });
        return product;
    }

    deleteProduct = function (product) {
        data.products.forEach((item, index) => {
            if (item.id == product.id) {
                data.products.splice(index, 1)
            }
        });
    }

    return {
        getProducts: function () {
            return data.products
        },
        getData: function () {
            return data
        },
        addProduct,
        getTotal: function () {
            let total = 0;
            data.products.forEach(item => {
                total += item.price
            });
            data.totalPrice = total;
            return data.totalPrice
        },
        getProductById,
        setCurrentProduct,
        getCurrentProduct,
        updateProduct,
        deleteProduct
    }

})();


//UI Controller
const UIController = (function () {

    const selectors = {
        productList: "#item-list",
        productListItems: "#item-list tr",
        productName: "#productName",
        productPrice: "#productPrice",
        addButton: ".addBtn",
        updateButton: ".updateBtn",
        deleteButton: ".deleteBtn",
        cancelButton: ".cancelBtn",
        productCard: "#productCard",
        totalTL: "#totalTL",
        totalUSD: "#totalUSD",
        editButton: "[data-toggle='editBtn']"

        //  let telInput = $('[data-toggle="intTelInput"]');
    }

    createProductList = function (products) {
        let html = "";
        products.forEach(item => {
            html += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td class="text-right">
                       <i class="far fa-edit" data-toggle="editBtn"></i>
                    </td>
                </tr>
            `
        });

        $(selectors.productList).html(html);
    }

    addProduct = function (product) {
        $(selectors.productCard).css({
            display: "block"
        });
        var item = `
        <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td class="text-right">
                        <i class="far fa-edit" data-toggle="editBtn"></i>
                    </td>
                </tr>
        `;

        $(selectors.productList).append(item);

    }

    deleteProduct = function () {
        let items = $(selectors.productListItems);
        items.each((index, item) => {
            let item2 = $(item);
            if (item2.hasClass("bg-warning")) {
                item2.remove();
            }
        });
    }

    clearInput = function () {
        $(selectors.productName).val("");
        $(selectors.productPrice).val("");
    }

    clearWarnings = function () {
        const items = $(selectors.productListItems);
        items.each((index, item) => {
            let item2 = $(item);
            if (item2.hasClass("bg-warning")) {
                item2.removeClass("bg-warning");
            }
        });
    }

    hideCard = function () {

        $(selectors.productCard).css({
            display: "none"
        });
    }

    showTotal = function (total) {
        console.log("gelen para", total);
        $(selectors.totalUSD).html(total);
        $(selectors.totalTL).html(total * 7.5);
    }

    addProductToForm = function () {

        const selectedProduct = ProductController.getCurrentProduct();
        $(selectors.productName).val(selectedProduct.name);
        $(selectors.productPrice).val(selectedProduct.price);


    }

    addingState = function () {

        UIController.clearWarnings();
        UIController.clearInput();
        $(selectors.deleteButton).css({display: "none"});
        $(selectors.cancelButton).css({display: "none"});
        $(selectors.updateButton).css({display: "none"});
        $(selectors.addButton).css({display: "inline"});


    }

    editState = function (tr) {

        /* const parent = $(tr.parent());

         parent.children().each((index, item) => {
             let item2 = $(item);
             if (item2.hasClass("bg-warning")) {
                 item2.removeClass("bg-warning");
             }
         })*/

        $(tr).addClass("bg-warning");
        $(selectors.deleteButton).css({display: "inline"});
        $(selectors.cancelButton).css({display: "inline"});
        $(selectors.updateButton).css({display: "inline"});
        $(selectors.addButton).css({display: "none"});
    }

    updateProduct = function (prd) {

        let updatedItem = null;

        let items = $(selectors.productListItems);
        items.each((index, item) => {
            let item2 = $(item);
            if (item2.hasClass("bg-warning")) {
                item2.removeClass("bg-warning");
                item2.children().eq(1).text(prd.name);
                item2.children().eq(2).text(parseFloat(prd.price));
                updatedItem = item;
            }
        });

        return updatedItem;

    }

    return {
        createProductList,
        getSelectors: function () {
            return selectors
        },
        addProduct,
        clearInput,
        hideCard,
        showTotal,
        addProductToForm,
        addingState,
        editState,
        updateProduct,
        clearWarnings,
        deleteProduct,
    }
})();


//App Controller
const AppController = (function (ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UIController.getSelectors();

    const loadEventListeners = function () {

        //addproductEvent
        $(UISelectors.addButton).on("click", productAddSubmit)

        //EditProduct
        $(UISelectors.productList).on("click", productEditClick);

        $(UISelectors.updateButton).on("click", editProductSubmit);

        $(UISelectors.cancelButton).on("click", cancelUpdate);

        $(UISelectors.deleteButton).on("click", deleteProductSubmit);

    }

    const productAddSubmit = function (e) {

        const productName = $(UISelectors.productName).val();
        const productPrice = $(UISelectors.productPrice).val();

        if (productName !== "" && productPrice !== "") {
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            UIController.addProduct(newProduct);

            //addProduct to local storage
            StorageCtrl.storeProduct(newProduct);


            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            UIController.clearInput();


        }

        e.preventDefault();
    }

    const productEditClick = function (e) {
        let index = $(e.target);

        if (index.attr("data-toggle")) {

            const id = index.parent().prev().prev().prev().text();

            // get selected product
            const product = ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product[0]);

            UICtrl.clearWarnings();

            UICtrl.addProductToForm();
            UICtrl.editState(index.parent().parent());

        }
        e.preventDefault();
    }

    const editProductSubmit = function (e) {
        const productName = $(UISelectors.productName).val();
        const productPrice = $(UISelectors.productPrice).val();

        if (productName !== "" && productPrice !== "") {
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            //update ui
            let item = UICtrl.updateProduct(updatedProduct);

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            StorageCtrl.updateProduct(updatedProduct);


            UICtrl.addingState();

        }

        e.preventDefault();
    }

    const cancelUpdate = function (e) {
        UICtrl.addingState();
        UICtrl.clearWarnings();
        e.preventDefault();
    }

    const deleteProductSubmit = function (e) {

        //get selected product

        const selectedProduct = ProductCtrl.getCurrentProduct();

        //delete prodsuct
        ProductCtrl.deleteProduct(selectedProduct);

        //delete ui
        UICtrl.deleteProduct();

        //get total
        const total = ProductCtrl.getTotal();

        //show total
        UICtrl.showTotal(total);

        StorageCtrl.deleteProduct(selectedProduct.id);

        UICtrl.addingState();

        if (total == 0) {
            UICtrl.hideCard();
        }

        e.preventDefault();
    }


    return {
        init: function () {
            console.log("uygulama başlatıldı.");
            UICtrl.addingState();
            const products = ProductCtrl.getProducts();
            if (products.length === 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }

            //get total
            const total = ProductCtrl.getTotal();
            //show total
            UICtrl.showTotal(total);


            loadEventListeners();

        }
    }

})(ProductController, UIController, StorageController);

AppController.init();
