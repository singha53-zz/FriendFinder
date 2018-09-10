var path = require('path');

module.exports = function(app) {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  })

  // if no other path is define send user to home page
  app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  })
}