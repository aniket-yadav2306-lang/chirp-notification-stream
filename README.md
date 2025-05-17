
# Chirp Notification Service

A modern notification delivery system with support for Email, SMS, and In-app notifications.

## Features

- **Multiple Notification Types**: Support for Email, SMS, and In-app notifications with distinct visual indicators
- **Real-time Notifications**: Simulated real-time notification delivery
- **Notification Management**: View, mark as read, and create new notifications
- **Responsive Design**: Works on desktop and mobile devices

## Technical Implementation

This project simulates a notification API with these endpoints:

- **Send a Notification** (POST /notifications)
- **Get User Notifications** (GET /users/{id}/notifications)
- **Mark as Read** (PUT /notifications/{id}/read)
- **Mark All as Read** (PUT /users/{id}/notifications/read)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

- `src/components/` - UI components 
- `src/services/` - API service layer
- `src/types/` - TypeScript type definitions
- `src/pages/` - Application pages

## Assumptions Made

- For this demo, we're using a mock API with in-memory storage
- A single user with ID "user-123" is used for demonstration
- In a real implementation, authentication would be required
- Error handling and retries would be more robust in production

## Future Enhancements

- **Queue Integration**: Implement RabbitMQ or Kafka for processing notifications
- **Retry Mechanism**: Add retry logic for failed notifications
- **User Preferences**: Allow users to customize notification settings
- **Real Backend**: Replace mock API with a real backend service
- **Real-time Updates**: Implement WebSockets for instant notification delivery

## License

This project is licensed under the MIT License - see the LICENSE file for details.
