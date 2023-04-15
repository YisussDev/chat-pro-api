import { Injectable } from '@nestjs/common';
import { Message } from '../models/messages.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {

    constructor(@InjectModel('Message') private readonly MessageModel: Model<Message>) {}

    async findAll(): Promise<Message[]> {
    return await this.MessageModel.find().exec();
    }

    async findById(id: string): Promise<Message> {
    return await this.MessageModel.findById(id).exec();
    }

    async createMessage(message: Message): Promise<Message>{
        const newMessage = new this.MessageModel(message);
        return newMessage.save();
    }
 }
