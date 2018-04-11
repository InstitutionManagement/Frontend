const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserAuth = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registered_id: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  privilage_code: [
    {
      type: Number,
      required: false
    }
  ],
  user_type: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('UserAuth', UserAuth);
