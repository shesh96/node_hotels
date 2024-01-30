const express=require('express');
const router=express.Router();
const person=require('./../models/person'); 

//1. Record POST route to add a person
router.post('/', async (req, res) => {
    try {
    const newPersonData = req.body; //Asuming the request body contains the person data

    //Create a new person document using the mongoose model
    const newPerson = new person(newPersonData);

    // Save the new person to the database using await
    const savedPerson = await newPerson.save();
    console.log('Saved person to database');
    res.status(200).json(savedPerson);
    } 
    catch (err) {
        console.log(err);
    ///console.error('Error saving person:', error); 
    res.status(500).json({ error: 'Internal server error' });
    }
    }); 

    //1. GET Method to get the person
router.get('/', async(req,res)=>{
    try{
        const savedPerson = await person.find();
        console.log('data fatched ');
    res.status(200).json(savedPerson);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    } 
})

//3.GET the person data by Parametrised API calls

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;//Extract work type from the URL parameter
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
            const response=await person.find({work:workType});
            console.log('response fatched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({err:'Internet Server Error'})
    }
})

// Update the record using PUT method
router.put('/:id',async(req,res)=>{
    try{
         const personId=req.params.id;///Extract the Id from the URL parameter
         const updatedPersonData=req.body;//updated data from the person
        const response= await person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//Return the updated document
            runValidators:true,//Run Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Person not found'});
        }

        console.log('data Updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internet Server Error'})
    }
})

// Delete the record using the DELETE method

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found'});
        }
        
        console.log('data deleted successfully');
        res.status(200).json({message: 'person Deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({err:'Internet Server Error'})
    }
    
})

module.exports = router;


    