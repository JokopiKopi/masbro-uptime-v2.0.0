const mongoose = require("mongoose");

const UrlsConfig = new mongoose.Schema(
  {
    authorID: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    URL: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    pinged: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      default: 0,
    },
    error: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: true,
    },
    errorText: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ex-urls-config", UrlsConfig);
