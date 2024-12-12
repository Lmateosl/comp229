News Aggregator App

A streamlined web application focused on news aggregation, allowing users to browse and bookmark curated news articles. The app ensures secure access through Firebase Authentication and provides a responsive design suitable for various devices.

Features

User Registration and Login: Secure account creation and login powered by Firebase Authentication.

Custom Tokens: Generates session tokens for authenticated users for enhanced security.

News Feeds: Fetches and displays curated articles from the NewsAPI.

Bookmarking: Save articles for future reference.

Responsive Design: Accessible on mobile, tablet, and desktop devices.

Tech Stack

Frontend

React: Component-based UI development.

Axios: HTTP client for API requests.

CSS/SCSS: Responsive and modern styling.

Backend

Node.js: JavaScript runtime for server-side logic.

Express.js: Framework for creating RESTful APIs.

Firebase Authentication: Secure user registration and login.

JWT: Generates secure session tokens for users.

APIs

NewsAPI: Fetches news articles from reliable sources.

Installation

Backend Setup

Clone the repository:

git clone https://github.com/<your-username>/news-app.git
cd news-app

Install dependencies:

npm install

Create a .env file with the required configuration:

NEWS_API_KEY=your_news_api_key_here
FIREBASE_API_KEY=your_firebase_api_key_here

Start the backend server:

npm start

Future Improvements

Enhance news categorization.

Add user preferences for personalized news feeds.

Implement advanced search functionality.



