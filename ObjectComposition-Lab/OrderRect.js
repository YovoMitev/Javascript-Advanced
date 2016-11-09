function solve(input) {

    function createRect(w,h) {
        let rect = {
            width:w,
            height:h,
            area:() => rect.width*rect.height,
            compareTo:(other) => {
                let result = other.area() - rect.area();
                return result || (other.width-rect.width);
            }
        };
        return rect
    }

    let rects = [];
   for(let [w,h] of input){
       let rect = createRect(Number(w),Number(h));
       rects.push(rect);
   }
   rects.sort((a,b) => a.compareTo(b));
    return rects
}
console.log(solve([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));