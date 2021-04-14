import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", CustomerSchema);
