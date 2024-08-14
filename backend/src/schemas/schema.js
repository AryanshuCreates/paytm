import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      max: 30,
      min: 3,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      max: 30,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
      max: 30,
      min: 3,
    },
    balance: {
      type: Number,
      default: 0,
      min: [0, "Balance cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default User = mongoose.model("User", userSchema);
