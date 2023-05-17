
Instructions:

Open terminal
Go to root directory or your preferred folder. 
Inside terminal use mkdir with name of backend.
cd into repository and run npm int -y and git init

Create app.js file and server.js file
Create .env file and ,gitignore file
Inside of .env file incloude PORT= numbered beteeen 3000 -5001 , PG_HOST= localhost , PG_PORT=5432 , PG_DATABASE=database name , PG_USER=postgres

Create dbConfig file 

Add schema.sql and seed.sql files. 
In schema file write a coomand to check if database exists and if not a command that creates database. Then create a table with all necesary key values.

In seed file use sql language to insert in keys the values that you want represented in your database. 

Create queries folder
Add supplies file

In supplies file you will require dbConfig file and create your function that will get that will communicate with the datababse and return data from the database accordingly. Be sure to use module.exports to send the functions created in this file.

Create controllers folder
Add suppliesController.js file 
in this file add the corresponding CRUD functions that will communicate with the functions in your supplies.js file. 



Developers: Tafari Excell