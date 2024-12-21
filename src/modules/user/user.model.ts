import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { IUser, IUserModel } from './user.interface';
import config from '../../app/config';

const userSchema = new Schema<IUser, IUserModel>(
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
      default:'user'
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

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hasing password

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds),
  );
  next();
});

userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email }).select('+password +role');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    delete ret.role;
    delete ret.isBlocked;
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
    return ret;
  },
});

export const User = model<IUser, IUserModel>('User', userSchema);
