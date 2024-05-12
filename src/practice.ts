import {Schema, model, Model} from 'mongoose';

interface DBUser {
    name: string;
    age : number;
}

interface DBUserModel extends Model<DBUser> {}

const userSchema = new Schema<DBUser,DBUserModel>({
    name: { type: String, required: true },
    age: {type: Number, required: true}
});

const User = model<DBUser,DBUserModel>('User', userSchema);

export { User };