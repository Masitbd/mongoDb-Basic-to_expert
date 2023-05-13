import express, { Application, json} from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose'
import UserRouters from './app/modules/user/user.route'


const app: Application = express()


// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/user',UserRouters)

  // inserting a test data into the mongodb

  /*
  step 1: Interface
  step 2: schema
  step 3: model
  step: database query
   */

  //step 1: Interface
  
  

// step 2: schema


 
export default app 


/*
Break down process
interface -> interfac.ts
schema, model -> model.ts
route
route function -> controller.ts
database query -> service
*/


// procedure
/*
1. app service call the createUser
2. createUser call the CreateUserToDB
3. CreateUserToDB handle the db logic
4.  
*/


// http://localhost:3000/api/v1/user