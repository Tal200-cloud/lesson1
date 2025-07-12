import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";



export class createUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "SOFTWARE ENGINEER", "ADMIN"],{
        message: 'Valid Role Required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}