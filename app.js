const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const deviceRoutes = require('./routes/deviceRoutes');
const { default: mongoose } = require('mongoose');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/devices', deviceRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb+srv://temp:temp@cluster0.wkea2ju.mongodb.net',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Failed to connect to MongoDB Atlas', err);
});



app.listen(PORT, () => {
    console.log((`Server is running on port ${PORT}`));
});