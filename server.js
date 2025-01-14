// server.js
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Use default middlewares
server.use(middlewares);

// You can add custom routes here (if necessary)
server.get("/custom-route", (req, res) => {
  res.json({ message: "This is a custom route!" });
});

// Use the router for the db.json file
server.use(router);

// Start the server on the specified port (render uses a dynamic port in production)
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});