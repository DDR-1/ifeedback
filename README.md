# Feedback Application

The Feedback Application is a web-based system designed to collect and manage user feedback. It consists of a React front-end for user interaction, a Node.js and Express back-end for handling requests, and a MongoDB database to store feedback data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Features

- Users can submit feedback with a description and rating.
- Feedback entries are stored in a MongoDB or MSQL database for easy retrieval and management.
- User-friendly React interface for submitting and viewing feedback.
- RESTful API built with Node.js and Express for handling feedback operations.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DDR-1/iFeedback
   cd feedback-app
   ```
2. Install server dependencies:

    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

## Configuration
### Server Configuration

Rename .env.example in the server directory to .env and provide the necessary configuration options, such as the MongoDB connection URI.

### Client Configuration

Open client/src/config.js and update the API_BASE_URL to point to your server's API endpoint.

## Usage
1. Start the server:

    ```bash
    cd server
    npm start
    ```
This will start the Express server on port 3001 by default.

2. Start the client:

    ```bash
    cd client
    npm start
    ```

This will start the React development server on port 3000 and automatically open a web browser to view the application.

## Endpoints
GET /backend/getSubmissions: retrieve submissions.\
POST /backend/submitQuestions: Submit new feedback.\
POST /backend/submitQuestions: Submit new additional questions.\

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.
   