import express from 'express';
import bannerbearRoutes from './routes/bannerbearRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/bannerbear', bannerbearRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
