import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "capital_quiz_db_user",
  host: "dpg-d48e1lodl3ps73bb8en0-a.singapore-postgres.render.com",
  database: "capital_quiz_db",
  password: "3wzJxOQO3aP65WLqmbCvEUJfVV8dgQhd",
  port: 5432,
  ssl: {
    rejectUnauthorized: false // important for Render
  }
});

const app = express();
const port = process.env.PORT || 3000;

// Connect to DB
db.connect(err => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Database connected successfully!");
  }
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let books = [];

app.get("/", async (req, res) => {
  let query = "SELECT * FROM books JOIN book_identifiers ON books.id = book_identifiers.book_id";
  const params = [];

  // Filter by genre if provided
  if (req.query.genre) {
    query += " WHERE books.genre = $1";
    params.push(req.query.genre);
  }

  // Sort by query parameter if provided
  if (req.query.sort === "newest") {
    query += params.length ? " ORDER BY books.id DESC" : " ORDER BY books.id DESC";
  } else if (req.query.sort === "rating") {
    query += params.length ? " ORDER BY books.rating DESC" : " ORDER BY books.rating DESC";
  } else if (req.query.sort === "title") {
    query += " ORDER BY books.title ASC"; 
  } else {
    query += params.length ? "" : " ORDER BY books.id ASC"; // default
  }

  const result = await db.query(query, params);
  books = result.rows;

  res.render("index.ejs", { books: books });
});


app.get("/book/:id", async (req, res) => {
  const bookId = req.params.id;

  const result = await db.query(
      "SELECT * FROM books LEFT JOIN book_identifiers ON books.id = book_identifiers.book_id LEFT JOIN book_notes ON books.id = book_notes.book_id WHERE books.id = $1", 
      [bookId]
  );

  const book = result.rows[0];
  res.render("book_note.ejs", { book: book });
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// https://covers.openlibrary.org/b/ISBN/9780307593313-M.jpg