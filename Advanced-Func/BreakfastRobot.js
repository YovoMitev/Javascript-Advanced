let robot = (function () {

    let elements = {
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function commandProc(input) {
        input = input.split(' ');
        if(input[0]=='restock'){
            elements[input[1]] += Number(input[2]);
            return 'Success'
        }
        else if(input[0]=='prepare'){
            let quantity = Number(input[2]);
            let food = input[1];
            for(let elem of Object.keys(recipes[food])){
                let totalQuantity = recipes[food][elem]*quantity;
                if(totalQuantity>elements[elem])
                    return `Error: not enough ${elem} in stock`;
            }
            for(let elem of Object.keys(recipes[food])){
                elements[elem] -= recipes[food][elem]*quantity;
            }
            return 'Success'
        }
        else
            return [...Object.keys(elements)].map(e => e+ '=' +elements[e]).join(' ');

    };

})();

console.log(robot('restock protein 50'));