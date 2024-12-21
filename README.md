# Blog Project: Assignment-3

## Overview
The goal of this assignment is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: Admin and User. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend includes secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

## Features

### User Roles
#### Admin:
- Will be created manually in the database with predefined credentials.
- Can delete any blog.
- Can block any user by updating a property `isBlocked`.
- Cannot update any blog.

#### User:
- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.
- Cannot perform admin actions.

### Authentication & Authorization
- **Authentication:** Users must log in to perform write, update, and delete operations.
- **Authorization:** Admin and User roles are differentiated and secured.

### Blog API
- A public API for reading blogs:
  - Includes blog title, content, author details, and other necessary information.
  - Supports search, sorting, and filtering functionalities.

## How to Run Locally

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)
- Install a package manager like npm or yarn.

### Steps to Run
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/blog_project
     JWT_SECRET=your_jwt_secret
     ```

4. **Run MongoDB Server**
   - Start MongoDB locally or provide a remote connection string in `MONGO_URI`.

5. **Start the Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - The server will run on `http://localhost:5000`.
   - Use an API client like Postman to test endpoints.

## Features Summary
- User registration and login with secure authentication.
- Role-based access control for Admin and User.
- CRUD operations for blogs.
- Public API with search, sort, and filter functionalities.
- Admin actions to manage users and blogs.

---

Let me know if you need further assistance or additional information to be included!

