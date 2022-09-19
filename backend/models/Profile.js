const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, //allows us to use an email address or some string - look into validators with regEx from frontend
      required: true,
    },
    : {
      type: String, // look into validators
      required: true,
    },
    // associative fields
    // profileURL
  },
  {
    timestamps: true, // give info on when user account was created
    toJSON: {
        virtuals: true, 
        transform: (_doc, ret) => {
            delete ret.password //remove the password key from our return document
            return ret
        }
    }
  }
);

module.exports = mongoose.model("User", userSchema);
