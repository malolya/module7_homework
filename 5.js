class ElectronicDevices {
    constructor(name, power)
    {
        this.power = power,
    this.name = name,
    this.included = false
    }
    getIncluded()
    {
        this.included = true;
    console.log (`${this.name} включен в розетку`);
    }
    getPower()
    {
        return this.included ? this.power : 0;
    }
}

class ElectronicDevicesOff {
constructor(name, power, workTime) {
    this.power = power,
    this.name = name,
    this.workTime = workTime
}
getIncluded() {
    console.log (`${this.name} выключен из розетки ${this.workTime} часа`);
    this.included = false;
}
}

const tv = new ElectronicDevices('tv', 20);
const computer = new ElectronicDevices('computer', 30);
const kettle = new ElectronicDevicesOff('kettle', 10, 2);

tv.getIncluded();
computer.getIncluded();
kettle.getIncluded()

console.log('общее потребление мощности включенных приборов '+(tv.getPower() + computer.getPower()));