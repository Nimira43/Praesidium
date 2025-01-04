const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require(crypto)

const UserSchema = new mongoose.Schema({
  email: {
    required: [true, 'Please enter your email address.'],
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter your password.'],
    minLength: [8, "Password must be at least 8 characters long."]
  },
  firstName: {
    type: String,
    required: [true, 'Please enter your first name.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name.'],
  },
  strip_customer_id: {
    type: String,
  },
  subscriptions: [],
  isVerfied: {
    type: Boolean,
    default: false,
  },
  accountVerificationToken: String,
  accountVerificationTokenExpires: Date,
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  profilePhoto: {
    type: String,
    // default: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png",
    default: "../../public/user.png",
  },
  role: {
    type: String,
    enum: ['Subscriber', 'Admin', 'Free User', 'Influencer']
  },
  isSubscribed: {
    type: String
  },
  saved: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      }
    ]
  }
}, {
  toJSON: {virtuals: true},
  toObject: {virtuals: true},
  timeStamps: true,
}) 