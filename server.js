import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000; // Use dynamic PORT from Render

// Enable CORS for all routes
app.use(cors());

// API endpoint to fetch emojis
app.get("/api/emojis", async (req, res) => {
  try {
    const response = await fetch("https://emoji.gg/api"); // Fetch data from the API
    const data = await response.json(); // Parse JSON response
    res.json(data); // Send data to the client
  } catch (error) {
    console.error("Error fetching emojis:", error);
    res.status(500).json({ error: "Failed to fetch emojis" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
