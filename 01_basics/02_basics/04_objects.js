// objects singleton
/*
const tinderUser = new Object()    // this is a singleton object

const tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false;

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
const obj3 ={obj1, obj2}

console.log(obj1, obj2);
console.log();


