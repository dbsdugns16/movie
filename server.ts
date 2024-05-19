import express from 'express';
import cors from 'cors';
import userRoutes from './src/Test'; // Test.ts에 정의된 라우터

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우터 설정
app.use('/users', userRoutes);

// 서버 시작
const port = 3010;
//const port = process.env.PORT || 3000;
app.listen(port, (err?: any) => {
    if (err) {
      console.error('Failed to start server:', err);
    } else {
      console.log(`Server is running on port ${port}`);
    }
  });