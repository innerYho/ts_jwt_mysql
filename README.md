# Typescript JWT Node and MySql Project

npm init --y
tsc --init

    # run file
node index.js
    #run proyect and whatch the change in project
nodemon dist/index.js
node dist/index.js
    #see the change in files ts and copile the project to js
tsc --watch

    # tsconfig
    //copile code folder
         "outDir": "./dist",  

    #dependencies
npm i express jsonwebtoken mysql dotenv bcrypt
npm i --save-dev @types/express
npm i --save-dev @types/mysql