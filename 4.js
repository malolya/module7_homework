//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

function ElectronicDevices(name, power) {
    this.power = power,
    this.name = name,
    this.included = false
}

ElectronicDevices.prototype.getIncluded = function() {
    this.included = true;
    console.log (`${this.name} включен в розетку`);
}
ElectronicDevices.prototype.unplug = function () {
    this.included = false;
    console.log (`${this.name} выключен из розетки`);
};

ElectronicDevices.prototype.getPower = function() {
    return this.included ? this.power : 0;
  }
  function ElectronicDevicesOff(name, power, workTime)
  {
    this.power = power,
    this.name = name,
    this.workTime = workTime
  }

const tv = new ElectronicDevices('tv', 20);
const computer = new ElectronicDevices('computer', 30);
const kettle = new ElectronicDevicesOff('kettle', 10, 2);

ElectronicDevicesOff.prototype.getIncluded = function() {
    console.log (`${this.name} выключен из розетки ${this.workTime} часа`);
    this.included = false;
}

tv.getIncluded();
computer.getIncluded();
kettle.getIncluded()

console.log('общее потребление мощности включенных приборов '+(tv.getPower() + computer.getPower()));

