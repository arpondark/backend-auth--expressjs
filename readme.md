# Auth-Express Authentication System

A robust authentication backend system built with Express.js that provides secure user registration and login functionality.

## Features

- User registration with validation
- Secure login with JWT authentication
- Input validation using Joi
- Password hashing with bcrypt
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- NPM or Yarn

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Auth-expresss-/backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=8080
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication

- **POST /auth/signup** - Register a new user
  - Request body:
  ```json
   { "name": "User Name", 
   "email": "user@example.com", 
   "password": "securepassword" 
   }
   ```

- **POST /auth/login** - User login
  - Request body: 
  ```json
  { 
    "email": "user@example.com",
   "password": "securepassword" 
  }
  ```
  
  - Returns: JWT token for authentication


## Project Structure

```
├── index.js            # Entry point
├── Controllers/
│   └── AuthController.js    # Authentication controller logic
├── Middlewares/
│   └── AuthValidation.js    # Request validation middleware
├── Models/
│   ├── db.js           # Database connection
│   └── user.js         # User model schema
└── Routes/
    └── AuthRouter.js   # Authentication routes
```

## Dependencies

- express - Web framework for Node.js
- mongoose - MongoDB object modeling
- jsonwebtoken - JWT implementation
- bcrypt - Password hashing
- joi - Request validation
- dotenv - Environment variable management
- cors - Cross-origin resource sharing

## Author

MD SHAZAN MAHMUD ARPON

## License

ISC