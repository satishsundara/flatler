const express = require("express");
const router = express.Router();
const { fetchToken, fetchSpringData } = require("./tokenService");
const { default: axios } = require("axios");

// Initialize token in session
router.post("/init-token", async (req, res) => {
  const { domain } = req.body;
  if (!domain) return res.status(400).json({ error: "Domain is required" });

  try {
    const token = await fetchToken(domain);
    req.session.apiToken = token;
    res.json({ message: "Token stored in session" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch token" });
  }
});

// Fetch Spring Boot data using session token
router.get("/data", async (req, res) => {
  const appToken = req.session.appToken;
  if (!appToken) return res.status(401).json({ error: "Token not initialized" });
  const response = await axios.get("http://localhost:8080/api/app/data", {
    headers: {
      'X-APP-TOKEN': appToken.tokenValue,
      'X-APP-DOMAIN': appToken.domain
    }
  });
  console.log("token fetch ::::", response.data)

  try {
    const data = await fetchSpringData(token);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});


router.post("/postproperty", async (req, res) => {
  const payload = req.body;

  try {
    console.log(JSON.stringify(payload));
    const appToken = req.session.appToken;
    if (!appToken) return res.status(401).json({ error: "Token not initialized" });
    // Forward request to Spring Boot API
    const response = await axios.post(
      "http://localhost:8080/api/flats/saveflat",
      payload,
      {
        headers: {
          'X-APP-TOKEN': appToken.tokenValue,
          'X-APP-DOMAIN': appToken.domain
        }
      }
    );

    // Send Spring Boot response back to React
    res.json({
      message: "Property saved successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("Error calling Spring Boot:", error.message);
    res.status(500).json({
      message: "Error saving property",
      error: error.message,
    });
  }
});

module.exports = router;
