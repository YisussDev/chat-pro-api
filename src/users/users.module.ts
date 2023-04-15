import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';

import {JwtService} from '@nestjs/jwt'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    controllers: [
        UsersController,
    ],
    providers: [
        UsersService, JwtService]
})
export class UsersModule { }
