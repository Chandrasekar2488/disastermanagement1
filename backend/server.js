// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const MONGO_URL= 'mongodb+srv://chandru2488:vtschennai2024@mydatabase.trzpa.mongodb.net/?retryWrites=true&w=majority&appName=mydatabase';

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});



// Use routes
app.use('/emergencies', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
