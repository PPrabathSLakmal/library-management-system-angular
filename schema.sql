CREATE TABLE IF NOT EXISTS member
(
    id      VARCHAR(10) PRIMARY KEY,
    name    VARCHAR(20) NOT NULL,
    address VARCHAR(50) NOT NULL,
    contact VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS book(
    isbn VARCHAR(10) PRIMARY KEY ,
    title VARCHAR(20) NOT NULL ,
    author VARCHAR(20) NOT NULL ,
    availability ENUM('available', 'issued') DEFAULT 'available'
);

CREATE TABLE IF NOT EXISTS book_member(
    book_isbn VARCHAR(10) PRIMARY KEY ,
    member_id VARCHAR(10) UNIQUE NOT NULL ,
    issued_date DATE NOT NULL ,
    return_date DATE NOT NULL
);
ALTER TABLE book_member ADD CONSTRAINT isbn_fk FOREIGN KEY (book_isbn) REFERENCES book(isbn);
ALTER TABLE book_member ADD CONSTRAINT memberId_fk FOREIGN KEY (member_id) REFERENCES member(id);
