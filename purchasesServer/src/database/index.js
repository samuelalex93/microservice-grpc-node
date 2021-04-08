const mongoose = require('mongoose');

const uri = process.env.MONGO_CONNECTION;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});