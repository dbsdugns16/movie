import * as mongoose from 'mongoose';

export interface Test extends mongoose.Document {
    name: string;
    age: number;
};

const testSchema = new mongoose.Schema({
    name:     {type: String, required: true},
    age:   {type: Number, required: true},
});
export const TestModel = mongoose.model<Test>('Test', testSchema);