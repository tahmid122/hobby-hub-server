# <img src="https://i.ibb.co/B2yXL3vd/logo1.png" height="60px" width="60px"/> HobbyHub Backend

The **HobbyHub Backend** is the server-side application powering the HobbyHub platform — a community-based app where users can create, join, and manage hobby groups. This backend provides RESTful APIs for all core features such as group creation, retrieval, updating, and deletion.

---

## 🔗 Client Repository

👉 [HobbyHub Client Repository](https://github.com/tahmid122/hobby-hub)

---

## 🚀 Features

- 🌐 RESTful API using Express.js
- 🔐 Secure environment variable handling with dotenv
- 🌍 Cross-Origin Resource Sharing (CORS) enabled
- 🗃️ MongoDB-based data storage (using MongoDB Atlas)
- ✅ Full CRUD operations for group management
- 🔍 Query support for fetching user-specific groups via email

---

## 🛠️ Technologies Used

| Technology | Version | Description                |
| ---------- | ------- | -------------------------- |
| Node.js    | 18+     | JavaScript runtime         |
| Express.js | ^5.1.0  | Web framework for Node.js  |
| MongoDB    | ^6.16.0 | NoSQL database             |
| dotenv     | ^16.5.0 | Load environment variables |
| cors       | ^2.8.5  | Enable CORS                |
| nodemon    | ^3.1.10 | Auto-restarting dev server |

---

## 📦 API Endpoints

### Group Routes

| Method | Endpoint              | Description                              |
| ------ | --------------------- | ---------------------------------------- |
| GET    | `/groups`             | Get all groups                           |
| GET    | `/groups/:id`         | Get a specific group by ID               |
| GET    | `/user-groups/:email` | Get all groups created by a user (email) |
| POST   | `/groups`             | Create a new group                       |
| PUT    | `/groups/:id`         | Update an existing group by ID           |
| DELETE | `/groups/:id`         | Delete a group by ID                     |

---

## ⚙️ Getting Started Locally

### 📋 Prerequisites

- Node.js installed (v18 or later)
- MongoDB Atlas URI (with a valid username and password)

### 📁 Clone the Repository

```bash
git clone https://github.com/tahmid122/hobby-hub-server.git
cd hobbyhub-server
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
```

### ▶️ Run the Server

```bash
npm start
```

Server will be running on: [http://localhost:3000](http://localhost:3000)

---

## 📄 License

This project is open-source and available for personal or educational use.

---

## 👤 Author

- **Name:** Tahmid Alam
- **GitHub:** [@tahmid122](https://github.com/tahmid122)
- **Email:** <mdtahmidalam122@gmail.com>
