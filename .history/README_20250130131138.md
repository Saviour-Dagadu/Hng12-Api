# HNG12 Public API

This is a simple public API developed for HNG12 that returns essential details, including a registered email, the current datetime in ISO 8601 format, and a GitHub repository link.

## Features
- Provides a JSON response containing:
  - Registered email
  - Current datetime in ISO 8601 format (UTC)
  - GitHub URL of the project repository
- Supports CORS for cross-origin requests
- Lightweight and fast response time (< 500ms)

## Technologies Used
- **Node.js** with **Express.js** for server implementation
- **CORS** for handling cross-origin requests
- **Dotenv** for environment variable management

## API Endpoint
### Base URL
```
https://your-deployed-url.com/
```

### GET /
Returns a JSON response with email, current datetime, and GitHub URL.

#### Response Format
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Example Request
```sh
curl -X GET https://your-deployed-url.com/
```

### Example Response
```json
{
  "email": "example@hng12.com",
  "current_datetime": "2025-01-30T12:45:00Z",
  "github_url": "https://github.com/yourusername/hng12-api"
}
```

## Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/hng12-api.git
   cd hng12-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and define the port (optional):
   ```sh
   PORT=3000
   ```
4. Run the server:
   ```sh
   node server.js
   ```
5. The API will be accessible at `http://localhost:3000/`

## Deployment
### Deploy to Vercel
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the API:
   ```sh
   vercel
   ```
3. Follow the instructions and obtain the deployment URL.

### Deploy to Render
1. Sign up on [Render](https://render.com/)
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Set **Build Command:** `npm install`
5. Set **Start Command:** `node server.js`
6. Deploy and get the public API URL

## Related Links
- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License
This project is open-source and available under the MIT License.

