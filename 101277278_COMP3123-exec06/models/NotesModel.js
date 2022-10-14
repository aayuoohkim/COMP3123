const mongoose = require("mongoose");

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
  noteTitle: String,
  noteDescription: String,
  priority: {
    type: String,
    enum: ["HIGH", "MEDIUM", "LOW"],
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
  dateUpdated: Date,
});

noteSchema.pre("findOneAndUpdate", function (next) {
  this.update(
    {},
    {
      $set: {
        dateUpdated: Date.now(),
      },
    }
  );
  next();
});

module.exports = mongoose.model("note", noteSchema);
