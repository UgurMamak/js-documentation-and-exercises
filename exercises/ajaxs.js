
//AJAX XHR OBJESİ KULLANIMI
//employes.json dosyası kullanılara XHR objesi kullanıldı.
document.querySelector("#getir").addEventListener("click", loadEmployee);
function loadEmployee() {
    $("#loading").addClass("open");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json", true);

    setTimeout(() => {
        xhr.onload = function () {
            $("#loading").removeClass("open");
            if (this.status == 200) {
                //console.log(this.responseText); //text olarak döner
                //console.log((JSON).parse(this.responseText)); //json formatında gelir.
                let employees = JSON.parse(this.responseText);
                console.log(employees);

                let html;
                employees.forEach(item => {
                    html += `<table class="table table-bordered">
                            <tr>
                            <td>${item.firstName}</td>
                            <td>${item.lastName}</td>
                            </tr>
                         </table>`;
                });

                document.querySelector("#employees").innerHTML = html;
            }
        }
        xhr.send();
    }, 150);
}


//REST API HTTPGET İŞLEMLERİ
document.querySelector("#get-one").addEventListener("click", fncGetOne);
document.querySelector("#get-all").addEventListener("click", fncGetAll);
function fncGetOne() {
    var id = document.querySelector("#postId").value;
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";

  if(!id.length)return ;


    xhr.open("GET", `${url}/${id}`, true);
    xhr.onload = function () {
        if (this.status===200) {
            var datas = JSON.parse(this.responseText);
            console.log(datas);
            var html = `<div class="alert alert-primary" role="alert">
                ${datas.id}-${datas.title}
            </div>`
            document.querySelector("#datas").innerHTML=html;
        }
        else if(this.status===404){
            var html = `<div class="alert alert-secondary" role="alert">
                KAYIT BULUNAMADI
            </div>`
            document.querySelector("#datas").innerHTML=html;
        }
    }
    xhr.send();
}
function fncGetAll() {
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            var datas = JSON.parse(this.responseText);
            var html = "";

            datas.forEach(item => {

                html += `<div class="alert alert-primary" role="alert">
                       ${item.id}-${item.title}
                </div>`;
            });

            console.log(html);
            document.querySelector("#datas").innerHTML = html;
        }
    }
    xhr.send();
}

//REST API HTTPPOST İŞLEMLERİ

//gönderirken obje olarak değil objeye çevrilebiilir text olarak göndermeliyiz. (JSON.stringfy())
document.querySelector("#postData").addEventListener("click",fncPostData);
function fncPostData (){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";
    var data={
        postId:"1",
        title:"deneme",
        desc:"description"
    };
    var data2=JSON.stringify(data);

    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");

    xhr.onload=function (){
        if(this.status===201 && this.readyState===4){
            console.log("eklenme işlmei başarılı"+this.responseText);
        }
    }
    xhr.send(data2);
}

document.querySelector("#primary-form").addEventListener("submit",fncGetData);
function fncGetData(e){
    var form=document.querySelector("#primary-form");
    console.log(form.elements["exampleInputEmail1"].value);
    e.preventDefault();
}

//Callback fonksiyonlarla asenkron programlama (kursu cpoy paste yaptın.)
/*var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]

let added = false;

function addProduct(prd,callback){

    if(added){
        setTimeout(()=>{
            products.push(prd);
            callback(null,prd);
        },2000);
    }else{
        callback('500',prd);
    }
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, (1000));
}


addProduct({id:4,name:"Samsung S5",price:500},function(err,data){
    if(err){
        console.log('hata : '+ err);
    }else{
        console.log(data);
    }
});*/


//Promise il asenkron programlama
/*
var products = [
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]

let added = true;

function addProduct(prd,callback){

   return  new Promise(function (resolve,reject){
        if(added){
            setTimeout(()=>{
                products.push(prd);
                resolve();
            },2000);
        }else{
            reject('500',prd);
        }
    });
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, (1000));
}

addProduct({id:4,name:"Samsung S5",price:500}).then(getProducts).catch(
    function (err){
        console.log("catchde: "+err);
    }
);*/


/*let myObj={
    /!*method:"POST",*!/
    url: 'https://randomuser.me/api//?results=5',
    /!*headers:[
        {"content-type":"application/json"}
    ]*!/
    /!*  body:{
          "name":"uğur"
      }*!/
}

let request=obj=>{
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(obj.method || "GET",obj.url);

        if(xhr.headers){
            Object.keys[obj.headers]
                .forEach(key=>{
                    xhr.setRequestHeader(key,obj.headers[key])
                });
        }

        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror=()=>{
            reject(xhr.statusText);
        }

        xhr.send(obj.body);//body bilgileri send metodunun içinde belirtilir.


    });
}

request(myObj)
    .then(data=>{
       let users=JSON.parse(data);

       users.results.forEach(user=>{
           console.log(user);
       });
    }).catch(error=>{
    console.log(error);
});*/

//FETCH API

/*
var data={
    method:"POST",
    body:JSON.stringify({
        userId:1,
        title:"deneme title",
        desc:"deneme desc"
    }),
    headers:new Headers({
        'content-type':"application/json"
    })
}*/

var isErr=false;
function getCategory(){
    return new Promise((resolve,reject)=>{
        if(isErr){
            reject("HATA VAR");
        }
        else{
            resolve("Phone");
        }
    });
}

function getProducts(category){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${category} den 5 tane bulunmaktadır.`);
        },1000);

    });
}

//Promise kullanarak asenkron yazma işlemi
/*getCategory().then(getProducts).
then(data=>{
    console.log(data);
}).catch(data=>{console.log(data)});*/

//ASYNC await kullanarak asenkron yazma işlemi
async function getProduct(){
   let category=await getCategory();
   let result=await getProducts(category);
   console.log(result);
}

getProduct();