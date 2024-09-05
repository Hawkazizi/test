import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/4353", (req, res) => res.send("Express on Vercel"));
app.get("/35345", (req, res) => res.send("Express on Vercel"));

export default app;
