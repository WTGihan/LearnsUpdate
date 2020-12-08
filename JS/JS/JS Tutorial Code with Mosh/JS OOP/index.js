console.log('Welcome JS OOP');
// Object Literals************************************************************

// let can reasign but const can't reasign

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('Object Literals');
    }
};

circle.draw();

// Factories Function***********************************************************
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Factories Function');
        }
        
    };
}

const circleFactories = createCircle(1);
circleFactories.draw();

// Constructor Function*************************************************************
// Constructot Function method should be Capital it is difference between the normal function and constructor function

function CircleConstructor(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Constructor Function');
    }
}

const circleConstructor = new CircleConstructor(1);
circleConstructor.draw();

// Constructor Property*************************************************************
// Every Object has constructor property it reference function that use to create that object

// JS define methods
    // new String(); 
    // new Boolean();
    // new Number();

// Functions are Objects

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('Constructor Function');
//     }
// `);

// CircleConstructor.call({}, 1, 2, 3, 4 ,...)
CircleConstructor.call({}, 1);
CircleConstructor.apply({}, [1, 3, 4]);  // create array of object

const another = new CircleConstructor(1);

// Values and Reference Types*****************************************************

// Value Types
    // Number
    // String
    // Boolean
    // Symbol
    // undefined
    // null

// Reference Types
    // Object
    // Function
    // Array

let x = 10;
let y = x;

x = 20;

let a = { value: 10 };
let b = a;

a.value = 20;

// Primitives are copied by their value
// Objects are copied by their refrence

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// ***************************************

let numberObj = { value: 10 };

function increaseValue(numberObj) {
    numberObj.value++;
}

increaseValue(numberObj);
console.log(numberObj);

// Adding or Removing Properties*************************************************
function CircleTest1(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circleTest1 = new CircleTest1(10);

circleTest1.location = { x: 1 };

const propertyName = 'location';
// const propertyName = 'center-location';  // can also access this type also in []
// circleTest1['location'] = { x: 1 };
circleTest1[propertyName] = { x: 1 };

delete circleTest1[propertyName];

// Enumerating Properites**********************************************************

function CircleTest2(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circleTest2 = new CircleTest2(10);

for (let key in circleTest2) {
    if( typeof circleTest2[key] !== 'function')
        console.log(key, circleTest2[key]);
}

const keys = Object.keys(circleTest2);
console.log(keys);

if ('radius' in circleTest2) 
    console.log('Circle has a radius');

// Abstraction*********************************************************************

// Abstraction mean Hide the details and show essentails

// Private Properties and methods

function CircleTest3(radius) {

    // let color = 'red'; // This hide from the outside
    this.radius = radius;

    let defaultLocation = { x:0, y:0 };

    // Private method
    let computeOptimumLocation = function(factor) {

    }

    this.draw = function() {
        // let x, y;  // When call this function it will create and after that isn't valid

        computeOptimumLocation(0.1);

        // defaultLocation()
        // this.radius  // To access the members of constructor
        console.log('draw');
    }
}

const circleTest3 = new CircleTest3(10);
// circleTest3 can't access computOptimumLocation and defaultLocation with let

// Getters or Setters************************************************************

function CircleTest4(radius) {

    // let color = 'red'; // This hide from the outside
    this.radius = radius;

    let defaultLocation = { x:0, y:0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        // let x, y;  // When call this function it will create and after that isn't valid

        computeOptimumLocation(0.1);

        // defaultLocation()
        // this.radius  // To access the members of constructor
        console.log('draw');
    }
    
    //Object.defineProperty(this, 'name', Object);
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if( !value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}

const circleTest4 = new CircleTest4(10);
// circleTest4.defaultLocation;
// circleTest4.getDefaultLocation();

// circleTest4.defaultLocation = 1; // this give errors because of set in defaultLocation

// Exercise **************************************************************************

function StopWatch() {

    let starttime, endtime, running, duration = 0;
     
    this.start = function() {

        if(running)
            throw new Error('Stopwatch has already started.');
        
        running = true;

        starttime = new Date();
        // console.log(this.starttime);
    }

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started');
        
        running = false;
        endtime = new Date();

        const seconds = (endtime.getTime() - starttime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        starttime = null;
        endtime = null;
        duration = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get:function() {
            return duration;
        }
    });


}

const sw = new StopWatch();

