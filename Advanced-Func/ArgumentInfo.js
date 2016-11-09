function solve() {
    let map = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+": "+obj);
        if(!map[type])
            map[type]=1;
        else
            map[type]++;
    }

    let sorted = [...Object.keys(map)].sort((a,b)=> -(map[a]-map[b]));
    sorted.forEach(item => console.log(item + ' = ' + map[item]));
}
solve('cat', 42, function () { console.log('Hello world!'); },42,12,'ivan','asd',21);