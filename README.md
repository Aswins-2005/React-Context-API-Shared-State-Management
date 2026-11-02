# React Context API – Shared State Management

## 📌 About the Project

This project demonstrates how to use the **React Context API** to share state between components without passing props through every level of the component tree.

It features reusable card and button components with a shared counter that updates whenever any button is clicked.

## 🚀 Features

- **Context API:** Shares state across multiple components.
- **useContext Hook:** Accesses context values from nested components.
- **useState Hook:** Manages the counter state.
- **Reusable Components:** Uses separate Card and Button components.
- **Interactive Counter:** All buttons update the same counter.
- **Responsive UI:** Uses CSS Flexbox and media queries for responsive layouts.
- **Component-Based Architecture:** Organizes the project into reusable components.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Context.jsx
│   ├── button/
│   │   └── Button.jsx
│   └── card/
│       └── Card.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project folder

```bash
cd <your-project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🧠 Concepts Learned

- Creating a context with `createContext()`
- Sharing values through `Context.Provider`
- Accessing shared values using `useContext()`
- Managing state with `useState()`
- Updating state from nested components
- Building reusable React components
- Understanding prop drilling and Context API

## 👨‍💻 Author

**Aswin**

B.Tech – Computer Science and Business Systems

GitHub: [Aswins-2005](https://github.com/Aswins-2005)

## 📄 License

This project is open-source and available for learning and educational purposes.
