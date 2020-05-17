---
RomCom
---
Erin Untermeyer and Brigette Doelp Pair-Project Mod 1

## Objective

* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Understand event bubbling and use event delegation on dynamic elements
* Begin to understand how to write effective, clean HTML & CSS

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

## Timeline

Our focus is on complete understanding of the code we write and implemenation of concepts.  We agreed after each iteration we would make an effort to refactor so we can submit clean, DRY code.  The following is our progression as the project advanced.

## Progression

* 5/12/2020 - Wrote the DTR, made rough timeline, reviewed project goals and rubric.
* 5/13/2020 - Reviewed Iteration 0, completed pseudocode, wrote skeleton for Random Cover function, listed takeaways for independant research.
* 5/14/2020 - Discussed research, created variables to access HTML, wrote an event listener for page load, wrote functions to generate random cover.  At this point, we required more research to get function working.  Made list of takeaways for independant research.
* 5/15/2020 - Removed event listener as it was not needed.  Got random cover on page load working.  Enabled "Show New Random Cover" button by moving variables created to generate random cover from global variables to inside the display cover function.  Reviewed Iteration 2 and made list of takeaways for independant research.
* 5/16/2020 - Created more variables to access HTML, added event listener, wrote function to toggle from home view to form page.  Made further progress with enabling page navigation.  Came up with two solutions for enable all buttons and independantly researched each.
* 5/17/2020 - Updated README, reviewed DTR.  Discussed independant research and agreed to do some more prior to next meeting to complete Iteration 2.

## Resources

For this project we will use GitHub to manage workflow and Atom as our text editor.  For resources we will use primarily MDN and stack overflow.  We will make use of our mentors and classmates for feedback and understanding as well as use pseudocoding and the rubber duck method.

## Project outcome

## Rubric

This rubric should serve as a guide for students as they progress through the project, as well as to self-evaluate. Instructors will use it to evaluate the project at its final due date/time, and provide detailed feedback so students know what areas to focus on in future projects.

Scores land in a range between 1 and 4. Below is a breakdown of what those numbers represent.

* **4 (exceptional)** - went beyond set learning goals; did self-teaching to go above and beyond in this area
* **3 (proficient)** - exactly on track! you're where you need to be in this area! great work!
* **2 (trailing)** - a little behind where we want to see you right now; in a good place to build familiarity/competency in this area; study in this area to level up and grow
* **1 (dragging)** - significantly behind where we want to see you; major growth needs to be shown in this area; set up a pairing session with an instructor as soon as possible

To earn a given score, an application must meet the requirements listed in that score explanation and all scores lower.

### Professionalism

* **4:** 
  - Team uses a PR template
  - Team habitually conducts thorough code reviews in the GitHub GUI to document the progress of the application
  - Team has sought out code reviews from one or more mentors
  - README is well formatted and descriptive with screenshots or gifs of the application in action
* **3:** 
  - Commits are atomic and frequent, effectively documenting the evolution/progression of the application
  - Commit messages are consistent, descriptive, and concise
  - Team uses PRs to screen/verify code before adding it to the master branch
  - There is no more than a 10% disparity in code contributions between teammates
  - README is well formatted and gives good context about the project, including links to both contributors' GitHub profiles, and to the deployed GitHub Pages site
* **2:** 
  - Commits are large and do not effectively communicate the progression of the application
  - Team uses PRs but do not review code before merging into the master branch
  - All teammates can speak to the purpose and functionality of any/every line of code
  - There is a 20% disparity in code contributions between teammates
  - README is brief and does not provide context for the project
* **1:** 
  - Teammates do not understand the purpose and functionality of every line of code
  - Some commits are pushed directly to the master branch
  - PRs are used inconsistently
  - There is a 50% disparity in code contributions between teammates
  - There is no README, or README is insufficient

### JavaScript Style & Implementation

* **4:** 
  - There are no global variables aside from query selectors, `currentCover` and `savedCovers`.
  - All functions strictly adhere to [SRP](http://knnthvu.weebly.com/srp-and-dry.html) and - with few exceptions - are around 10 lines of code or less
  - All functions and variables are semantically and concisely named
  - Uses logical operators instead of if/else statements where applicable
  - Code contains no antipatterns
* **3:** 
  - Application uses event delegation correctly on dynamic elements
  - Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and observe [SRP](http://knnthvu.weebly.com/srp-and-dry.html)
  - Functions make use of parameters and arguments in order to be more dynamic
* **2:** 
  - Properly uses parameters and arguments when used
  - Uses named functions instead of anonymous functions as event handlers in event listeners
  - Correctly uses if/else statements to handle multiple paths of logic & error handling
* **1:** 
  - Crafts JS according to the [Turing JS style guide](https://github.com/turingschool-examples/javascript/tree/master/es5)


### Functional Expectations

Functionality is the least important piece of the rubric. It's included because it is another benchmark to gauge proficiency. However, you should not pursue functionality at the expense of code quality or the learning/growth of all team members.

This means, we DO NOT want to see:
- Code that completes iterations but is sloppy
- One or both team members do not understand every single line of code
- One or both team members skips the problem solving process (pseudocoding, talking out the problem, articulating, planning) in the pursuit of completing functionality

* **4:** Applications completes one or more of the extensions without bugs
* **3:** Application completes all the expectations of Iteration 4 without bugs
* **2:** Application completes all the expectations of Iteration 3 without bugs
* **1:** Application completes all the expectations of Iteration 2 without bugs
