import React from 'react';
/**
 * This file will demonstrate the Decorator functionality.
 * There is a difference between High Order function and Decorator
 * High Order function takes a function and return augmented version of that function. It works well with normal function.
 * Decorator comes in handy with class functions because there usage of the 'this' will be tricky.
 * This file will Demonstrate the usage of the function.
 */

function upperCaseDecorator(target) {
    let initialVal = target.initializer();
    target.initializer = function () {

    };
}

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
        }
    }
}

/**
 * Putting age factoring as well here in the case
 * @param {*} target 
 * @param {*} property 
 * @param {*} descriptor 
 * @returns 
 */
function ageDecorator(target, property, descriptor) {
    return function (...args) {
        // console.log(args);
        target.call(this, args[0], args[1]);
        this.age = args[2] || 56;
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
class Human { }

let humans = [new Human('john', 'doe', 18), new Human('john', 'cena', 69), new Human('jack', 'dorsy')];

/**
 * Exporting Decorated Human component
 * @return
 */
export const DecoHuman = () => {
    return (
        <ul>{humans.map((human, index) => <li key={index}>
            {/* <div style={{ textTransform: 'capitalize', backgroundColor: '#eaea', border: '1px solid red' }}>{human.firstName} ,{human.lastName} has age of {human.age}</div> */}
            <div style={{ textTransform: 'capitalize', backgroundColor: '#eaea', border: '1px solid red' }}>{human.getDescription()}</div>
            <ul>{Object.keys(human).map((key, index) => <li key={index}><pre>{JSON.stringify(Object.getOwnPropertyDescriptor(human, key))}</pre></li>)}</ul>
        </li>)}</ul>
    )
}