require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL; // Google Apps Script URL

// Love Score API Route
app.post("/love-score", async (req, res) => {
  try {
    const { name1, name2 } = req.body;
    
    const response = await axios.post(GOOGLE_SCRIPT_URL, { name1, name2 });
    
    res.json(response.data); // React को Data Send करना
  } catch (error) {
    res.status(500).json({ error: "Error fetching love score" });
  }
});

// Start Server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
