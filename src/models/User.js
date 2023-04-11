import { Schema, Types, model } from 'mongoose';

const UserSchema = new Schema(
	{
		username: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true, unique: true },
		password: { type: String, required: true, min: 6 },
	},
	{
		timestamps: true,
	}
);

export default model('user', UserSchema);
