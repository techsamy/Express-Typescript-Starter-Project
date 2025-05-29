import express from "express";
const app = express();
const PORT = process.env.PORT || 3000; 

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});