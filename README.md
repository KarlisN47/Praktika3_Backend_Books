# Book Management API

## Project Overview
This project is a RESTful API for managing books and users, using role-based authentication (JWT).

### Features:
1. **User Authentication**: Admin and regular user roles.
2. **Book Management**: View, add, update, and delete books.
3. **Database**: PostgreSQL local database.

## Requirements
- Node.js (v16 or later)
- PostgreSQL (installed and configured locally)

## How to Start

1. **Clone the project**:
   ```bash
   git clone https://github.com/KarlisN47/Praktika3_Backend_Books
   cd Praktika3_Backend_Books
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a PostgreSQL database**:
   Log in to the PostgreSQL CLI and create a database:
   ```sql
   CREATE DATABASE book_management;
   ```

4. **Edit the `.env` file**:
   Enter your PostgreSQL connection details in the `.env` file.

5. **Start the server**:
   ```bash
   npm start
   ```

## API Documentation
### Endpoints
#### **Authentication**
- `POST /auth/login` - Login to obtain a JWT.

#### **Books**
- COMING SOON: Book management features.

## Testing
Use Postman or another API testing tool to test JWT and API functionality.
