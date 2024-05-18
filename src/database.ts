import * as mongoose from 'mongoose';
import { Test, TestModel } from './testModel';

export class DB {
    constructor() { }

    create(test: Test): Promise<Test> {
        let p = new TestModel(test);
        return p.save();
    }

    read(query: any): void {
        TestModel.find(query, (err:any, tests:any) => {
            console.log(tests.length);
        });
    }

    // update(test: Test): mongoose.Query<number> {
    //     return TestModel.update({name: test.name}, {...test});
    // }

    // delete(test: Test): mongoose.Query<void> {
    //     return TestModel.remove({name: test.name});
    // }
}