const mongoose = require("mongoose");



const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, //allows us to use an email address or some string - look into validators with regEx from frontend
      required: true,
      unique: true,
    },
    password: {
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
            delete ret.password //remove the password key from our return document. prevents password from being sent back to the client
            return ret
        },
        id:false  // makes virtual id invisable
    }
  }
);

module.exports = mongoose.model("User", userSchema);

