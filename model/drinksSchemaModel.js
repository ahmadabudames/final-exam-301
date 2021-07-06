'use strict';

const mongoose = require("mongoose");
const drinksSchema=mongoose.Schema({
    strDrink:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    strDrinkThumb:String,
    idDrink:String
})

const schemaModel=mongoose.model('drinks_peice',drinksSchema);

module.exports=schemaModel;