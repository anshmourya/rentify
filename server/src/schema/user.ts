import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    default: "buyer",
  },
});

const UserModel = mongoose.model("user", user);

export { UserModel };
