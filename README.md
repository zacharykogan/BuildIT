
Welcome to BuildIt

<img src="https://i.ibb.co/hsczRCv/logo.png" alt="drawing" width="100"/>

App URL: https://zacharykogan.github.io/BuiltIT-Client/

API URL: https://murmuring-atoll-11579.herokuapp.com

Client Repo: https://github.com/zacharykogan/BuiltIT-Client

This is an app to checkout and follow step by step instructions for building stuff with your hands.

There are countless fantastic instructional videos on YouTube on how to make virtually anything but you have to pause them to write down materials and tools you need. Then you have to go to the hardware store and try to figure out what you wrote down, then try to find the spot in the video where they list the materials, and thats if you have service on your phone in the store.

With BuildIt, you can view projects and see all the necessary materials and tools you need. You can then follow step by step instructions to create your own amazing stuff - from bird feeders to furniture. 

BuidIt helps you create amazing things with your hands by following simple, step-by-step instructions. Build existing projects or create and share your own with the world! Let's build something, together.
___
The site was created using React.js and Stripe.js as a project for General Assembly's Software Engineering Intensive in September 2021

---
Installation:

Fork and clone repository.
Install dependencies with npm install.
Checkout to new branch.
Run npm start to start local environment.
___
Technologies Used:

JavaScript

React.js

React Stripe.js 

React-Bootstrap

Mongoose

MongoDB

Express

---
Unathenticated Routes:

|HTTP Method |URL Path|Result|Action |
| :---    |    ---:   |   ---: |   ---: |
| GET | /projects | read all project | index |
| GET | /project/:id | read single project | show or retrieve |
|POST| /sign-up| create new user | create|
|POST| /sign-in| sign in existing user | sign in|

Authenticated Routes:

|HTTP Method |URL Path|Result|Action |
| :---    |    ---:   |   ---: |   ---: |
| GET | /my-projects | read all user's projects | index |
| GET | /my-projects/:id | read single user project | show or retrieve |
| POST | /my-projects | create a new project | create |
|PATCH| /my-projects/:id| update a user's project| update|
|DELETE| /sign-out| sign out user| sign out|

---

ERD

![BuildIt](https://i.ibb.co/Tk9BhgX/ERD.jpg)

---