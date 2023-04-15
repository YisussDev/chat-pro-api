import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import {JwtModule} from '@nestjs/jwt'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        JwtModule.register({
            global: true,
            privateKey: 'shgzjxd123',
            secret: 'shgzjxd123',
            signOptions: { expiresIn: '1200s' },
          })
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService, UsersService],
})
export class AuthModule { }
