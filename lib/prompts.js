//An array of questions the user will be prompted with in the terminal. 
//This is on a seperate javascript file so that the code is shorter easier to read and better organised.
const prompts = [
    {
        type: 'input',
        message: 'What 3 letters would you like to appear on your logo?',
        name: 'text',
      },
    {
      type: 'input',
      message: 'What colour would you like your text to be?',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'What colour would you like the background?',
      name: 'shapeColor',
    },
    {
      type: 'list',
      message: 'What license does this project use?',
      name: 'shape',
      choices: ['triangle', 'circle', 'square'],
    },
];

module.exports = prompts;
//it is exported so that it can be used and referred to in the index.js