import { MessagesService } from './services/messages.service';
import { MessagesController } from './controllers/messages.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './models/messages.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])
    ],
    controllers: [
        MessagesController,],
    providers: [
        MessagesService,],
})
export class MessagesModule { }
