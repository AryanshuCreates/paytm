import mongoose from "mongoose";
import User from "../schemas/schema.js";
import bcrypt from "bcrypt";

const signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (
      !firstName.trim() &&
      !lastName.trim() &&
      !email.trim() &&
      !password.trim()
    ) {
      return res.status(400).json({ message: "All the fields are required!" });
    }
    const oldUser = await User.findOne({ email });
    console.log(oldUser);
    if (oldUser) {
      return res.status(409).json({ message: "User already in the database." });
    }
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (!createUser) {
      res.status(400).json({ message: "Something went wrong singup again." });
    }
    res.status(200).json({ message: "User created successfully" });
    next();
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email.trim() && !password.trim()) {
      return res.status(400).json({ message: "All the fields are required!" });
    }
    const correctUser = await User.findOne({ email });
    console.log(correctUser);
    if (!correctUser) {
      res.status(400).json({ message: "invalid user details." });
    }

    res.status(200).json({ message: "User logedin!" });
    next();
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};

export { signup, signin };
