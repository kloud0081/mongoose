const mongoose=require("mongoose") 
const personshema=new mongoose.Schema({name:{type:String,required:true},
    age:{type:Number,required:true},
    favoriteFoods:{type:[String]}
    
})
module.exports=mongoose.model("person",personshema)