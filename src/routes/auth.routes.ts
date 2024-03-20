import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import AuthService from "../services/auth.service";

export default class AuthRoutes {

     NAMESPACE = '/auth';

     private readonly authService = new AuthService();
     private readonly authController = new AuthController(this.authService);
     private readonly router: Router;

     constructor() {
          this.router = Router();

          this.setupRoutes();
     }
     setupRoutes() {
          this.router.post('/register', this.authController.register);
          this.router.post('/login', this.authController.login)
          this.router.post('/forgot-password', this.authController.forgotPassword)
          this.router.post('/otp/verify', this.authController.verifyOTP)
     }


     public getRouter(): Router {
          return this.router;
     }
}