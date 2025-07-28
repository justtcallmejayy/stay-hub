const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-bench-sitting-in-front-of-a-blue-building-lv3l3x_6GQQ"
        : v,
  },
  country: {
    type: String,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
