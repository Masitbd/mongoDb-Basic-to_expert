import { IUser } from "../user.interface";
import User from "./user.model";

export const createUserToDb=async(payload:IUser):Promise<IUser>=>{

    const user =await new User(payload)
    /* const user =await new User({
        id: '1236111xyz123123223',
        role: 'student',
        password: '123',
        name:{
            fName: 'Manik',
            middleName: 'Mia',
            lastName: 'shek',
        },
        dateOfBirth: '01-01-2009',
        gender: 'male',
        email:'sar@gmail.com',
        contactNo: '018723456',
        emergencyContact: '123456',
        PresentAddress: 'madaripur',
        parmanentAddress: 'Monipur'
      }); */
      await user.save()
      user.fullName() // custom instance method
      console.log(user.fullName())
      return user
  }
  
  
//createUserToDb()


export const getUsersFromDb= async():Promise<IUser[]> => {
    const users = await User.find()
    return users
   }

  export const getUserByIdFromDb =  async(payload:string):Promise<IUser | null> =>{
    const user = await User.findOne({id:payload}, {name:1})
    return user
  }
 

  export const getAdminUsersFromDb =  async(payload:string):Promise<IUser | null> =>{
    const user = await User.findOne({id:payload}, {name:1})
    return user
  }
 