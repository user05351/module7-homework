
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name,
        this.power = power,
        this.enabled = false
    }
    
    getPower() {
        return this.enabled ? this.power : 0;
    }
    
    toggleEnable() {
        this.enabled = !this.enabled
    }


    getInfo() {
        return ("Прибор ${this.name} - ${this.enabled ? 'включен' : 'выключен'}, потребляемая мощность: ${this.getPower()} W");
    }
};


class Drill extends ElectricalAppliance {
    constructor(power,  name) {
        super(name, power);
        this.power = power,
        this.name = name
    }
};


class AngleGrinder extends ElectricalAppliance {
    constructor(power, name) {
        super(name, power);
        this.power = power,
        this.name = name
    }
};


function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
};


const drill = new Drill(139, 'Drill');
const angleGrinder = new AngleGrinder(95,'Angle Grinder');


console.log(drill.getInfo());
drill.toggleEnable();
console.log(drill.getInfo());


console.log(angleGrinder.getInfo());
angleGrinder.toggleEnable();
console.log(angleGrinder.getInfo());


console.log('Общее потребление электроприборов ${sum([drill, angleGrinder])} W');
