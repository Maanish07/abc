import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello node ,heyeydyhdgd ");
});

const port = process.env.PORT | 3333;
app.listen(port, () => {
  console.log("app is listining  on port :", port);
});
