const express = require('express');
const app = express();
const port = 3000;

const intersectionsRouter = require('./routes/intersections');

app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});

// API authentication middleware
app.use((req, res, next) => {
  const authToken = req.headers['authorization'];
  // Perform authentication logic here based on the authToken
  // If authentication fails, return appropriate error response
  next();
});

app.use('/api/intersections', intersectionsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
