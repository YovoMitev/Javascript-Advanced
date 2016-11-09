function solve(input) {
    let processor = (function () {
        let result = [];
        return {
            add:(str) => result.push(str),
            remove:(str) => {result = result.filter(w => w != str)
            },
            print: () => { console.log(result.join(','))}
        }
    })();
    for(let line of input){
        line = line.split(' ');
        processor[line[0]](line[1]);
        //line[0] -> function line[1] -> argument
    }
}
(solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']));