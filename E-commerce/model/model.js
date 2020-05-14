const mongoose  = require("mongoose");
const productSchema =  mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    
    name : {
        type: String,
        required : true

    },
    quantity : {
        type : Number,
        required : true
        }
  
  
  
      
      
})
module.exports = mongoose.model('Product',productSchema);