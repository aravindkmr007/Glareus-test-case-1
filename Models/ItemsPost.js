const mongoose = require("mongoose");
 

const ItemSchema =  mongoose.Schema(
    {
        item_name : {type: String ,required:true},
        item_description : {type:String,required:true}
    }
)

module.exports = mongoose.model("Items", ItemSchema)