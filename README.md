# Todo App

This is a simple Todo App developed as part of an internship project with TechNet Cloud. The application allows users to add, edit, and delete tasks, and stores data in Firebase Realtime Database.

## Project Overview

The Todo App provides a user-friendly interface for managing daily tasks. It features:

- **Task Addition**: Users can add new tasks.
- **Task Deletion**: Users can delete tasks.
- **Real-time Updates**: The app listens to the Firebase Realtime Database for changes and updates the task list in real-time.

## Features

- **Add Task**: Enter a task in the input field and click "Add Task" to add it to the list.
- **Delete Task**: Click the "Delete" button next to a task to remove it from the list.
- **Real-time Sync**: Tasks are synchronized in real-time using Firebase Realtime Database.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling of the web page.
- **JavaScript**: Logic and interactivity.
- **Firebase**: Backend service for real-time data storage and synchronization.

## Firebase Configuration

The project uses Firebase for real-time database functionality. The Firebase configuration is stored in `App.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};



```plaintext
├── public
│   ├── index.html
│   ├── style.css
├── .firebase
├── .firebaserc
├── firebase.json
├── firestore.indexes.json
├── package-lock.json
├── package.json
├── App.js
├── renderTask.js

