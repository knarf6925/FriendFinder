var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiffrence: 1000
        };
        console.log(req.body);
// results of the useres survey post and parse it
        var userData = req.body;
        var userScores = userData.userScores;

        console.log(userScores);

        var totalDiffrence = 0;

        for (var i = o; i < friends.length; i++) {

            console.log(friends[i]);
            totalDiffrence = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDiffrence += math.abs(parseInt(userscores[j])) - parseInt(friends[i].scores[j]);

                if (totalDiffrence <= bestMatch.friendDiffrence) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDiffrence = totalDiffrence;
                }


                }
            

        }

        friends.push(userData);

        res.json(bestMatch);
    });

}
