
# Project Title

Week 10 Recap task which involves React, CSS Modules, UI Libraries (I use [Ant Design](https://ant.design/)) for this Project) and authentication with [Auth0](https://auth0.com). The Project is also hosted on Netlify and this documentation is made with [readme.so](https://readme.so).

---
## Demo

**See the Demo at the link below**

[Demo](https://suspicious-banach-57c746.netlify.app/)

---
## Installation

The project can be forked and cloned down from this repo using [repo link](https://github.com/SchoolOfCode/w10_recap-tasks-burmanp.git)

```bash
  cd your-project
  git clone https://github.com/SchoolOfCode/w10_recap-tasks-burmanp.git
  npm i
```

---
## Components
*Below is how the components are structured.*
*Please see the rel.drawio file for the components and props tree*
- App
  - LoginButton
- Main
  - LogoutButton
  - Articles({ title, paragraphs, comments })
    - Comments({comments})



---












---

---

---

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6848100&assignment_repo_type=AssignmentRepo)
# Weekly Recap Tasks

## Feedback

### Peer feedback

Feedback is a vital part of continual improvement and the hero's journey of growth you're on on this course. We're here to support each other to grow on this bootcamp journey, so keep this in mind when you write honest, constructive feedback. This is important for the receiver of the feedback as well as the giver - learning to give feedback is a skill that you'll use throughout your career in tech.

Please click [here](https://forms.gle/BJWLNvSgKsp9rkbF8) to fill out the peer review form for your partner this week. Please fill it out for each person you've worked with.

### Coaching feedback

If you didn't complete the coaching feedback survey about your recent 1:1s with your coach earlier in the week, please [click here](https://forms.gle/rwcyW9bTbVqX4nNz6) to do so.

## Tasks

In this repository, you'll find an app that uses content from the array of posts in [libs/articles](task2/src/libs/articles.js). It's currently all in one component.

👉 Use component-based thinking to break the code in the `App` component into separate components. Use draw.io's VS Code integration (or an image from another diagramming software) to diagram out your components and their states and props and include your diagram in this repo before refactoring the code.

👉 Style the components you've just made using **CSS modules**.

👉 Use the **component library** of your choice to replace one or more of the existing components and/or add one or more new components to the application.

👉 Use Auth0 to add simple **authentication** to your app so that users must be logged in to view the articles.

👉 **Deploy** your front end application, and include the URL in the readme.

👉 Create **documentation** for your app, and refactor this readme with your documentation. You can use a tool like [readme.so](https://readme.so/editor).

### 🌟 Bonus tasks

If you finish the tasks above and want to keep exploring and practicing, keep coding! Feel free to work on a personal project or explore something you're curious about.

If you'd like to carry on with this repo, here are some ideas:

- Create additional features for your app.
- Use **Storybook** to document your UI components.
- Explore what else you can do with Auth0 to add additional auth to your blog (such as roles).
- Add test files and tests for your components.
- Create and deploy a REST API back end to serve your articles.


## Components
- App
  - LoginButton
- Main
  - LogoutButton
  - Articles
    - Comments

## 