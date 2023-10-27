import express from 'express';

const port = 3000;
const host = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello from your remote container!\n");
});

app.listen(port, host);
