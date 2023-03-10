let mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// schema 
let BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  photo: { type: String, required: false },
  upvote: { type: Number, default: 0 },
  downvote: { type: Number, default: 0 },
});

module.exports = mongoose.model("Blog", BlogSchema);
