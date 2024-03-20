import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";

export default class AuthController {
   private  authService: AuthService

    constructor(auth: AuthService) {
        this.authService = auth;
    }


    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            console.log(`Error from Login => ${error}`)
            next(error);

        }
    }

    public register = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            console.log(`Error from Register => ${error}`)
            next(error);

        }
    }

    public verifyOTP = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            console.log(`Error from Verify OTP => ${error}`)
            next(error);

        }
    }

    public forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            console.log(`Error from Forgot password => ${error}`)
            next(error);

        }
    }

}