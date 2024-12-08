# News Aggregator and Social Platform App

A feature-rich web application that combines news aggregation with social interaction. This app allows users to browse news, bookmark articles, share content, and engage in discussions. It uses Firebase Authentication for secure user management, ensuring safe and easy access to the platform.

## Features

- **User Registration and Login**: Secure account creation and login powered by Firebase Authentication.
- **Custom Tokens**: Generates session tokens for authenticated users for enhanced security.
- **News Feeds**: Fetches and displays curated articles from the [NewsAPI](https://newsapi.org/docs).
- **Bookmarking**: Save articles for future reference.
- **Social Sharing**: Share articles with other users on the platform.
- **Commenting System**: Engage with the community through discussions.
- **Responsive Design**: Accessible on mobile, tablet, and desktop devices.

## Tech Stack

### **Frontend**
- **React**: Component-based UI development.
- **Axios**: HTTP client for API requests.
- **CSS/SCSS**: Responsive and modern styling.

### **Backend**
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Framework for creating RESTful APIs.
- **Firebase Authentication**: Secure user registration and login.
- **JWT**: Generates secure session tokens for users.

### **APIs**
- **[NewsAPI](https://newsapi.org/docs)**: Fetches news articles from reliable sources.

## Installation

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/news-app.git
   cd news-app
