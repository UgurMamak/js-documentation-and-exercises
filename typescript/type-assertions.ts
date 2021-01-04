let message;

message = 'Hello World';

//message'a ilk başta değer ataması yapılamdığı için any type'ına sahiptir bu yüzden string property'lerini kullanamaz.
//String propertylerini kullanabilmesi için tür dönüşümü yaparak string proplarını kullanabiliriz.

let count = (<string>message).length;

let count2 = (message as string).length;
