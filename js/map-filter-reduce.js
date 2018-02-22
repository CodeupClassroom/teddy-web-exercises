"use strict";
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// Use .map to create an array of strings where each element is a user's email address

// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const polyglots = users.filter(function(user) {
   if(user.languages.length >= 3) {
       return user;
   }
});

const emails = users.map(user => {
   return user.email;
});


let userObject = users.reduce(function(accumulator, object) {
    accumulator[object.id] = object;
    return accumulator;
}, {});

console.log(userObject);

const hasThreeLanguages = users.filter(({email, languages}) => {
    return languages.length >= 3
});

console.log(hasThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address
const userInfo = users.map(({ name, email, languages }) => {
    return `${name} knows ${languages.join(",")} and you can email them at: ${email}`;
});


const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

// PROBLEM 2 - create array of user objects based on the customers array of objects
// (each user object should just have name and age properties))

const customerArray = customers.map(({ name, age }) => {
    return {
        name,
        age,
    };
});

console.log(customerArray);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// // containing the same properties as the objects on the customers objects

const civilServants = customers.filter(({occupation}) => {
    return occupation == "Teacher" || occupation == "Police Officer";
});


const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// Create a single object with properties
// containing arrays of all names, genders, and ages
/*
var output = {
    "names": ["Bob", "Summer", "Karen"],
    "genders": ["male", "female"],
    "ages": [29, 10, 32]
};*/

const output = family.reduce((accumulator, person) => {
    if(typeof accumulator.names === "undefined") {
        accumulator.names = [];
    }
    if(typeof accumulator.ages === "undefined") {
        accumulator.ages = [];
    }
    if(typeof accumulator.genders === "undefined") {
        accumulator.genders = [];
    }
    accumulator.names.push(person.name);
    accumulator.ages.push(person.age);
    accumulator.genders.push(person.gender);

    return accumulator;
}, {});

console.log(output);

// const output = {
//     names: family.map(obj => obj.name),
//     genders: family.map(obj => obj.gender),
//     ages: family.map(obj => obj.age)
// };

// - Calculate the average age of family members
const averageAge = family.reduce((accumulator, person) => {
   accumulator += person.age;
   return accumulator;
}, 0) / family.length;

console.log(averageAge);

// - Create an array of family objects without the age property
// - Create an array of all minors
var minors = family.filter(({age}) =>{
    return age < 18;
});

console.log(minors);
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
var femaleFamily = family.filter(({gender}) => {
   return gender === "female";
});
console.log(femaleFamily);

// PROBLEM 1
// Use .filter to create an array of user objects
// where each user object has at least 3 languages in the languages array.

    const moreLanuageUsers = users.filter(({ languages }) => {
        return languages.length > 2;
    });

    console.table(moreLanuageUsers);

    // expected output...
    // const moreLanguageUsers = [
    //     {
    //         id: 2,
    //         name: 'luis',
    //         email: 'luis@codeup.com',
    //         languages: ['java', 'scala', 'php'],
    //     },
    //     {
    //         id: 4,
    //         name: 'fernando',
    //         email: 'fernando@codeup.com',
    //         languages: ['java', 'php', 'sql'],
    //     },
    //     {
    //         id: 5,
    //         name: 'justin',
    //         email: 'justin@codeup.com',
    //         languages: ['html', 'css', 'javascript', 'php'],
    //     },
    // ];




// PROBLEM 2
// Use .map to create an array of strings where each
// element is a user's email address

    const emails = users.map(({ email }) => email);
    console.log(emails);

    // expected output...
    // const emails = ["ryan@codeup.com", "zach@codeup.com", "luis@codeup.com", "fernando@codeup.com", "justin@codeup.com"];


// PROBLEM 3
// Use .reduce to transform the array into an object
// where the object's keys are ids and the values are objects that represent each user

    const userObject = users.reduce((accum, user) => {
        accum[user.id] = user;
        return accum;
    }, {});

    console.log(userObject);

    // expected output
    // const userObject = {
    //   1:{
    //       id: 1,
    //       name: 'ryan',
    //       email: 'ryan@codeup.com',
    //       languages: ['clojure', 'javascript']
    //   },
    //   2:{
    //       id: 2,
    //       name: 'luis',
    //       email: 'luis@codeup.com',
    //       languages: ['java', 'scala', 'php']
    //   },
    //   3:{
    //       id: 3,
    //       name: 'zach',
    //       email: 'zach@codeup.com',
    //       languages: ['javascript', 'bash']
    //   },
    //   4:{
    //       id: 4,
    //       name: 'fernando',
    //       email: 'fernando@codeup.com',
    //       languages: ['java', 'php', 'sql']
    //   },
    //   5:{
    //       id: 5,
    //       name: 'justin',
    //       email: 'justin@codeup.com',
    //       languages: ['html', 'css', 'javascript', 'php']
    //   }
    // };




