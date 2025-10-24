<h1 align="center">🧠 ThinkBoard</h1>
<p align="center">A simple, full-stack note-taking app built with the <b>MERN stack</b>.</p>

---

## 🚀 Overview

ThinkBoard is a personal note-taking web app designed to help users create, edit, and organize their ideas in one place.

This project started as a YouTube tutorial to strengthen my full-stack fundamentals — and I’ve been extending it with new features like **user authentication**, **dashboard views**, and **cloud sync** to make it my own.

---

## 🛠️ Tech Stack

**Frontend:** React.js, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Additional:** Upstash Redis (for rate limiting), JWT, bcrypt  
**Deployment:** Render  

---

## ✨ Features

- ✅ Create, read, update, and delete notes  
- ✅ Responsive and clean UI built with TailwindCSS  
- ✅ RESTful API architecture with Express  
- ✅ Rate-limiting and secure backend  
- ✅ *Coming soon:* JWT-based authentication and user dashboards  

---

## 💡 Lessons Learned

- Structuring backend routes, controllers, and middleware cleanly  
- Protecting routes and managing tokens with JWT  
- Handling frontend-backend communication efficiently  
- Deploying a full-stack app on Render  

---

## 🔗 Live Demo

👉 [ThinkBoard on Render](https://mern-thinkboard-ymj3.onrender.com)

---

## 🧩 Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Matrix1463/thinkboard.git
cd thinkboard
```

### 2️⃣ Install dependencies
```bash
npm install
cd client && npm install
```

### 3️⃣ Set up environment variables in a .env file:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the app
```bash
npm run dev
```
---
