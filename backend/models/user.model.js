import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "name is required"]
  },
  email:{
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  cartItems: [
    {
      quantity:{
        type: Number,
        default: 1
      },
      product:{
        type: mongoose.schema.Type.ObjectId,
        ref:"Product"
      }
    }
  ],
  role:{
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  }
  //createdAt, updateAt
}, {
  timestamps: true
})