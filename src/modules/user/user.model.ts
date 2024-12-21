import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Passowrd is required'],
      select: 0,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      select: 0,
    },
    isBlocked: {
      type: Boolean,
      default: false,
      select: 0,
    },
  },
  {
    timestamps: true,
  },
);




export const User = model<IUser>('User', userSchema);