const express = require('express');
const router = express.Router();
const turf = require('@turf/turf');

// Set of 50 randomly spread lines
const lines = [
  {
    id: 'L01',
    start: [-74.0386542, 40.7302174],
    end: [-74.038756, 40.7295611]
  },
  // Include other lines here...
];

// POST /api/intersections
router.post('/', (req, res) => {
  const { linestring } = req.body;

  // Perform validation on the linestring
  if (!linestring || linestring.type !== 'LineString' || !linestring.coordinates || !Array.isArray(linestring.coordinates)) {
    // Invalid linestring format
    return res.status(400).json({ error: 'Invalid linestring format' });
  }

  // Log the incoming request
  console.log('Incoming request:', req.body);

  // Calculate intersections
  const intersectingLineIds = [];
  for (const line of lines) {
    const lineStart = turf.point(line.start);
    const lineEnd = turf.point(line.end);
    const linestringFeature = turf.lineString(linestring.coordinates);
    const intersects = turf.booleanIntersects(lineStart, lineEnd, linestringFeature);
    if (intersects) {
      intersectingLineIds.push(line.id);
    }
  }

  // Process the intersection results and return the appropriate response
  if (intersectingLineIds.length === 0) {
    // No intersections found
    res.status(200).json({ intersections: [] });
  } else {
    // Intersections found
    res.status(200).json({ intersections: intersectingLineIds });
  }
});

module.exports = router;
