import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import Route from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import passport from 'passport';

class AuthRoute implements Route {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}/login`, validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this.router.get(`${this.path}/facebook`, passport.authenticate('facebook', { scope: 'email' }));
    this.router.get(`${this.path}/facebook/callback`, passport.authenticate('facebook', { scope: 'email' }), this.authController.logIn);
    this.router.post(`${this.path}/logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
