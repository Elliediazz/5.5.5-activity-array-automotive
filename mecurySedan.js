//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

// Directions :
// Create a Car class that extends the Vehicle class (located in the vehicleBaseClass.js).
// ********  Syntax: class ChildClass extends ParentClass {} **********
// Add a constructor.
// ******** calls the parent class' constructor ********
// Add the super keyword to call the parent class constructor.
// ******** In derived classes, super() must be called before you can use 'this'. Leaving this out will cause a reference error. ********
// Add the properties listed in the Properties chart above.
// Add the methods with psuedo logic listed in the Methods chart above.

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassenger = 6
    this.passenger = 0
    this.numberofWheels = 4
    this.maxSpeed = 200
    this.fuel = 100
    this.scheduleService = false
    }

    loadPassenger (num) {
        if (this.passenger < this.maxPassenger) {
            if ((num + this.passenger) <= this.maxPassenger) {
                this.passenger = num; 
                return this.passenger
            } else {
                console.log ( this.model + '' + this.make + "doeds not have enough space to take all the passengers.");
            }
        } else {
            console.log (this.model + '' + this.make + "is full.")
        }
    }

    start () {
        if (this.fuel > 0) {
            //Why include the consle.log? 
            console.log("engine has started.");
            return this.startEngine==true
        } else {
            console.log ("no fuel");
            return this.startEngine == false 
        }
    }

    scheduleService (mileage){
        if (this.milage > 3000) {
            console.log ("Maintenance required")
            this.scheduleService = true
            return this.scheduleService 
        }
    }
}
