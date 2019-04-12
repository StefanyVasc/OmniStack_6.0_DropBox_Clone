// representa uma pasta dentro da aplicação

const mongoose = require("mongoose");

const Box = new mongoose.Schema(
  {
    //campos que irei armazenar dentro dele
    title: {
      type: String,
      required: true
    },
    files: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File"
      }
    ] //vetor
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Box", Box);
