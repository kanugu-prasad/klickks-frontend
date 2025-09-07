# Klickks Frontend

This is the frontend for the Klickks project, built with **React** and **React Router**.

## Features

- User registration and login
- Dashboard with user information
- Protected routes (redirects to login if not authenticated)
- Modern UI with gradient backgrounds

## Tech Stack

- React 19
- React Router DOM v5
- CSS for styling
- Fetch API for backend communication

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd klickks-project/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

### Folder Structure

```
src/
  components/
    Dashboard/
      index.js
      index.css
    Login/
      index.js
      index.css
    Register/
      index.js
      index.css
  App.js
  App.css
  index.js
```

### Environment Variables

If you use environment variables, create a `.env` file in the root directory.

### Notes

- The frontend expects the backend API to be running at `https://klickks-backend-1-iigm.onrender.com`.
- Make sure CORS is enabled on your backend for local development.

## Scripts

- `npm start` — Start the development server
- `npm run build` — Build for production
- `npm test` — Run tests



---

**Made with ❤️ for the Klickks
