# 09 Node.js: Professional README Generator

# Description
This README serves as the guide to the application READMEGEN.
READMEGEN is a command-line application that generates a professional README file based on user input.

The task of the assignment was to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). It was useful to revfiew the [Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md) as a reminder of best practice in high-quality professional README documents.

As the application itself generates a README document, this README-instructions.md serves as a guide to its creation.
More typical subdivisions of a README are found in the READMEGEN application.

The application is invoked by using the following command in the terminal:

```
node index.js
```

Here is the User Story associated with assignment and its acceptance criteria.

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.
Note: I will upload revised videos as soon as possible.
They kept timing out.
https://vimeo.com/682678921/b9420fb9f1
https://vimeo.com/682681555/7ca711b5ca
https://vimeo.com/682689687/a53af203dc
https://drive.google.com/file/d/1-hZKohYpORHKZ6gTbTcMN-4QsRjhShLb/view
A final excerpt shows the README.md generated from the console via node index.js. To follow.





* A sample README.md file for a project repository generated using your application.
 See the README.md Sample README generated by READMEGEN application.
 https://github.com/mcleanGit/readmegen/blob/main/README.md


* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
https://github.com/mcleanGit/readmegen
