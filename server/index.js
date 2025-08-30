const express = require("express");
const session = require("express-session");
const apiRoutes = require("./routes/apiRoutes");
require("dotenv").config();

const { fetchToken } = require("./routes/tokenService");

const app = express();
app.use(express.json());

// ✅ Session config (only once)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }, // secure: true in HTTPS
  })
);

// ✅ Middleware to fetch token and store in session
app.use(async (req, res, next) => {
  try {
    const domain = req.hostname;
    console.log("Request domain:::::", domain);

    let domaindataResponse = await fetchToken(domain);

    // Store token globally + per-session
    app.locals.appToken = domaindataResponse;
    req.session.appToken = domaindataResponse;

    console.log("Token stored in app.locals:", JSON.stringify(app.locals.appToken));
    next();
  } catch (err) {
    console.error("Token not available for domain:", req.hostname);
    res.status(500).json({ error: "Token not available" });
  }
});

// ✅ Use API routes
app.use("/api", apiRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
