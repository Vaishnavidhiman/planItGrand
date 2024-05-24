import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String,
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
