# Backend Server Setup

Node.js backend for Seamless Pipes & Tubes project.

## Installation

```bash
npm install
```

## Setup

1. Create `.env` file with your configuration (already created with defaults)
2. Update MongoDB URI and other secrets in `.env`

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload (nodemon)

## Folder Structure

```
src/
├── index.js           - Main server file
├── config/           - Configuration files
├── controllers/      - Business logic
├── models/           - Database schemas
├── middleware/       - Custom middleware
├── routes/           - API routes
└── utils/            - Utility functions
```

## Starting the Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server will run on http://localhost:5000 by default.

## Health Check

```bash
curl http://localhost:5000/api/health
```
