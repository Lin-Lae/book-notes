# Book Notes 📚

A simple and efficient web application for managing and displaying book notes.  
Built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**.

Check it live here: [Book Notes](https://booknotes-4a2v.onrender.com/)

---

## Features
- Display book details: title, author, genre, and rating  
- Filter books by genre  
- Sort books by newest, rating, or alphabetical order  
- Dynamic “total books” uploaded  
- Clean and minimal user interface  

---

## 💻 Run Locally

### 1️⃣ Clone this repository
```bash
git clone (https://github.com/Lin-Lae/book-notes)
cd Book Notes
```

### 3️⃣ Install dependencies
npm install

### 4️⃣ Start the server
node index.js

### 5️⃣ Open in your browser
Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## Folder Structure
```text
book-notes/
│
├── queries.sql                 # Database schema / seed
├── .gitignore
├── package.json
├── package-lock.json
├── .env                        # Environment variables
├── index.js                    # Express server
│
├── public/
│   └── main.css                # Stylesheet
│
└── views/
    ├── index.ejs               # Main book listing page
    └── book_note.ejs           # Individual book detail page
```

---

## Author

Made with ❤️ by Lin

---

## License  
This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).
