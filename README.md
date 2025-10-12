# Mern-Auth

A MERN stack (MongoDB, Express, React, Node.js) based authentication system. Provides user registration, login, and protected routes using JWT. Also demonstrates basic email testing using Mailtrap.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  

---

## Features

- User registration (with email verification placeholder)  
- User login with JWT authentication  
- Protected routes (accessible only with valid JWT token)  
- Basic UI with React to register, login, and show protected content  
- Error handling and form validation  

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Frontend:** React.js  
- **Authentication:** JWT (JSON Web Tokens)  
- **Email testing:** Mailtrap  
- **Others:** dotenv, bcrypt, axios  

---

## Project Structure
```
Mern-Auth/
├── backend/ # Server, routes, controllers, models
├── frontend/ # React application
├── .env.local # Local environment vars
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- npm 
- MongoDB instance (local or cloud)  
- Mailtrap account (for email testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhay-0103/Mern-Auth.git
   cd Mern-Auth
   
2. Install dependencies for both backend & frontend:

```bash
cd backend
npm install
```
```
cd ../frontend
npm install
Environment Variables
Create a .env (or .env.local) file in the backend (and frontend if needed) with contents similar to:
```
# backend/.env
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password
If the frontend requires API base URLs or similar, add them in appropriate .env files.
```

 # Running the App
In two separate terminals:

```bash
# Terminal 1: start backend
cd backend
npm run start
# or nodemon: npm run dev

# Terminal 2: start frontend
cd frontend
npm start
The React app will usually run on http://localhost:3000 and backend on some port (e.g. 5000).
```

# API Endpoints
- Method	Endpoint	Purpose	Protected?
- POST	/api/auth/register	Register a new user	No
- POST	/api/auth/login	User login, returns JWT	No
- GET	/api/auth/user	Fetch current user info	Yes (JWT required)

- (Adjust according to actual routes in the code)

# Usage

- On the frontend, go to the Register page → sign up

- Then login → receive token stored (e.g. localStorage)

- Use token to access protected routes or user info

- To test email features, use Mailtrap dashboard

# Folder Structure (Detailed)
```arduino
Copy code
backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
└── server.js

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
```
# Contributing

- Contributions are welcome!

# Steps:

- Fork the repo

- Create a new branch (e.g. feature/my-feature)

- Make your changes & commit them

- Push to your fork and open Pull Request

- Please ensure code is cleaned up and includes comments where necessary.
