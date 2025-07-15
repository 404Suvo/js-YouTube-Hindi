// objects singleton

const tinderUser = new Object()    // this is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false;
/*
console.log(tinderUser);

const regularUser = {
    email: "samayraina@gamil.com",
    fullname: {
        userfullname: {
            firstname: "subhajit",
            lastname: "das"
        }
    }
}

console.log(regularUser.fullname?.userfullname["firstname"]);    // access the nested object and the ? checks is the object is there or not
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
/*
console.log(obj1, obj2);        // method 1
console.log(...obj1, ...obj2);   // method 2 */

const obj3 = Object.assign({}, obj1, obj2)  // method 3 and the empty space is good to put because it acts as a target and the other as a source
console.log(obj3);


const users = [
    {
        id: 1,
        email: "subha@gmail.com"

    },
    {
        id: 2,
        email: "rohan@gmail.com"

    },
    {
        id: 3,
        email: "rimi@gmail.com"

    },
    {
        id: 4,
        email: "priti@gmail.com"

    },
    {
        id: 5,
        email: "avi@gmail.com"

    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));     // keys into arrays
console.log(Object.values(tinderUser));    // values into arrays 
console.log(Object.entries(tinderUser));  // every keys and values forms into arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // checks if the property is available or not






