# Bon Appetit

**Bon Appetit** is a restaurant web application where users can browse the menu, order food, and leave reviews. It features two types of user roles: **normal users** and **admins**, each with their own dashboards and permissions. The application is built with a focus on security and user experience, utilizing **JWT** for secure authentication and offering login options via Google or email/password.

[Live Preview](https://bistro-boss-a7a0e.web.app/)

## Login Credentials

### User Account
- **Email:** [normaluser@gmail.com](mailto:normaluser@gmail.com)  
- **Password:** `user123`

### Admin Account
- **Email:** [admin123@gmail.com](mailto:admin123@gmail.com)  
- **Password:** `admin123`

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Roles and Permissions](#roles-and-permissions)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse the restaurant's menu.
- **Normal Users**:  
  - Add food to the cart and place orders.
  - View order history and payment records.
  - Leave reviews on ordered items.
- **Admin Users**:  
  - Add, update, or remove food items from the menu.
  - View all registered users.
  - Promote users to admin.
- Secure JWT authentication and login via Google or email/password.

## Tech Stack

- **Frontend**: React, JavaScript, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, Firebase (Google Authentication)
- **Database**: MongoDB
- **Deployment**: Firebase

## Roles and Permissions

### Normal User
- View the menu.
- Add items to the cart.
- Place orders and view payment history.
- Submit reviews for ordered items.

### Admin
- Manage food items (add, update, delete).
- View a list of all registered users.
- Promote users to admin.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bistro-boss.git
2. Navigate to the project directory:
   ```bash
   cd bistro-boss
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory and add your environment variables (e.g., MongoDB URI, JWT secret, Firebase credentials).
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
5. Start the backend server:
   ```bash
   nodemon index.js
6. Start the frontend:
   ```bash
   npm run dev
