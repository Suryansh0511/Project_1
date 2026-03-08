# 🚀 Resume Dashboard Web Application

A full-stack web application that provides secure authentication, user profile management, resume uploads, and a dashboard interface for users.

This project uses **React.js (frontend)** and **Node.js + Express + PostgreSQL (backend)** with **JWT authentication**.

---

# 📌 Features

### 🔐 Authentication
- User Signup
- User Login
- JWT Token Authentication
- Protected Routes
- Logout functionality

### 👤 User Dashboard
- Sidebar navigation
- Home page
- Profile page
- Resume Upload
- Resume Analysis (UI ready)
- Information page

### 📂 Resume Upload System
- Upload resumes (PDF / DOC / DOCX)
- Files stored in server
- Metadata stored in PostgreSQL
- Resumes linked to user profile

### 🧑 Profile Page
- Displays user information
- Shows uploaded resumes

---

# 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Sequelize ORM
- Multer (file uploads)

### Database
- PostgreSQL

### Authentication
- JSON Web Token (JWT)
- bcryptjs

---

# 📁 Project Structure

Project_1
│
├── Backend
│ ├── config
│ │ └── db.js
│ │
│ ├── middleware
│ │ └── authMiddleware.js
│ │
│ ├── models
│ │ ├── User.js
│ │ └── Resume.js
│ │
│ ├── routes
│ │ ├── Auth.js
│ │ ├── upload.js
│ │ └── profile.js
│ │
│ ├── uploads
│ │
│ ├── server.js
│ └── .env
│
├── Login (Frontend)
│ ├── src
│ │ ├── components
│ │ │ ├── Login
│ │ │ ├── Dashboard
│ │ │ ├── Profile
│ │ │ ├── Upload
│ │ │ └── Sidebar
│ │ │
│ │ ├── App.js
│ │ └── index.js
│ │
│ └── package.json