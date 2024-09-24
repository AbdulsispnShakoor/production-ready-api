import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes


// Root route
app.get('/', (_, res) => {
  res.send('API is running...');
});

console.log("server is running")

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
