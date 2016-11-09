let solve = (function () {
    let id = 0;
    let weatherType;
    class Record{
        constructor(temperature,humidity,pressure,windSpeed ){
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;

            if(this.temperature<20 && (this.pressure<700 || this.pressure>900) && this.windSpeed>25)
                weatherType = 'Stormy';
            else
                weatherType = 'Not stormy';

            this.weather = weatherType;
        }

        toString(){
            return `Reading ID: ${this.id}
            Temperature: ${this.temperature}*C
            Relative Humidity: ${this.humidity}%
            Pressure: ${this.pressure}hpa
            Wind Speed: ${this.windSpeed}m/s
            Weather: ${this.weather}`
        }
    }
    return Record

})();
console.log(typeof solve);
let r = solve;
let test = new r(32, 66, 760, 12);
console.log(""+test);
let test2 = new r (32, 66, 760, 12);
console.log(''+test2);