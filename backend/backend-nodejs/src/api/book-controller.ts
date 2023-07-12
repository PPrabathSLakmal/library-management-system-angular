import express,{json} from "express";
import mysql,{Pool} from "promise-mysql";


export const router = express.Router();
let pool:Pool;

(async function init(){
    pool = await mysql.createPool({
        host:'localhost',
        port: 3306,
        database: 'library_app_angular',
        user:'root',
        password: '122333',
        connectionLimit:5
    });
})();

router.get('/',async (req, res)=>{
    const books = await pool.query("SELECT * FROM book");
    res.json(books);
});

router.post('/',async (req,res)=>{
   const book = req.body as Book;
   const result =await pool.query("INSERT INTO book (isbn,title,author) VALUES (?,?,?)",[book.isbn, book.title, book.author]);
   book.availability = 'available';
   res.status(201).json(book);
});
router.patch('/:isbn',async (req,res)=>{
    const book = (req.body as Book);
    const result =await pool.query("UPDATE book SET title=?, author=?, availability=? WHERE isbn=?",[ book.title, book.author,book.availability, req.params.isbn]);
    res.sendStatus(result.affectedRows?204:404);
});

router.delete('/:isbn',async (req,res)=>{
    const result = await pool.query("DELETE FROM book WHERE isbm=?",[req.params.isbn]);
    res.sendStatus(result.affectedRows?204:404);
});