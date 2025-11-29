CREATE TABLE book_notes (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    notes TEXT
);
INSERT INTO book_notes (book_id, notes)
VALUES (1, 'My full page notes about this book...');


CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    rating INT,
    date_added DATE
);
INSERT INTO books (title, author, genre, rating, date_added) VALUES
('The Art of Living and Dying', 'Osho', 'Philosophy / Spiritual', 7, '2025-11-28');


CREATE TABLE book_identifiers (
id SERIAL PRIMARY KEY,
book_id INT REFERENCES books(id),
identifier_type TEXT,
identifier_value TEXT
);
INSERT INTO book_identifiers (book_id, identifier_type, identifier_value) VALUES
(17, 'ISBN', '0553448196');

