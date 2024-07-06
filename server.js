const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const signupRoute = require("./src/routes/signup-route");

const port = 7000;
const app = express();

//Serve Swagger documentation

app.use("/signup", signupRoute);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//setup API routes

app.get("/", (req, res) => {
  res.send("Welcome to the API home").json(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port} on ${new Date()}`);
});
