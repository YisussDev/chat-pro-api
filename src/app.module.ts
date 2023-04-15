import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {JwtModule} from '@nestjs/jwt'

@Module({
  imports: [
    AuthModule,
    MessagesModule,
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://shgzjxd:230815xd@jesusp.jzdyvsd.mongodb.net/chat-data')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
