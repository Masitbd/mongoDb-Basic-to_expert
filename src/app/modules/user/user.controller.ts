import { NextFunction, Request, Response  } from "express"
import User from "./user.model";
import { createUserToDb, getUserByIdFromDb, getUsersFromDb } from "./user.services"

export const createUser= async(req:Request, res:Response, next:NextFunction) => {
   const data = req.body
   const user = await createUserToDb(data);
   res.status(200).send({
    status: 'success',
    data: user
   })
  }

  export const getUsers= async(req:Request, res:Response, next:NextFunction) => {
   const user = await getUsersFromDb();
   res.status(200).send({
    status: 'success',
    data: user
   })
  }


  export const getUserById= async(req:Request, res:Response, next:NextFunction) => {
   const {id} = req.params
   const user = await getUserByIdFromDb(id);
   res.status(200).send({
    status: 'success',
    data: user
   })
  }


  // route -> call the controller -> controller call the services