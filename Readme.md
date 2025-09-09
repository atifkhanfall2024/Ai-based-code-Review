
# 🧑‍💻 AI-Based Code Reviewer

An intelligent **AI-powered code reviewer** built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and **OpenAI API**.
This application allows developers to paste or write their code in a web-based editor and get **instant AI feedback** on code quality, bugs, best practices, and improvements.

---

## ✨ Features

* 🔍 **AI-Powered Code Review** – Analyze code using OpenAI API for readability, bugs, and optimization.
* 🎨 **Interactive Code Editor** – Built with React + CodeMirror/Monaco editor for a smooth coding experience.
* 📊 **Detailed Suggestions** – Highlights issues, performance tips, and clean code recommendations.
* 🔐 **Secure Authentication** – User login/signup with JWT (optional).
* 💾 **History Tracking** – Save past reviews in MongoDB for future reference.
* 🚀 **Deployment Ready** – Optimized for production on platforms like Vercel, Netlify, and AWS.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS, CodeMirror / Monaco Editor
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose ORM)
**AI Integration:** OpenAI API
**Other Tools:** Postman, Git/GitHub, dotenv, JWT

---

## 📂 Project Structure

```
ai-code-reviewer/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components (Editor, ReviewResults, etc.)
│   │   ├── pages/          # Pages (Home, Login, Dashboard)
│   │   └── App.js
│   └── package.json
│
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Logic for handling requests
│   ├── models/             # MongoDB schemas
│   ├── server.js           # Entry point
│   └── package.json
│
├── .env                    # Environment variables
├── README.md               # Project documentation
└── package.json            # Root dependencies
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Setup backend (Express + MongoDB)

```bash
cd server
npm install
```

Create a `.env` file in `server/` with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

### 3. Setup frontend (React)

```bash
cd client
npm install
npm start
```

### 4. Open in Browser

Frontend: [http://localhost:3000](http://localhost:3000)
Backend API: [http://localhost:5000](http://localhost:5000)

---

## 🚀 Deployment

* **Frontend:** Deploy on Netlify/Vercel.
* **Backend:** Deploy on Render/AWS/Heroku.
* **Database:** MongoDB Atlas.




## 🧠 Future Improvements

* Multi-language code support (Python, C++, Java, etc.)
* Inline code annotations with AI suggestions
* Team collaboration features
* Export reviews as PDF/Markdown

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Open a Pull Request


