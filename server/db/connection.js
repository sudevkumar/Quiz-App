import { mongoose } from "mongoose";

export default async function connect() {
  await mongoose.connect(process.env.URL);
  console.log("Conected to DB")
}
