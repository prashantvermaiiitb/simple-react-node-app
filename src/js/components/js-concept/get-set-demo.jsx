import React from "react";
import ScrollToBottom from "../content/ScrollToBottom";
/**
 * How to add the fullName property to this object so that we can print the fullName where we need that :
 * 1. add a method called fullName() and call that where we need fullName.
 *      1. this will solve the issue for getting the fullName all we have to do is to call this function() where needed.
 *      2. But another issue is can this be used to set the Value for the fullName : NO
 *      3. More over this is a function call, not being added as a property ?
 *      4. Also the fullName has to be written with function keyword and there are 2 ways to declare the function as
 *          1. as a key: value pair => fullName : function(){}
 *          2. or another shorter syntax will be just fullName(){} like that but still a function that needed to be called.
 *      5. Another thing was to set the fullName we have to add another function and do the manipulation
 * 2. is to use get / set method for the fullName that will make that 'fullName' as the property not the function.
 */
const Person = {
  // firstName: "John",// we cannot create the getter with same name as that of property because this will lead to recursive call
  _firstName: "John",
  lastName: "cena",

  // ? In-case of class this will be used as the constructor
  // constructor(firstName= 'John',lastName = 'cena'){
  //   this._firstName = firstName;
  //   this._lastName = lastName;
  // }
  /**
   * Getter for the firstname
   */
  get firstName() {
    // return this.firstName; // this will be calling getter again and again so we need to meaning fully name the field
    return this._firstName;
  },
  /**
   * setter for the firstname
   */
  set firstName(firstName) {
    this._firstName = firstName;
  },
  /**
   * getting the fullName.
   * used 'get' because we need a function to get the fullName as well
   */
  getFullName() {
    console.log(`Printing fullName : ${this._firstName} ${this.lastName}`); // !using firstname property here for accessing it's value
    // return `${this._firstName} ${this.lastName}`;
    return `${this.firstName} ${this.lastName}`; // ? using the getter for printing the value
  },
  /**
   * setting the fullName.
   * user 'set' because we need a function to set the fullName as well
   * @param {*} value
   */
  setFullName(value) {
    const [firstName, lastName] = value.split(" ");
    // this._firstName = firstName;
    this.firstName = firstName; // ? updated the method for setting the value now
    this._lastName = lastName;
  },
  /**
   * Using getter now for fullName
   * This will be added as the property in the person object.
   */
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  },
  /**
   * setting the fullName value
   */
  set fullName(value) {
    this.setFullName(value);
  },
};

/**
 * Get-Set Component
 * @returns
 */
export const GetSetDemo = () => {
  return (
    <>
      <ScrollToBottom />
      {/* <h1>{Person.getFullName()}</h1> */}
      {/**
       * this will show fullName : 'john cena' for the 1st time
       * while on click on the navigation menu this will show : 'prashant verma'
       */}
      <h2>{Person.fullName}</h2>
      {/**
       * ! this will print the fullName as well but after assinging the 'Prashant Verma'
       */}
      {(Person.fullName = "Prashant verma")}
      {/* {Person.fullName} */}
    </>
  );
};