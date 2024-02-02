//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(maximumPassengers, passengers, numberOfWheels, maxSpeed, fuel, started) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.started = false
    }
    
    loadPassenger(numOfPassengers) {
        if (numOfPassengers <= this.maximumPassengers) {
            numOfPassengers += 1
        } else if (numOfPassengers == this.maximumPassengers || numOfPassengers > this.maximumPassengers) {
            console.log('cannot add more people!');

        }
        return numOfPassengers
    }

    start() {
        if (this.started != true && this.fuel > 0) {
            this.started = true
        } else if (this.fuel = 0) {
            this.started = false
        }
    }

    scheduledService(miles) {
        if (miles > 30000) {
            console.log('time for service');
        }
    }
}

let MercurySedan = new Car(5, 5, 4, 130, 300, false)

Car.start()
Car.loadPassenger(5)
Car.scheduledService(49999)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
