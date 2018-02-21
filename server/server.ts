import express from 'express';

const app = express();

app.get("/", (request, response) => {
  response.send("Hello TypeScript + Express!");
  console.log("Client browsed to /!");
});

app.listen(3000, () => {
  console.log("Express is listening on port 3000...");
});

