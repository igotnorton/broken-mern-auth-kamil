const mongoose = require("mongoos");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type:,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);