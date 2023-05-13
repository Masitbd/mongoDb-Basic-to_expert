import User from "./user.model";

export const createUserToDb=async()=>{
    const user =await new User({
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
      });
      await user.save()
      return user
  }
  
  
//createUserToDb()
  