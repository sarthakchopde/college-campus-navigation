require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/route", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openrouteservice.org/v2/directions/foot-walking/geojson",
      req.body,
      {
        headers: {
          Authorization: process.env.ORS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log("========= ORS ERROR =========");
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
    console.log("Message:", err.message);

    res.status(500).json({
      error: err.response?.data || err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});