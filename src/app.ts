import express from "express";

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

export default app;
