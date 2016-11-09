function reduces(arr) {
    arr = arr.map(Number);

    console.log(`Sum = ${arr.reduce((a, b) => a + b)}`);
    console.log(`Min = ${Math.min.apply(null, arr)}`);
    console.log(`Max = ${Math.max.apply(null, arr)}`);
    console.log(`Product = ${arr.reduce((a, b) => a * b)}`);
    console.log(`Join = ${arr.reduce((a, b) => ""+a + b)}`);
}

