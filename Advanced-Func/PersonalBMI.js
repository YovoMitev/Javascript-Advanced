function solve(name,age,weight,height) {
    weight = Number(weight);
    height = Number(height);
    let bmi = Math.round(weight/((height/100)*(height/100)));
    let status = statusType(bmi);

    let obj = {
        name:name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height,
        },
        BMI:bmi,
        status:status
    };

    if(status=='obese'){
        obj['recommendation'] = 'admission required';
    }
    return obj;

    function statusType(bmi) {
        if(bmi<19)
            return 'underweight';
        else if (bmi<25)
            return 'normal';
        else if (bmi<30)
            return 'overweight';
        else
            return 'obese'
    }
}
console.log(solve('Peter',29,75,152));