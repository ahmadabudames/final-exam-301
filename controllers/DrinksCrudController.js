'use strict';

const drinksModel=require('../model/drinksSchemaModel');


const createNewItem=async(req,res)=>{
const{
    strDrink,
    strDrinkThumb,
    idDrink
}=req.body
drinksModel.find({strDrink:strDrink},(error,data)=>{
    if(data.length>0){
        res.send('we have it')

    }else{
        const newDrinksModel=new drinksModel({
            strDrink:strDrink,
            strDrinkThumb:strDrinkThumb,
            idDrink:idDrink
        })
        newDrinksModel.save();
        res.send('done')
    }
})

}

const getNewItem=async(req,res)=>{
    drinksModel.find({},(error,data)=>{
        res.send(data)
    })
}

const deleteNewItem=async(req,res)=>{
    const strDrink=req.params.strDrink;
    drinksModel.deleteOne({strDrink:strDrink},(error,data)=>{
        if(error){
            res.send(error)
        }else{
            drinksModel.find({},(error,data)=>{
                res.send(data)
            })
        }
    })
}

const updateNewItem=async(req,res)=>{
    const strDrink=req.params.strDrink;
    const{idDrink}=req.body;
    drinksModel.findOne({strDrink:strDrink},(error,data)=>{
        if(error){
            res.send(error)
        }else{

            data.idDrink=idDrink;
            data.save().then(()=>{
                drinksModel.find({},(error,data)=>{
                    res.send(data)
                })
            })

        }
    })
}

module.exports={
    createNewItem,
    getNewItem,
    deleteNewItem,
    updateNewItem
}