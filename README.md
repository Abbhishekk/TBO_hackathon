# Travel Companion App

Welcome to the **Travel Companion app** – your intelligent travel planning assistant that simplifies trip planning and enhances your travel experience with real-time insights, booking integrations, and more!

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend (Python)](#backend-python)
  - [Node Server](#node-server)
  - [Frontend](#frontend)
- [Running the App](#running-the-app)
- [Contributing](#contributing)
- [License](#license)

## Overview
The **Travel Companion app** is designed to revolutionize the travel planning process by providing:

- **Expert-Level Insights**: AI-powered destination recommendations and hidden gems.
- **Real-Time Collaboration**: Seamless itinerary editing with live updates.
- **Integrated Booking**: Access to real-time hotel, transport, and activity booking.
- **Budget Tracking**: Real-time expense monitoring and cost estimation.

This project is built using multiple technologies across different layers, ensuring a robust and scalable solution for travel enthusiasts.

## Features
- **Drag-and-Drop Itinerary Builder**
- **Real-Time Collaboration via Socket.IO**
- **Automated Itinerary Optimization**
- **Expert Travel Insights & Personalized Recommendations (ChatGPT Integration)**
- **Real-Time Hotel Booking (TBO API)**
- **Cost Estimation & Budget Tracking**

## Tech Stack
- **Front-End**: React.js, TypeScript
- **Back-End**: Node.js, Express
- **AI/ML**: Python (Recommendation Engine, NLP for Insights)
- **Databases**: MongoDB (NoSQL)
- **APIs**: Travel APIs (for booking, maps, destination data)
- **Cloud Services**: WebSocket.IO
- **DataSets**: ChatGPT, Unsplash

## Installation

### Backend (Python)
1. **Create a Virtual Environment**:

   ```bash
   python -m venv myenv
2. **Activate the Virtual Environment**:
    1. on Windows
   ```bash
   myenv\Scripts\activate

3. **Install Requirements:**
    ```bash
    pip install -r requirements.txt

4. **Run the Server**
    ```bash
    python app.py

### Backend (Node server)
1. **Navigate to the Node Server Directory**:

   ```bash
   cd path/to/backend
2. **Install Dependencies**:
   ```bash
   npm install

3. **Run the Server in Development Mode**
    ```bash
    npm run dev

### Frontend 
1. **Navigate to the Node Server Directory**:

   ```bash
   cd path/to/frontend
2. **Install Dependencies**:
   ```bash
   npm install
3. **Run the Server in Development Mode**
    ```bash
    npm run dev
## Running the App

1. **Start the Python Backend**:
   - Activate your Python virtual environment.
   - Run `python server.py`.

2. **Start the Node Server**:
   - Navigate to the Node server directory.
   - Run `npm run dev`.

3. **Start the Frontend**:
   - Navigate to the Frontend directory.
   - Run `npm run dev` (or your designated command).

Once all services are running, you can access the Travel Companion app via your browser.

## Contributing

We welcome contributions to enhance the Travel Companion app! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a pull request for review.

For any issues or feature requests, please open an issue on the repository.

## License

This project is licensed under the License. See the LICENSE file for details.
