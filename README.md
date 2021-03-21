# validtest

## Pages
  - index (where the subscription's form lives)
  - process (Where all the users are getted and processed)
 ## Api
   - home (Where all API project lives)
   - src (Where all the logic lives)
     - config
       - config.json (Where the database configuration take place)
     - controllers
       - UserController.js (Here lives the user's logic (get, post, put, patch)
     - libs
       - boot (Where the server takes its parameters in order to start)
       - middlewares (Different middleware are added (cors, json and port)
     - migrations
       - 20210320234324-create-user.js (Here we have the user's table structure)
     - models
       - index.js (It is used in order to load all models created inside of this folder)
       - user.js (the user's model structure)
     - routes
       - index.js (it is just for development purposes, it fetch all users in database)
       - users.js (Where all users actions are managed)
     - seeders
       - 20210320234641-demo-user.js (it is just for development purposes, it creates one user into database)
     - database.sqlite (It gets create when one run a migration NOTE: this is ignored into this repository)
     - index.js (Here we are starting all the express loginc)


>> In order to use please, follow the next steps

## building
  - cd api
  - npm i
  - cd src
  - npx sequelize-cli db:migrate
  - npx sequelize-cli db:seed:all
  - cd ..
  - npm run dev

## using
  - Open the index html file into an explorer, fill the form
  - Press up button in order to go to process
  - Now you can watch the previous user created
  - Click in the checkbox
  - Press *Procesar* button
