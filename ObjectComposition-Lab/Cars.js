function solve(commands) {
    let cmdProcessor = (function () {
        let carsMap = new Map();
        
        function create(name,inherit,parent) {
            if(inherit==null)
                carsMap.set(name,{});
            else
                carsMap.set(name,Object.create(carsMap.get(parent)));
        }
        function set(currentObj,key,value) {
            let obj = carsMap.get(currentObj);
            obj[key] = value;
        }
        function print(name) {
            let obj = carsMap.get(name), objects = [];
            for(let key in obj){
                objects.push(`${key}:${obj[key]}`);
            }
           console.log(objects.join(', '));
        }
        return {
            create,
            set,
            print
        };
    })();

    for(let cmd of commands){
        cmd = cmd.split(' ');
        let cmdName = cmd.shift();
        cmdProcessor[cmdName](...cmd);
        //console.log(`${cmdName} --> ${[...cmd]}`);
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']

);