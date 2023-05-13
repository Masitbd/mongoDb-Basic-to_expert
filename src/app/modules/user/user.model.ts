import { model, Schema } from "mongoose";
import { IUser } from "../user.interface";



const userSchema = new Schema<IUser>({
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
 
   // step 3: model
   
   const User = model<IUser>('User', userSchema);

   export default User
 