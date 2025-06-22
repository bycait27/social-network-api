# Social Network API

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database Models](#database-models)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Overview

A robust RESTful API for a social network application built with Node.js, Express.js, and MongoDB. This back-end service enables users to share thoughts, react to posts, and build friend networks. The API leverages MongoDB's flexibility for handling unstructured social media data and Mongoose ODM for elegant object modeling. 

## Features 

- **User Management:** Create, read, update, and delete user profiles
- **Thought Sharing:** Post, update, and delete thoughts (280 character limit)
- **Social Reactions:** React to thoughts with customizable reactions
- **Friend Networks:** Add and remove friends from user profiles
- **Data Relationships:** Seamless linking between users, thoughts, and reactions
- **Virtual Fields:** Automatic friend count and reaction count calculations
- **Seed Data:** Pre-populated database with sample users and thoughts

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:

```bash 
git clone git@github.com:bycait27/social-network-api.git 
cd social-network-api
```

2. Install dependencies:

```bash 
npm install 
```

3. Set up MongoDB:
- Ensure MongoDB is installed and running on your system 
- The app will connect to `mongodb://127.0.0.1:27017/studentsDB` by default 
- Alternatively, set the `MONGODB_URI` environment variable for custom connection 

4. Seed the database (optional but recommended):

```bash 
npm run seed 
```

5. Start the server:

```bash 
# development mode with auto-restart 
npm run dev 

# or production mode 
npm run start 
```

The server will start on `http://localhost:3001`

## Usage

### Development Workflow 

1. Start the development server:

```bash 
npm run dev 
```

2. Seed sample data (if needed):

```bash 
npm run seed 
```

3. Test API endpoints using tools like: 
- [Insomnia](https://docs.insomnia.rest/)
- [Postman](https://www.postman.com/)
- [Thunder Client (VS Code extension)](https://docs.thunderclient.com/)

### Demo Video

[Watch the API Demo]()

## API Routes 

### Users 

| Method | Endpoint | Description | 
| ------ | -------- | ----------- | 
| `GET`  | `/api/users` | Get all users | 
| `GET` | `/api/users/:userId` | Get single user by ID | 
| `POST` | `/api/users` | Create new user | 
| `PUT` | `/api/users/:userId` | Update user by ID | 
| `DELETE` | `/api/users/:userId` | Delete user and associated thoughts |

### Friends 

| Method | Endpoint | Description | 
| ------ | -------- | ----------- | 
| `POST` | `/api/users/:userId/friends/:friendId` | Add friend to user's friend list | 
| `DELETE` | `/api/users/:userId/friends/:friendId` | Remove friend from user's friend list |

### Thoughts 

| Method | Endpoint | Description | 
| ------ | -------- | ----------- | 
| `GET`  | `/api/thoughts` | Get all thoughts | 
| `GET` | `/api/thoughts/:thoughtId` | Get single thought by ID | 
| `POST` | `/api/thoughts` | Create new thought | 
| `PUT` | `/api/thoughts/:thoughtId` | Update thought by ID | 
| `DELETE` | `/api/thoughts/:thoughtId` | Delete thought |

### Reactions 

| Method | Endpoint | Description | 
| ------ | -------- | ----------- | 
| `POST` | `/api/thoughts/:thoughtId/reactions` | Add reaction to thought | 
| `DELETE` | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove reaction from thought |

### Request/Response Examples 

#### Create User 

```json 
POST /api/users 
{
  "username": "techuser123",
  "email": "techuser@example.com"
}
```

#### Create Thought 

```json 
POST /api/thoughts
{
  "thoughtText": "This is my first thought!",
  "username": "techuser123",
  "userId": "507f1f77bcf86cd799439011"
}
```

#### Add Reaction 

```json 
POST /api/thoughts/:thoughtId/reactions
{
  "reactionBody": "Great post!",
  "username": "frienduser"
}
```

## Database Models 

### User Model 

```javascript 
{
  username: String (required, unique, trimmed),
  email: String (required, unique, validated),
  thoughts: [ObjectId] (references Thought model),
  friends: [ObjectId] (references User model),
  friendCount: Virtual (calculated field)
}
```

### Thought Model 

```javascript 
{
  thoughtText: String (required, 1-280 characters),
  createdAt: Date (default: now),
  username: String (required),
  reactions: [Reaction Schema],
  reactionCount: Virtual (calculated field)
}
```

### Reaction Model 

```javascript 
{
  reactionId: ObjectId (auto-generated),
  reactionBody: String (required, max 280 characters),
  username: String (required),
  createdAt: Date (default: now)
}
```

## Technologies Used 

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Development:** Nodemon
- **Testing:** Insomnia/Postman recommended

## Testing 

### Manual Testing with Insomnia 

1. Install Insomnia from [insomnia.rest](https://insomnia.rest/) 

2. Import the provided collection or create requests manually:
- Set base URL to `http://localhost:3001`
- Test all CRUD operations for users, thoughts, and reactions
- Verify friend management functionality

3. Test scenarios:
- Create users and verify email validation
- Post thoughts and check character limits
- Add/remove friends and verify relationship updates
- Create reactions and test deletion
- Delete users and verify cascade deletion of thoughts

### Sample Test Data 

The seed file provides realistic test data including:

- 20 sample users with unique usernames and emails
- 10 thoughts with associated reactions
- Randomly generated social media content

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

see LICENSE file for more details

## Contact

**GitHub:** [@bycait27](https://github.com/bycait27)  
**Portfolio Website:** [caitlinash.io](https://caitlinash.io/)  
**LinkedIn:** [Caitlin Ash](https://www.linkedin.com/in/caitlin-ash/)  

---
*This project was originally created as part of my Full-Stack Developer Bootcamp program.*

