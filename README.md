# Typescript JWT Node and MySql Project

taked of https://www.youtube.com/watch?v=G323h6etzhg
1:17:30

npm init --y

    # create tsconfig

tsc --init

    # build ts to js

tsc

# copile code folder tsconfig

         "outDir": "./dist",

    # run file

node index.js

    #run proyect and whatch the change in project

node dist/index.js // only one time

nodemon dist/index.js //whatch the change but need the next comand in other promt

    #see the change in files ts and copile the project to js

tsc --watch

    #dependencies

npm i express jsonwebtoken mysql dotenv bcrypt
npm i --save-dev @types/express
npm i --save-dev @types/mysql
npm i --save-dev @types/bcrypt
npm i --save-dev @types/jsonwebtoken

    #Generate a Strong Password!

https://delinea.com/resources/password-generator-it-tool
