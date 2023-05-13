import { NextFunction, Request, Response  } from "express"
import { createUserToDb } from "./user.services"

export const createUser= async(req:Request, res:Response, next:NextFunction) => {
   const user = await createUserToDb();
   res.status(200).send({
    status: 'success',
    data: user
   })
  }


  // route -> call the controller -> controller call the services