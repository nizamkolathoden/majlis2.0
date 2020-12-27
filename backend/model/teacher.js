const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const ratingSchema = new mongoose.Schema({
    reivewedBy:{
        type:ObjectId,
        ref:'student'
    },
    rating:{
        type:Number,
        default:0
    }
})

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:[{
    
            name:{
                type:String
            },
           batch:{
               type:String
           },
           sem:{
               type:String
           },
           reviews:[ratingSchema]
        
    }],
    
})

module.exports  = mongoose.model('teacher',teacherSchema)