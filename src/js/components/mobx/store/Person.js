/**
 * This is the Person data store for the Mobx application.
 * assigned certain attributes to the person objects.
 * this store should be observable by other objects and changes in this store should trigger
 * proper UI updates.
 * We have not kept any actions in this store just data
 */

import { observable } from "mobx";

//todo : making an API call for getting the list of the persons
export const PersonStore = observable([
    { id: 1, name: 'john', age: 45, gender: 'male', icon: '', efficiency: 3 },
    { id: 2, name: 'jenny', age: 25, gender: 'female', icon: '', efficiency: 2 },
    { id: 3, name: 'jacky', age: 30, gender: 'male', icon: '', efficiency: 5 },
    { id: 4, name: 'marie', age: 20, gender: 'female', icon: '', efficiency: 5 },
]);

typeof window !== 'undefined' && (window.personStore = PersonStore);
/**
 * You can check the new person addition here in the person store as well
 */