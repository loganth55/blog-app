const express= require('express')
const router = express.Router()
const settingsData = require('../model/settingsSchema')
const upload = require('../uploads/upload')

router.get('/settings',async(req,res)=>{
    try {
        const getSettings = await settingsData.findOne()
         res.status(200).json(getSettings);
        
    } 
    catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }
})

router.post('/settings',upload.single("logo"),async(req,res)=>{
    try {
              console.log(req.file);
              console.log(req.body);
      const createSettings = {
        siteName: req.body.siteName,
        contactEmail: req.body.contactEmail,
        footerText: req.body.footerText,
        logo: req.file ? `/uploads/${req.file.filename}` : "",
      }; 
      const createdSettings = new settingsData(createSettings)
      await createdSettings.save()

      res.status(200).json(createdSettings)
    }
     catch (err) {
      console.log("error saving data", err);
      res.status(500).json({ message: "error saving data" });
    }

})

router.put("/settings/:id", upload.single("logo"), async (req, res) => {
  try {
    const id = req.params.id;

    const updateSettings = await settingsData.findById(id);

    if (!updateSettings) {
      return res.status(404).json({
        message: "Settings not found",
      });
    }

    updateSettings.siteName = req.body.siteName || updateSettings.siteName;

    updateSettings.contactEmail =
      req.body.contactEmail || updateSettings.contactEmail;

    updateSettings.footerText =
      req.body.footerText || updateSettings.footerText;

    if (req.file) {
      updateSettings.logo = `/uploads/${req.file.filename}`;
    }

    updateSettings.updatedAt = Date.now();

    const updatedSettings = await updateSettings.save();

    res.status(200).json(updatedSettings);
  } catch (err) {
    console.log("error updating settings", err);

    res.status(500).json({
      message: "error updating settings",
    });
  }
});

module.exports = router