const express = require("express");
const routerPost = express.Router();
const vendorPost = require("../Models/VendorPost");

routerPost.post("/", async (req, res) => {
  const newPost = new vendorPost({
    vendor_id: req.body.vendor_id,
    vendor_name: req.body.vendor_name,
    vendor_address: req.body.vendor_address,
    vendor_email: req.body.vendor_email,
    vendor_number: req.body.vendor_number,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.json(err);
  }
});

module.exports = routerPost;
