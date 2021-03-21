# validtest

## Pages
  - index (where the subscription's form lives)
  - process (Where all the users are getted and processed)
 ## Api
   - home (Where all API project lives)
   - src (Where all the logic lives)


>> In order to use please, follow the next steps

## building
  - cd api
  - npx sequelize-cli db:migrate
  - npx sequelize-cli db:seed:all
  - npm run dev

## using
  - Open the index html file into an explorer, fill the form
  - Press up button in order to go to process
  - Now you can watch the previous user created
  - Click in the checkbox
  - Press *Procesar* button
