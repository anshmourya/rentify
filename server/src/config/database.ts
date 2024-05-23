import "dotenv/config";
import mongoose from "mongoose";
const database = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: "rentify",
    });
    console.log("connected to the database");
    return true;
  } catch (error) {
    throw error;
  }
};

export default database;
