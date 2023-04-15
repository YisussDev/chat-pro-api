import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MessagesService } from '../services/messages.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Message } from '../models/messages.model';

@Controller()
export class MessagesController {
    constructor(
        private messageServices: MessagesService
    ){}

    @UseGuards(AuthGuard)
    @Get('messages')
    getAll(){
        return this.messageServices.findAll();
    }

    @UseGuards(AuthGuard)
    @Post('messages/create')
    createMessage(@Body() message: Message){
        return this.messageServices.createMessage(message);
    }
}
