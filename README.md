# SVG-logo-generator
# Table of Contents
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Testing](#testing)
  + [Walkthrough](#walkthrough-video)

# Description
This code uses JavaScript and Node.js to generate simple SVG logos; this saves the user from having to pay for designs. The user is asked four questions in the command-line:
* 'What 3 letters would you like to appear on your logo?'
* 'What colour would you like your text to be?'
* 'What colour would you like the background?'
* 'What shape would you like your logo?'

These questions are used to gain information from the user about what they would like their own logo to contain  and their desired design. The user must input their answers by typing in the terminal and selecting a shape from the list including a triangle, square and circle. Once the user has answered all questions "Generated logo.svg" will be printed in the command line and a file called 'logo.svg' will be created. This is the SVG logo containing all the desired elements the user has chosen. This can be opened in the browser or can be visable via the Visual studio code extension 'SVG preview' and should be a 300x200 pixel image.

Additionally, the accuracy of this code has been tested with the use of the node extension jest. Code has been written in 'shapes.test.js' and 'svg.test.js' comparing desired outcomes with the actual results when the code is run. If there are any problems with the code and results this will appear in the 'problems' section of the command-line.

# Installation
In order to use this code to generate an SVG logo the user must install node js inquirer and express?.... In order to test this application the node extension jest must be installed.

# Testing
This code is tested using jest. The user must install jest to test the validity of the code. The files 'shapes.test.js' and 'svg.tests.js' contain the code that tests the accuracy of the code by comparing the result to the desired reponse.

# Usage
Once the user has installed all the neccessary packages, they can then run the code in the terminal by entering 'node index.js'. After this step is complete, the user will have to answer a series of prompts. When the user has ansered all of these questions, they should see the text 'Generated logo.svg' appear in the command line. They can then see their generated SVG logo by either viewing on the 'Svg Preview' Visual Studio Code extension or by opening the logo.svg file in a browser.

# Walkthrough Video