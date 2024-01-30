const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menuItem')

// //2.Record POST route to add a menuItem
router.post('/', async(req,res)=>{
    try{
        const newMenuData= req.body;
        const newMenu= new menuItem(newMenuData);
        const savedMenu= await newMenu.save();
        console.log("saved menu Item to database");
        res.status(200).json(savedMenu);

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });

    }
})

//2. GET Method to get the menu Items
router.get('/', async(req,res)=>{
    try{
        const savedMenu = await menuItem.find();
        console.log('Menu data fatched from database ');
    res.status(200).json(savedMenu);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    } 
})

//coment added for testing purpose
module.exports=router;
