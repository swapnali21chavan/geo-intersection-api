# Intersections API

This API is designed to find intersections between a given linestring and a set of 50 randomly spread lines on the plane.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- Express.js (v4 or above)
- @turf/turf package

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

### Setup

1. Run the following command to install the required dependencies:


2. Start the server by running the following command:


The server will start running on `http://localhost:3000`.

## API Endpoints

### POST /api/intersections

This endpoint accepts a linestring in GeoJSON format and returns the intersections with the set of 50 lines.

#### Request

- URL: `http://localhost:3000/api/intersections`
- Method: POST
- Headers:
- Content-Type: application/json
- Body:


#### Response

- If there are no intersections, the response will be an empty array `[]`.
- If there are intersections, the response will contain an array of intersecting line ids.

#### Example

Using cURL:


#### Error Handling

- If the linestring format is invalid, the API will return a 400 Bad Request error.
- If the request body or auth header is missing or malformed, the API will return a 400 Bad Request error.
- If there is an internal server error, the API will return a 500 Internal Server Error.



