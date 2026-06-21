const express = require('express')
const router = express.Router()
const categoryData = require("../model/categorySchema")
const upload = require("../uploads/upload");

//get all category 

router.get('/category',async(req,res)=>{
  try {
    const getAllData = await categoryData.find();
    res.status(200).json(getAllData);
  } 
  catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
})

//get single category

router.get('/category/:id',async(req,res)=>{
 try{
       const id = req.params.id
    const getSingleData = await categoryData.findById(id)
    if(!getSingleData) {
       return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json(getSingleData);
 }
  catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
    
})

//create category


router.post("/category", upload.single("img"), async (req, res) => {
  try {
    const createCategory = {
      name: req.body.name,
      description: req.body.description,
      img: `/uploads/${req.file.filename}`,
    };

    const newData = categoryData(createCategory);

    await newData.save();

    res.status(201).json(newData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});
//edit category

router.put('/category/:id',upload.single("img"),async(req,res)=>{
    try {
      const id = req.params.id;
      const updateCategory = await categoryData.findById(id);
      if (!updateCategory) {
        return res.status(404).json({ message: "data not found" });
      }
      updateCategory.name = req.body.name || updateCategory.name;
      updateCategory.description = req.body.description || updateCategory.description
       if (req.file) {
         updateCategory.img = `/uploads/${req.file.filename}`;
       }
      const updatedCategory = await updateCategory.save();
      res.status(200).json(updatedCategory);
    } catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }

})

router.delete('/category/:id',async(req,res)=>{
    try {
      const id = req.params.id;
      const deleteCategory = await categoryData.findByIdAndDelete(id);
      if (!deleteCategory) {
        return res.status(404).json({ message: "data not found" });
      }
      res.status(200).json(deleteCategory);
    } catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    } 
})

module.exports = router