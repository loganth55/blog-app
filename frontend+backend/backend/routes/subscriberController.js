const express = require('express')
const router = express.Router()
const subscriberData = require('../model/subsriberSchema')

router.get('/subscriber',async(req,res)=>{
    try {
        const getSubscriber = await subscriberData.find()
         res.status(200).json(getSubscriber);
        
    } 
    catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }
})

router.post('/subscriber',async(req,res)=>{
    try {
      const createSubscriber = {
        email:req.body.email,
       } 
      const createdSubscriber = new subscriberData(createSubscriber)
      await createdSubscriber.save()
      res.status(200).json(createdSubscriber);
    }
     catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }

})

router.delete('/subscriber/:id',async(req,res)=>{
    try {
       const id = req.params.id
       const deleteSubscriber = await subscriberData.findByIdAndDelete(id)
    res.status(200).json(deleteSubscriber)   
    } 
    catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }
})

module.exports = router;