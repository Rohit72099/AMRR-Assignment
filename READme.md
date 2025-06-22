# 🛍️ AMRR-Assignment: Item Catalog Web Application

A modern full-stack web application built for the **AMRR TechSols Assignment** using **React**, **Node.js**, and **MongoDB**. It allows users to:

- 📥 Add new items with name, type, description, and multiple images
- 🖼️ View all items in a clean, responsive UI
- 🔍 Click to view item details in a modal with an image carousel
- 📧 Send enquiry emails
- 💾 Fetch and upload items to a MongoDB database

---

## 🚀 Features

- Add item with form (name, type, description, cover image & additional images)
- View all items on a responsive grid layout
- Modal popup with full item details and carousel
- Send enquiry email on button click
- Backend API to upload/fetch item data from MongoDB
- Professional responsive styling with plain CSS

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router
- Plain CSS (no Tailwind/Bootstrap)

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Nodemailer (for email feature)

---

## 📁 Project Structure

```text
AMRR-Assignment/
│
├── backend/              # Express + MongoDB
│   ├── models/Item.js
│   ├── routes/items.js
│   ├── routes/email.js
│   ├── server.js
│   └── .env
│
├── frontend/             # React App
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── AddItem.jsx
│   │   │   └── ViewItems.jsx
│   │   ├── components/
│   │   │   └── ItemModal.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│
├── README.md



---

## ⚙️ Setup Instructions

### 📦 1. Clone the Repository

```bash
git clone https://github.com/your-username/AMRR-Assignment.git
cd AMRR-Assignment

cd item-api-server
npm install


MONGO_URI=your_mongodb_connection_string

start backend
node server.js

## frontend Setup
cd ../item-manager
npm install
npm start

| Method | Route          | Description        |
| ------ | -------------- | ------------------ |
| GET    | `/api/items`   | Fetch all items    |
| POST   | `/api/items`   | Add a new item     |



