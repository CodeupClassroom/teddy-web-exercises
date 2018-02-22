"use strict";

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




