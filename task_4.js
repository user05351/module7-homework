
function ElectricalAppliance(name, power) {
    this.name = name,
    this.power = power,
    this.enabled = false
};


function Drill(name, power) {
    this.name = name,
    this.power = power,
    
    this.text = function () {
        console.log('${this.name} has: ${this.power} W')
    }
};


Drill.prototype = new ElectricalAppliance();


function AngleGrinder(name, power) {
    this.name = name,
    this.power = power
};


AngleGrinder.prototype = new ElectricalAppliance();


ElectricalAppliance.prototype.Enabled = function () {
    console.log(this.name + ' is on');
    this.enabled = true;
};


ElectricalAppliance.prototype.getPower = function () {
    return this.enabled ? this.power : 0;
};


const drill = new Drill('Drill', 75);
const angleGrinder = new AngleGrinder('Angle Grinder', 90);


drill.Enabled();
angleGrinder.Enabled();


function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
};


console.log(sum([drill, angleGrinder]));
