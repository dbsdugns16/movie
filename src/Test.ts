import * as mongoose from 'mongoose';
import { Router } from "express";
import { Test, TestModel } from './testModel';
import { DB } from './database';
import dotenv from 'dotenv';

const router = Router();

router.post("/users", (req, res) => {

  dotenv.config();


  let uri = process.env.DB_URL!;
  const connection: Promise<mongoose.Connection> = mongoose.connect(uri)
    .then(mongoose => {
      return mongoose.connection;
    });

  const db = new DB();

  let newData = <Test>{name: '김철수', age: 30};

  connection.then(async () => {
      // 데이터 생성
      const createdData = await db.create(newData);
      console.log('Created');
      console.log(createdData);
    
      // 생성된 데이터 읽기
      const testData = await db.read({ name: createdData.name });
      console.log(testData);

  



    return testData;
  });
  return null;
});