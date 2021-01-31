const mongoose = require("mongoose");
const Items = require('./ItemsPost')
//ProductWebsite //ProductWebsitedb
const VendorSchema = mongoose.Schema({
  vendor_id: { type: String, required: true },
  vendor_name: { type: String, required: true },
  vendor_address: { type: String, required: true },
  vendor_email: { type: String, required: true },
  vendor_number: { type: String, required: true },
  product: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Items"
  }],
});

module.exports = mongoose.model("VendorDetials", VendorSchema);
