const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});



//(1/3) ways to do this, all work!
//(const generatePage = () => 'Name: Jane, Github: janehub'

//console.log(generatePage());)

//(2/3) ways to do this, all work!
//(const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`

//console.log(generatePage('Jane', 'janehub'));)

//(3/3) ways to do this, all work!
//(const generatePage = (userName, githubName) => {
  //return `
    //Name: ${userName}
    //Github: ${githubName}
  //`;
//};

//console.log(generatePage('Jane', 'janehub'));)