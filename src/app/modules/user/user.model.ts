import { Model, model, Schema } from "mongoose";
import { IUser, IUserMethods } from "../user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
     type: String,
     required: true,
     unique: true
    },
    role: {
     type: String,
     required: true,
     },
     password:{
     type: String,
     required: true,
     },
     name:{
         fName:{
             type: String,
             required: true,
            
         },
         middleName:{
             type: String,
            
         },
         lastName:{
             type: String,
             required: true,
          
         }
         },
     dateOfBirth:{
         type: String,
     },
     gender: {
         type: String,
         enum: ['male', 'female']
     },
     email:{
         type: String,
     },
 
     contactNo: {
         type: String,
         required: true,
          
     },
     emergencyContact: {
         type: String
     },
     PresentAddress: {
         type: String,
         required: true,
          
     },
     parmanentAddress: {
         type: String,
         required: true,
          
     }
   });


   userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
  
 
   // step 3: model
   
   const User = model<IUser, UserModel>('User', userSchema);

   export default User

   // instance methods --> instance er method

 