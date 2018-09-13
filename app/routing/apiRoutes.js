var pcor = require('node-correlation');
var friends = require('../data/friends');

module.exports = app => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  app.post('/api/friends', (req, res) => {
    var user = {
      name: req.body['name'],
      jobTitle: req.body['jobTitle'],
      phoneNumber: req.body['phoneNumber'],
      photo: req.body['photo'],
      scores: req.body['scores[]']
    };

    // match user to friend in database with the strongest correlation
    var newFriend = findFriend((user = user), (db = friends));

    // add to user to friends DB
    friends.push(user);
    res.json(newFriend);
  });
};
function findFriend(user, db) {

  var cors = db.map(friend => {
    return pcor.calc(user.scores.map(d => +d), friend.scores);
  });
  match = db[cors.indexOf(Math.max(...cors))]
  match.cor = Math.max(...cors)
  return match
}
