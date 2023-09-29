require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/authRoutes') 
const taskRoutes = require('./routes/api'); 
const Task = require('./models/task'); 
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

async function startServer() {
  try {
    // Connect to the database
    await connectDB();

    //  authentication routes
    app.use('/auth', authRoutes);

    //  API routes here
    app.use('/tasks', taskRoutes);
    // Start  server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(`Error starting the server: ${error}`);
  }
}


startServer();
