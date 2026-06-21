const express= require('express')
const router = express.Router()
const commentData = require('../model/commentSchema')

router.get('/comment',async(req,res)=>{
    try {
        const getComment = await commentData.find()
         res.status(200).json(getComment);
        
    } 
    catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }
})

router.post('/comment',async(req,res)=>{
    try {
      const createComment = {
        name:req.body.name,
        email:req.body.email,
        comment:req.body.comment,
        postId:req.body.postId
      } 
      const createdComment = new commentData(createComment)
      await createdComment.save()
      res.status(200).json(createdComment)
    }
     catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }

})

router.delete('/comment/:id',async(req,res)=>{
    try {
       const id = req.params.id
       const deleteComment = await commentData.findByIdAndDelete(id)
    res.status(200).json(deleteComment)   
    } 
    catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }
})

module.exports = router;