//mini project starting off point....
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const prompts = require('./prompts');

class CLI {
  constructor() {

  }
  run() {
    return inquirer
      .prompt(prompts)
      .then((responses) => {

        //generate the svg-- jsn
        const svg = this.generateSVG(responses);

        //Render it so all the elements are in the SVG--jsn
        const markup = svg.render();

        //write it to a file --jsn
        return writefile("logo.svg", markup);
      })
      .then(() => console.log('success!'))
      .catch((err) => {
        console.log(err);
        console.log('error');
      });
    }

    generateSVG(options) {
      const logoText = new LogoText(options.text, options.textColour);
      switch (options.shape) {
        case "circle":
        const circle = new Circle(options.shapeColour);
        return new SVG(circle, logoText);
        case "square":
      }
    }
        // sort by priority so that priority tasks come before non-priority tasks
        this.tasks.sort((a, b) =>
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );
        return writeFile(
          join(__dirname, '..', 'output', 'tasks.html'),
          createDocument(this.title, this.tasks)
        );
      })
      .then(() => console.log('Created tasks.html'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addTask() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter task',
        },
        {
          type: 'confirm',
          name: 'priority',
          message: 'Is this a priority task?',
        },
        {
          type: 'confirm',
          name: 'confirmAddTask',
          message: 'Would you like to add another task?',
        },
      ])
      .then(({ text, priority, confirmAddTask }) => {
        this.tasks.push({ text, priority });
        if (confirmAddTask) {
          return this.addTask();
        }
      });
  }
}

module.exports = CLI;