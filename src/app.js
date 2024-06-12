const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const stopRoutes = require('./routes/stopRoutes');
const reportRoutes = require('./routes/reportsRoutes');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config(); 

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stops', stopRoutes);
app.use('/api/reports', reportRoutes);

app.use(errorHandler);

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});