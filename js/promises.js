"use strict";

const wait = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your promise resolved after " + timer + " milliseconds.");
        }, timer);
    });
};

wait(1000).then((data) => console.log(data));
wait(2500).then((data) => console.log(data));
wait(3300).then((data) => console.log(data));

function getDateOfLastCommit(username) {
    let dates = [];

    fetch('https://api.github.com/users/' + username + "/repos?per_page=100", {headers: {'Authorization': 'token 3c1ac3cd112d394e2094221c4fdf6cc83a80a366'}})
        .then(response => response.json())
        .then(repositories => {
            repositories.map(repo => {
               dates.push(repo.updated_at);
            });
            dates.sort();
            document.querySelector('span').innerText = new Date(dates[dates.length -1]);
        });
}

getDateOfLastCommit("ryanorsinger");

