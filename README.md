# OnTrack
### Overview
Welcome to OnTrack! OnTrack is an app designed to help you set goals, and create tasks related those goals to be completed at some specified consistency (daily, weekly, monthly, etc). It is easy for people to give up on their goals, or so no to doing a task if there is nothing keeping track for them. The idea of this app is to keep track of those goals and tasks, and moreover keep track of how well you've been keeping to them. Think of duolingo or snapchat; the main reason users use them everyday, for 100+ days at a time, is to keep their streak. OnTrack uses the same incentive to motivate its users to keep on progressing on their goals.

### Tech
OnTrack is being build on a MERN tech-stack (Mongodb/Mongoose, Express, React.js, and Node.js). If you don't know already, MERN and MEAN are two of the most common tech-stacks in web-development these days. **MongoDB** is the database in which the app stores any percistent data, **Express.js** is backend Node.js based framework which helps us develop in a RESTful manner (following a set of principles for web apps), **React** which is a Javascript library used to help develop our front-end, and lastly **Node.js** for running our server.

### Who we are
The co-designers and co-developers for this application are two Computer Science Majors Adam Lin, and Kyle Newbigging. We are always looking for advice on how we can improve as developers, so please let us know your thoughts on our current implementation :)

### Installation Process
1. Clone the repository ```git clone https://github.com/AdamLinCodes/OnTrack.git```

2. Change directories into ```/on-track``` then install dependencies ```cd on-track && npm i```

3. Do the same for the backend ```cd backend && npm i```

4. In the ```/backend``` directory, create a file called ```.env```. In this file, create a new environment variable called ```ATLAS_URI``` and assign it the value of your mongoDB URI. Make sure to add your credentials to the URI. 
  ```echo 'ATLAS_URI=<YOUR MONGODB URI HERE>' > .env```
  
5. Open two terminals. One will run your front end, and the other will run the backend.

    a) In terminal 1, cd into ```/on-track``` and run ```npm start```
    
    b) In terminal 2, cd into ```/backkend``` and run ```node server.js```
