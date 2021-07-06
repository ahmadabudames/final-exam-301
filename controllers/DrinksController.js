'use strict';

const axios=require('axios');


const getData=async(req,res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(response=>{
        res.send(response.data)
    }).catch(error=>{
        console.log('we have error');
        console.log(error);
    })
}

module.exports={
    getData
}