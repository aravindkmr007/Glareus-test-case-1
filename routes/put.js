const express = require("express");
const { Mongoose } = require("mongoose");
const routerPut = express.Router();
const ItemDB = require("../Models/ItemsPost");
const routerPost = require("./post");
const vendorDB = require("../Models/VendorPost");

routerPut.put("/:postId", async (req, res) => {
  const newItems = new ItemDB({
    item_name: req.body.item_name,
    item_description: req.body.item_description,
  });
  try {
    const saveItem = await newItems.save();
    const insertItemID = await vendorDB.findByIdAndUpdate(
      { _id: req.params.postId },
      {
        $push: {
          product: saveItem._id,
        },
        useFindAndModify: true,
      }
    );
    res.json(saveItem);
    res.json(insertItemID);
  } catch (err) {
    res.json(err);
  }
});

module.exports = routerPut;
