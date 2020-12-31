const api="https://api.exchangeratesapi.io/";

//
const currencyOne=$("#currencyOne"),
currencyTwo=$("#currencyTwo"),
    amount=$("#amount"),
hesapla=$("#hesapla"),
result=$("#result");


//load sysmbol

fetch("./currencies.json").then(res=>{
  return res.json()
})
    .then(data=>{
      const keys=Object.keys(data),
      values=Object.values(data);

      for(let i=0; i<keys.length; i++){
          currencyOne.append(`<option value="${keys[i]}">${values[i]}</option>`);
          currencyTwo.append(`<option value="${keys[i]}">${values[i]}</option>`);
      }
    });

hesapla.on("click",()=>{
    let oneval=currencyOne.val(),
        twoVal=currencyTwo.val(),
        amountVal=amount.val();

    if(!amountVal.length)amountVal=1;




    fetch(`${api}latest?base=${oneval}`)
        .then(res=>res.json())
        .then(data=>{
            const rate=data.rates[twoVal];
            result.attr("style","display:block !important");
            result.html(`${rate*amountVal}`);
        })

});