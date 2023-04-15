import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
      @InjectModel('User') private readonly userModel: Model<User>,
      private jwtService: JwtService
      ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findByName(name:string): Promise<User[]> {
    return await this.userModel.find({name}).exec();
  }

  async findByEmail(email:string): Promise<User[]> {
    return await this.userModel.find({email}).exec();
  }

  async getUserInfo(header: any){
    try {
      const token = this.getTokenOfHeader(header);
      console.log(typeof token);
      if(!token) throw new NotFoundException('No envió un token válido');
      const userData = this.jwtService.decode(token);
      console.log(userData);
      if(!userData) throw new NotFoundException('Envió un token inválido');
      return userData;
    } catch (error) {
      throw error;
    }
    
  }


  getTokenOfHeader(header: any): string | undefined {
    const [type, token] = header.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
