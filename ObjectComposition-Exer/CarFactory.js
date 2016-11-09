function solve(obj) {
    function engineType(engine) {
        if (engine <= 90)
            return {power: 90, volume: 1800};
        else if (engine <= 120)
            return {power: 120, volume: 2400};
        else
            return {power: 200, volume: 3500};
    }

    let engine = engineType(obj.power);
    let carriage = {type: obj.carriage, color: obj.color};
    let wheels = obj.wheelsize;
    if (wheels % 2 == 0)
        wheels--;

    return {
        model: obj.model,
        engine: engine,
        carriage: carriage,
        wheels: [wheels, wheels, wheels, wheels]
    }
}
console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));