import React from "react";
import { useState,useEffect } from "react";
import { getSettings } from "../services/settingsApi";
import { createSettings } from "../services/settingsApi";
import { editSettings } from "../services/settingsApi";


function AdminSettings() {

    const [siteName, setSiteName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [footerText, setFooterText] = useState("");
    const [logo, setLogo] = useState(null);
    const[settingsId,setSettingsId] = React.useState(null)

useEffect(() => {
  const fetchSettings = async () => {
    try {
      const settingsData = await getSettings();

      if (settingsData) {
        setSettingsId(settingsData._id);
        setSiteName(settingsData.siteName || "");
        setContactEmail(settingsData.contactEmail || "");
        setFooterText(settingsData.footerText || "");
        setLogo(settingsData.logo || "");
      }

      console.log(settingsData);
    } catch (err) {
      console.log("Error fetching settings:", err);
    }
  };

  fetchSettings();
}, []);

const handleCreateSettings = async()=>{
    try {
      const formData = new FormData();

      formData.append("siteName", siteName);
      formData.append("contactEmail", contactEmail);
      formData.append("footerText", footerText);
    
   
      if (logo) {
    formData.append("logo", logo);
  }
      const data = await createSettings(formData)
    
    }
    
    catch (err) {
      console.log("Error creating category:", err);
    }
}
  

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Website Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage website information and branding
          </p>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          {/* Site Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Site Name
            </label>

            <input
              type="text"
              placeholder="Enter site name"
              className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </div>

          {/* Contact Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Contact Email
            </label>

            <input
              type="email"
              placeholder="Enter contact email"
              className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>

          {/* Footer Text */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Footer Text
            </label>

            <textarea
              rows="4"
              placeholder="Enter footer text"
              className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
              value={footerText}
              onChange={(e) => setFooterText(e.target.value)}
            />
          </div>

          {/* Logo Upload */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Upload Logo
            </label>

            <input
              type="file"
              className="w-full border rounded-2xl p-3"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </div>

          {/* Logo Preview */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Current Logo
            </label>

            <div className="w-40 h-40 border-2 border-dashed rounded-2xl flex items-center justify-center text-slate-400">
              Logo Preview
            </div>
          </div>

          {/* Save Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;