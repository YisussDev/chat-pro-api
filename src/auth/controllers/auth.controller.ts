import { Controller, Post, Body, Get, Headers } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {

    constructor(
        private authServices: AuthService
    ){}

    @Post('login')
    login(@Body() body:any){
        return this.authServices.loginWithEmail(body)
    }
    @Get('validate')
    validateToken(@Headers() header: any){
        return this.authServices.validateToken(header);
    }

 }
