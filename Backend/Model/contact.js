const mongoose=require('mongoose')

//creation schema
const SchemaContact=mongoose.Schema({
    //contenu du schema
    FirstName:String,
    LastName:String,
    Age:Number,
    Adress:String,
    Email:{type: String, require:true},
    favoriteFoods:  String 
   
})








module.exports=mongoose.model('SchemaContact',SchemaContact)