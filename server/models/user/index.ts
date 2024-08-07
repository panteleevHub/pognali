import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  age: Number,
  avatarUrl: String,
  countries: [{type: Schema.Types.ObjectId, ref: 'Country'}],
  tags: [String],
  transport: [String],
  level: Number,
  likes: [Number],
  purpose: String,
  music: [String],
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    length: [8, 'Password must be at least 8 characters long'],
  },
  fake: Boolean
}, {versionKey: false});

export const User = model('User', UserSchema);