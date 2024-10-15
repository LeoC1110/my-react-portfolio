/* myportfolioserver.js, Ligeng Cai, 301286463, 10/13/2024 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');  // Import the user routes

const app = express();

// MongoDB connection string (Local MongoDB)
const uri = "mongodb://localhost:27017/Skeleton"; // Database Skeleton

// MongoDB connection setup
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to the Skeleton database!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Register routes
app.use('/api/contacts', contactRoutes); // Register contact routes
app.use('/api/users', userRoutes); // Register user routes

// Define a route to display the message in JSON format
app.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application" });
});

// Set up the server to listen on a specific port
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
