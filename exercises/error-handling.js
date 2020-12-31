
var user={name:"Uğur mamak"}




ReferenceError//referans hatası 
TypeError
SyntaxError
URIError

//olmayan fonksiyonu kullanırsak "ReferenceError" hatası alabiliriz.

try {
    //myFunc();
    console.log(user.email)//undefined çıktısı verir. Bunu hata koduna çevirmek için throw ile systax error oluşturabiliriz.

    if(!user.email){
        throw new SyntaxError("User has no email");ReferenceError
        throw new Error("User has no email");ReferenceError
       
    }
    
} catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);

}

finally{
    //hata olsada olmasada finally block'u çalışır.
}