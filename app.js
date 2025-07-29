const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const port = 3000;

// Set up EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Middleware to serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// MongoDB connection

const MONGO_URL = "mongodb://localhost:27017/stayhub";
main()
  .then(() => {
    // console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
async function main() {
  await mongoose.connect(MONGO_URL, {});
}

/* app.get("/", (req, res) => {
  res.send("Hello World");
}); */

/* app.get("/listings", async (req, res) => {
  let sampleListing = new Listing({
    title: "Sample Listing",

    description: "This is a sample listing description.",
    price: 100,
    location: "Sample Location",
    images: "",
    country: "Sample Country",
  });
  await sampleListing.save();
  console.log("Sample listing created");
  res.send("Sample listing created");
}); */

// Indexing /listings route
app.get("/listings", async (req, res) => {
  let alllistings = await Listing.find({});
  res.render("./listings/index.ejs", { alllistings });
});
// CREATE New listing form
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// READ Show individual listing
app.get("/listings/:id", async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

// CREATE New listing-post
app.post("/listings", async (req, res) => {
  /*   let listingDetails = ({
    title,
    description,
    price,
    location,
    images,
    country,
  } = req.body);

  let newListing = new Listing(listingDetails);
  await newListing.save();
  res.redirect("/listings"); */
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});
// EDIT listing form
app.get("/listings/:id/edit", async (req, res) => {
  let id = req.params.id;
  const listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
});
// UPDATE listing
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});
// DELETE listing
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening on ${port}`);
});
