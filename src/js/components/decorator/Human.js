import React from 'react';
/**
 * This file will demonstrate the Decorator functionality.
 * There is a difference between High Order function and Decorator
 * High Order function takes a function and return augmented version of that function. It works well with normal function.
 * Decorator comes in handy with class functions because there usage of the 'this' will be tricky.
 * This file will Demonstrate the usage of the function.
 */

/**
 * Updating function definition for the description function.
 * @param {*} target 
 * @param {*} propertyName 
 * @param {*} descriptor 
 * @returns 
 */
function descriptionDecorator(target, propertyName, descriptor) {
    // target[propertyName]

    // console.log('target...', target);
    // console.log('propertyName...', propertyName);

    //! arrow function will be giving error so used target.age which was not able to get us 'this' as well
    //! so used the the normal function only.
    // descriptor.value = () => {

    descriptor.value = function () {
        let styleBlock = { display: 'block' };
        return (
            <div style={{ textTransform: 'none' }}>
                <span style={styleBlock}>My name is <span style={{ fontWeight: 'bold' }}>({this.firstName}, {this.lastName})</span>.</span>
                <span style={styleBlock}>I belong to <span style={{ fontWeight: 'bold' }}>{this.species}</span>.</span>
                <span style={styleBlock}>I am <span style={{ fontWeight: 'bold' }}>{this.age}</span> year(s) old.</span>
            </div>
        )
    }
    return descriptor;
}
/**
 * Static function decorator, this will be used for getting the version
 * @param {*} target 
 * @param {*} propertyName 
 * @param {*} descriptor 
 * @returns 
 */
function staticDecorator(target, propertyName, descriptor) {
    descriptor.value = () => '2.0.0'
    return descriptor;
}

/**
 * This is just returning a new class and adding the species for the Person Object
 * @param {*} species 
 * @returns 
 */
function speciesDecorator(species) {
    return function (target, propertyName, descriptor) {
        return class extends target {
            constructor(firstName, lastName, age) {
                super(firstName, lastName, age);
                this.species = species;
            }
            @descriptionDecorator
            getDescription() {
                return `${this.firstName}, ${this.lastName} has ${this.age} and is ${this.species}`;
            }
            @staticDecorator
            static getVersion() {
                return '1.0.1';
            }
            /**
             * Sample method defined to show it's existence, it will be on the instance members 
             * not in the Constructor neither on the prototype.
             */
            sampleMethod = function sampleMethodInEachObject() {
                console.log('Sample: check where it lives!!');
            }
        }
    }
}

// function defaultAgeDecorator(age) {
//     console.log('Trying to decorate the decorator ...', age);
//     return function ageDecorator(target, propertyName, descriptor) {
//         return descriptor;
//     }
// }

/**
 * Putting age factoring as well here in the case
 * https://stackoverflow.com/questions/41707191/javascript-descriptors-enumerable-configurable-writable-are-not-true-by-default
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @param {*} target 
 * @param {*} property 
 * @param {*} descriptor 
 * @returns 
 */
//! this should be checked on JS fiddle because this is not working here.
// @defaultAgeDecorator(1000)
function ageDecorator(target, property, descriptor) {
    return function (...args) {
        // console.log(args);
        target.call(this, args[0], args[1]);

        // ? Method 1  : to create the age property
        //! if property defined by use of this method then (writable : true / configurable : true / enumerable : true)
        //* Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true}.
        // this.age = args[2] || 56;

        //? Method 2 : to create the age property, this will have impact on the descriptors
        //! default value of enumerable is FALSE and all others are also false {value: 18, writable: false, enumerable: false, configurable: false}
        //! Also if you could see if we do not mention enumerable here then it will not be listed in the for loop for showing the properties
        // Object.defineProperty(this, 'age', { value: args[2] || 56 });//enumerable is false so will not appear
        // console.log(Object.getOwnPropertyDescriptor(this, 'age'));

        //? Method 3: default property value for the writable and configurable are 'false'
        Object.defineProperty(this, 'age', { value: args[2] || 56, enumerable: true });//enumerable is true so will appear now
        // console.log(Object.getOwnPropertyDescriptor(this, 'age'));

        // Object.defineProperty(this, 'age', { value: args[2] || 56, writable: false, configurable: false }); // updating the value of the property
    }
}

/**
 * Dynamically adding function to the Prototype of the class.
 * ? Important to see is that we are retuning the target.
 * @param {*} param0 
 */
function addMethodDecorator({ name, callback }) {
    return function (target, propertyName, descriptor) {
        console.log('Inside addMethodDecorator : target for the class', target);
        console.log('Inside addMethodDecorator : propertyName target for the class', propertyName);
        console.log('Inside addMethodDecorator : descriptor for the class', descriptor);

        target.elements.push({
            kind: 'method',
            key: name,
            placement: 'prototype',
            descriptor: {
                value: callback,
                writable: false,
                configurable: false,
                enumerable: false
            }

        });
        //! important to note that we are returning the target because this has to be a constructor or class.
        return descriptor;
    }
}

/**
 * * decorating the Legacy Human being with First Name and Last name
 * @param {*} target 
 * @param {*} propertyName 
 * @param {*} descriptor 
 * @returns 
 */
