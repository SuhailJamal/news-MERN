# Project Documentation

## Backend

### Folder Structure

- **connect**
  - `database.js`: Contains the MongoDB connection setup.
- **middleware**
  - `authMiddleware.js`: Middleware for authentication.
- **models**
  - `userModel.js`: Mongoose model for user schema.
- **routes**
  - `currentUser.js`: Route for fetching current user information.
  - `login.js`: Route for user login.
  - `signup.js`: Route for user signup.

### Dependencies

- `bcrypt`: For password hashing.
- `dotenv`: For environment variables.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: For creating and verifying JSON Web Tokens.
- `mongoose`: MongoDB object modeling tool.

### Authentication Flow

1. User signs up with email and password.
2. Password is hashed and stored securely in the database using bcrypt.
3. User information is stored in MongoDB.
4. User logs in with email and password.
5. Password is compared with the hashed password in the database.
6. If the password matches, a JSON Web Token (JWT) is generated and sent to the client.
7. JWT is included in subsequent requests for authentication.

## Frontend

### Folder Structure

- **src**
  - **components**
    - **Navbar**
      - `Navbar.jsx`: Component for the navigation bar.
    - **Footer**
      - `Footer.jsx`: Component for the footer.
    - **Login**
      - `Login.jsx`: Component for user login form.
  - **assets**: Contains image assets.
  - **pages**
    - `Home.jsx`: Home page component.
    - `Politics.jsx`: Politics page component.
    - `Games.jsx`: Games page component.
    - `Sports.jsx`: Sports page component.
  - `App.jsx`: Main application component.
  - `index.js`: Entry point of the application.

### Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-router-dom`: React bindings for React Router, used for routing in the application.
- `axios`: Promise-based HTTP client for making requests to the backend API.

### Routing

- `/`: Home page.
- `/politics`: Politics page.
- `/games`: Games page.
- `/sports`: Sports page.

### Components

- **Navbar**: Displays navigation links.
- **Footer**: Displays footer information.
- **Login**: Allows users to log in to the application.

## Deployment

The application can be deployed to a hosting service such as Heroku or Vercel for both the frontend and backend. Ensure that environment variables are properly configured for sensitive information such as database connection strings and JWT secrets.

## Future Improvements

- Implement user authentication with JWT.
- Add more features such as user registration, profile management, and password reset.
- Improve UI/UX design for better user experience.
- Implement error handling and validation for forms and user input.
- Write unit tests and integration tests for backend routes and frontend components.
