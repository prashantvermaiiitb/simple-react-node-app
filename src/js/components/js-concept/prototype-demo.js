/**
 * Creating the constructor function for the object
 * JS Engine will create 2 objects here:-
 * 1. Function Object, this will have 'prototype' property pointing to the prototype object
 * 2. ProtoType Object, this will have __proto__ property that will be pointing to the protoType object of the base class
 * @param {*} model_no
 */

/**
 * ? Mobile will be pointing to the Mobile function object.
 * ? Mobile.prototype will be pointing to the Mobile.prototype object.
 * @param {*} model_no
 */
// const Mobile = function (model_no) {
function Mobile(model_no) {
  this.model = model_no;
  this.price = 3000;
}

var samsung = new Mobile("galaxy");
var nokia = new Mobile("3310");

samsung.color = "white";
document.write(samsung.color);

console.log(Mobile); // will print the body of the Mobile function
