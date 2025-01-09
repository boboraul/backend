const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure db.json exists in the same folder as server.js
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000; // Use Render's PORT environment variable or default to 3000

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
