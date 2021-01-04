
//ne kadar parametre alacağını bilmediğimizde  spread operatörünü kullanarak yapabiliriz.
//sondaki string ifadesi function'ın sonda string değer döndüreceği anlamına gelmektedir.
const getAverage = (...a: number[]): string => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total / count;
    return 'result : ' + result;
}

getAverage(10, 20, 30);
getAverage(10, 20, 30, 50);
getAverage(10, 20);
getAverage(10);