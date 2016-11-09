function solve(obj) {
    if(obj.handsShaking){
        obj.handsShaking = false;
        obj.bloodAlcoholLevel += ((obj.weight*0.1)*obj.experience);
        return obj;
    }
    return obj;
}
console.log(solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }

));