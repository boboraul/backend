const jsonServer = require('./node_modules/json-server'); // Import json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure db.json exists in the same directory
const middlewares = jsonServer.defaults();

server.use(middlewares); // Use default middlewares
server.use(router); // Use router with db.json

// Start the server
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});