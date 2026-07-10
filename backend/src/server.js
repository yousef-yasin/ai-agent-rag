import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Agent Backend is running",
    status: "success"
  });
});

app.get("/health", (req, res) => {
  res.json({
    server: "running",
    agent: "not connected",
    rag: "not connected"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});