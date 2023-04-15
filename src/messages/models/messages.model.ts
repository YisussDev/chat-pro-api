import { Schema, Document } from 'mongoose';

export interface Message extends Document {
  name: string;
  message: string;
  imageUrl: string;
  id_user: string;
  _id?: string;
}

export const MessageSchema = new Schema({
  name: { type: String, required: true },
  id_user: { type: String, required: true },
  message: { type: String, required: true },
  imageUrl: { type: String, required: true },
});