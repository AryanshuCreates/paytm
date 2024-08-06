import mongoose from "mongoose";

async function connectDB() {
  const uri =
    "mongodb+srv://aryanshu221623:87x64uDnxZpkvxhg@cluster0.ve86nqc.mongodb.net";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
}

export default connectDB;
