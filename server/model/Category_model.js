const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
       
    },
    category_description: {
        type: String,
      
    },
    category_date: {
        type: Date,
        default: Date.now,
    },
    category_image:{
        type:String,
    }
});

module.exports = mongoose.model("category", CategorySchema);
