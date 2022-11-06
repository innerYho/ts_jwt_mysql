import Server from "./models/server";
import dotenv from 'dotenv';

//var env
dotenv.config();
// console.log(process.env.NODE_ENV === 'dev') // false
// console.log(process.env.PORT) //19:30
const server = new Server()