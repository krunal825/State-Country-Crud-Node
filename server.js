const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const countriesRouter = require('./routes/countries');

const app = express();
app.use(cors());
app.use('/api/countries', countriesRouter);

mongoose.connect('mongodb://localhost:27017/mern_country_states', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
