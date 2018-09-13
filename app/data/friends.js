var faker = require('faker');
var axios = require('axios');

// Create 100 fake user profiles
var numberOfUsers = 100;
var friends = [];

for (let i = 0; i < numberOfUsers; i++) {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
    friends.push({
      name: [faker.name.firstName(), faker.name.lastName()].join(' '),
      jobTitle: faker.name.jobTitle(),
      phoneNumber: faker.phone.phoneNumber(),
      photo: response.data.message,
      scores: [1,2,3,4,5,6,7,8,9,10].map(d => Math.ceil(Math.random()*5))
    })
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

module.exports = friends;
