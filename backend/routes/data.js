const express = require("express");
const router = express.Router();
const Data = require("../model/schema");

//get all post
router.get("/", async (req, res) => {
  try {
    const getData = await Data.find();
    res.status(200).json(getData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});

//get single post

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getSingleData = await Data.findById(id);
    if (!getSingleData) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json(getSingleData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});

//create post

router.post("/", async (req, res) => {
  try {
    const createData = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author,
      img: req.body.img,
      description:req.body.description,
      status : req.body.status
    };
    const newData = new Data(createData);
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});

//update data

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await Data.findById(id);
    if (!updateData) {
      return res.status(404).json({ message: "data not found" });
    }
    updateData.title = req.body.title || updateData.title;
    updateData.content = req.body.content || updateData.content;
    updateData.category = req.body.category || updateData.category;
    updateData.author = req.body.author || updateData.author;
    updateData.img = req.body.img || updateData.img;
    updateData.description = req.body.description || updateData.description
    updateData.status = req.body.status || updateData.status
    const updatedData = await updateData.save();
    res.status(200).json(updatedData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});

//delete data

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await Data.findByIdAndDelete(id);
    console.log(deleteData);
    res.status(200).json(deleteData);
  } catch (err) {
    console.log("error saving data", err);
    res.status(500).json({ message: "error saving data" });
  }
});

module.exports = router;
