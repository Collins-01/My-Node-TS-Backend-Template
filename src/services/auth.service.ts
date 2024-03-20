import jwt, { JwtPayload } from "jsonwebtoken";
import {User} from '../models/user_model'
export type JWTPayload = {
    id: string;
    email: string;
  };

export default class AuthService {

    public getUserByID = async(id:string):Promise<User|null> =>{
        return null;
    }
}
