let solution = (function () {
    return {
        add:(vectorA, vectorB) =>{
            return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
        },
        multiply:(vectorA, scalar) => {
            return [vectorA[0] * scalar, vectorA[1] * scalar]
        },
        length:(vector) => {
            return Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
        },
        dot:(vectorA, vectorB) => {
            return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
        },
        cross: (vectorA, vectorB) => {
            return (vectorA[0] * vectorB[1]) - (vectorA[1] * vectorB[0]);
        }
    }
})();

console.log(solution.multiply([1, 1],3));