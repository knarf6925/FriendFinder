
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var friends = [
            {
                name:"Ahmed",
                photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                scores:[
                    "5",
                    "1",
                    "4",
                    "4",
                    "5",
                    "1",
                    "2",
                    "5",
                    "4",
                    "1"
                  ]
              },
            {
                "name":"John",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "2",
                    "4",
                    "3",
                    "3",
                    "1",
                    "3",
                    "5",
                    "2",
                    "4",
                    "1"
                  ]
              },
            {
                "name":"Sarah",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "5",
                    "2",
                    "2",
                    "1",
                    "5",
                    "1",
                    "3",
                    "5",
                    "4",
                    "5"
                  ]
              },
              {
                "name":"Chris",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "1",
                    "4",
                    "3",
                    "3",
                    "5",
                    "2",
                    "2",
                    "3",
                    "3",
                    "1"
                  ]
              },
              {
                "name":"Derick",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "5",
                    "1",
                    "1",
                    "4",
                    "1"
                  ]
              },
              {
                "name":"OJ",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "2",
                    "2",
                    "1",
                    "5",
                    "5",
                    "5",
                    "1",
                    "2",
                    "4",
                    "5"
                  ]
              },
              {
              "name":"Mike",
                "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "scores":[
                    "1",
                    "2",
                    "1",
                    "1",
                    "5",
                    "3",
                    "1",
                    "2",
                    "5",
                    "4"
                  ]
                },
              
              {
                "name":"Bobby",
                  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                  "scores":[
                      "1",
                      "2",
                      "1",
                      "1",
                      "5",
                      "3",
                      "1",
                      "2",
                      "5",
                      "4"
                    ]
                  }
                ];
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };
      console.log(req.body);
      console.log(friends);
      var userData = req.body;
      var userScores = userData.scores;
      var totalDifference = 0;
     
      friends.push(userData);
  
      for (var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        for (var j = 0; j < friends[i].scores[j]; j++) {
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
          if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
          }
          console.log(totalDifference);
        }
      }
  
      
      res.json(bestMatch);
  
    });
  
  };
  
  
  
