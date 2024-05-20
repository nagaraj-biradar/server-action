import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connection Successful."))
    .catch((e) => console.log(e));
};

export default connectToDB;
