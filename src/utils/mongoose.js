module.exports = {
  mutipleMongooseToObject: (mongooseArrays) => mongooseArrays.map((mongooseArray) => mongooseArray.toObject()),
  mongooseToObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
