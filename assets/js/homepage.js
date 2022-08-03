var getUserRepos = function (user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + "jonathonb1" + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });
};

getUserRepos();

// 6.2.1