function nameDecorator(target, propertyName, descriptor) {
    // console.log(target);
    return function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
}

/**
 * ! here trying to add the property in the function() was giving error so class object was being given.
 */
@speciesDecorator('HomoSapien')
@ageDecorator
@nameDecorator
class Human {
    /**
     * This will not be creating any function
     * You can comment this to see because the ultimate Class has been returned by the ageDecorator there we have added the version
     * @returns 
     */
    static getVersion() {
        return '1.0.0';
    }
}

let humans = [new Human('john', 'doe', 18), new Human('john', 'cena', 69), new Human('jack', 'dorsy')];

/**
 * This will be the decorator function for the uppercase the string properties where applicable
 * @param {*} target 
 */
function upperCaseDecorator(target, propertyName, descriptor) {
    // console.log('-----------');
    // console.log("🚀 ~ file: Human.js ~ line 156 ~ upperCaseDecorator ~ target", target)
    // console.log("🚀 ~ file: Human.js ~ line 156 ~ upperCaseDecorator ~ propertyName", propertyName)
    // console.log("🚀 ~ file: Human.js ~ line 156 ~ upperCaseDecorator ~ descriptor", descriptor)
    // console.log('-----------');

    //get the initial value 
    let initialVal = descriptor.initializer();

    //update the initialiser
    descriptor.initializer = function () {
        return initialVal.toUpperCase();
    };
    return descriptor;
}
/**
 * Sample class for the UpperCase Decorator for the property.
 * ! this is not working has to be seen and checked again.
 */
// @addMethodDecorator({
//     name: 'addAddress',
//     callback: function (addressObj) {
//         // ? will this property be pointing to the prototype object or normal object
//         this.address = addressObj;
//     }
// })

function validator(fn) {
    // console.log('inside validator ', fn);
    return function (...args) {
        if (args.length !== fn.length) {
            throw new Error('Only submit required number of parameters.');
        }
        const validArgs = args.filter(argument => Number.isInteger(argument));
        if (validArgs.length < fn.length) {
            throw new TypeError('Arguments cannot be a non-Integer.');
        }
        return fn(...args);
    };
}
/**
 * !correct this
 * Important thing to consider here is that 'initializer' has to be used 
 * because these are not residing in the prototype Object.
 * ! questionable existence for this
 * @param {*} target 
 * @param {*} propertyName 
 * @param {*} descriptor 
 * @returns 
 */
// function timer(target, propertyName, descriptor) {
//     // console.log("inside Timer decorator before", descriptor);
//     let initialFunction = descriptor.initializer;
//     // console.log(descriptor.value());
//     descriptor.initializer = function () {
//         // console.log('Logging execution of the function', propertyName);
//         console.time(`Time spent in executing '${propertyName}' is:`);
//         let val = initialFunction();
//         console.timeEnd(`Time spent in executing '${propertyName}' is:`);
//         return val;
//     };
//     // console.log(descriptor);
//     //! if we return the descriptor overriding was not happening so with STATIC here returning target in itself.
//     return descriptor;
// }

class User {
    @upperCaseDecorator
    firstName = 'default_first_name';
    @upperCaseDecorator lastName = 'default_last_name';
    @upperCaseDecorator static middleName = 'default_middle_name';

    // @timer
    getFullName = function () {
        return `${this.firstName} ${User.middleName} ${this.lastName}`;
    }
    // @timer
    static calculateProduct = function (a, b) { return a * b; };

    constructor(firstName, lastName) {
        if (firstName) this.firstName = firstName;
        if (lastName) this.lastName = lastName;
    }
}

let dummy = new User();
console.log('dummy...', dummy);
console.log("🚀 ~ file: Human.js ~ line 183 ~ descriptionDecorator ~ dummy", dummy.getFullName())

let user = new User('john', 'doe', 'banti');
console.log('user ...', user);
console.log("🚀 ~ file: Human.js ~ line 183 ~ descriptionDecorator ~ user", user.getFullName());

console.log('See where properties are living...', new Human('Robo', 'cop'));
let multiply = validator(User.calculateProduct);
// console.log('multiply...', multiply);
console.log(multiply(6, 8));
// console.log(multiply(8)); // will give Error in the console - for insufficient arguments
// multiply(3, null); //Type error for the parameter
// console.log(multiply('', 8)); // TypeError for function
// console.log(multiply(6, 8, 7)); // for extraneous parameter

/**
 * Exporting Decorated Human component
 * @return
 */
export const DecoHuman = () => {
    return (
        <>
            <span>Current version is {Human.getVersion()}</span>
            <ul>{humans.map((human, index) => <li key={index}>
                {/* <div style={{ textTransform: 'capitalize', backgroundColor: '#eaea', border: '1px solid red' }}>{human.firstName} ,{human.lastName} has age of {human.age}</div> */}
                <div style={{ textTransform: 'capitalize', backgroundColor: '#eaea', border: '1px solid red' }}>{human.getDescription()}</div>
                <ul>{Object.keys(human).map((key, index) => <li key={index}><pre>{JSON.stringify(Object.getOwnPropertyDescriptor(human, key))}</pre></li>)}</ul>
            </li>)}</ul>
        </>
    )
}