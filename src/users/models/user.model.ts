import { Schema, Document } from 'mongoose';

export interface User extends Document {
    id?:string;
  email: string;
  name:string;
  password: number;
  imgUrl: string;
}

export const UserSchema = new Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name:{ type: String, required: true },
  imgUrl:{ type: String, required: true }
});