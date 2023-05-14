export interface IUser{
    id: string;
    role: 'student';
    password: string;
    name:{
        fName: string;
        middleName: string;
        lastName: string;
    };
    dateOfBirth: string;
    gender: 'male' | 'female';
    email?:string;
    contactNo: string;
    emergencyContact: string;
    PresentAddress: string;
    parmanentAddress: string

}

interface IUserMethods {
    fullName(): string;
  }