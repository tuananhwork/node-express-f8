const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/AnhCBT_Education_Dev');
    console.log('Connected successfully!');
  } catch (error) {
    console.error('Connection failed!', error);
  }
}

module.exports = { connect };
