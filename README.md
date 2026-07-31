
# React Mini Project – Like/Unlike Card Component

## 📌 Project Overview

This project is a simple **React.js Mini Project** that demonstrates the use of **React Functional Components**, **Props**, **State**, and the **useState Hook**. The application displays multiple reusable card components with different movie titles passed as props. Each card contains a Like button that toggles between **Liked** and **Not Liked** states independently.

The project is designed to understand the basics of React component reusability and state management.

---

## 🎯 Objectives

- Build reusable React components.
- Pass data using Props.
- Manage component state using the `useState` Hook.
- Implement Like/Unlike functionality.
- Understand component rendering and React Hooks.

---

## ✨ Features

- Reusable Card Component
- Dynamic movie titles using Props
- Like/Unlike button
- Independent state for every card
- Conditional rendering using state
- Simple and responsive UI
- Demonstrates React Hooks (`useState` and `useEffect`)

---

## 🛠 Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3

---

## 📁 Project Structure

```
src/
│
├── App.js
├── index.js
├── styles.css
│
public/
│   index.html
│
package.json
README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/react-like-card.git
```

### Navigate to the project folder

```bash
cd react-like-card
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

---

## 📖 How to Use

1. Open the application.
2. Multiple movie cards are displayed.
3. Click the **Like 🤍** button.
4. The button changes to **❤️** indicating the card has been liked.
5. Click again to toggle back if implemented.
6. Each card maintains its own Like state.

---

## 🧩 Components

### App Component

- Root component of the application.
- Passes different movie titles as props to the Card component.

### Card Component

- Receives movie title through Props.
- Maintains Like/Unlike status using `useState`.
- Displays movie title and Like button.
- Updates UI dynamically based on state.

---

## 📚 React Concepts Used

- Functional Components
- Props
- useState Hook
- useEffect Hook
- Event Handling
- Conditional Rendering
- Component Reusability

---

## 📸 Sample Cards

- 3 Idiots
- Lagaan
- Saiyaara
- Mission Impossible - Fallout
- Pursuit of Happyness
- Mission Mangal

These movie titles are passed from the parent `App` component as props to reusable `Card` components. :contentReference[oaicite:0]{index=0}

---

## 🚀 Future Enhancements

- Add dislike button
- Store liked cards using Local Storage
- Display total likes
- Add movie posters
- Search and filter movies
- Responsive card layout using Bootstrap or Material UI
- Dark/Light mode

---

## 📦 Dependencies

- React 19
- React DOM
- React Scripts

The project is configured with React 19 and React Scripts for development and production builds. :contentReference[oaicite:1]{index=1}

---

## 👨‍💻 Learning Outcomes

After completing this project, you will understand:

- Creating reusable React components
- Passing data using Props
- Managing component state with `useState`
- Handling button click events
- Conditional rendering
- Basic React Hooks

---

## 👩‍💻 Author

**Ansari Farea Iqbal Ahmed**

Third Year B.E. Information Technology

---

## 📄 License

This project is created for educational purposes to learn React fundamentals and component-based development.
