const axios = require("axios");

async function fetchToken(domain) {
  const response = await axios.post(
    "http://localhost:8080/api/tokens/token",
    { domain },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log(response.data)
  return response.data; // assuming { token: "..." }
}

async function fetchSpringData(token) {
  const response = await axios.get("http://localhost:8080/api/app/data", {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log("token fetch ::::", response.data)
  return response.data;
}

module.exports = { fetchToken, fetchSpringData };
