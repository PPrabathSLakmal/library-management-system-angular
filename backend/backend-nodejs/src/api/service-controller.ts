import express from 'express'
import mysql, { Pool } from 'promise-mysql'

export const router1 =express.Router();

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

router1.get('/',async (req, res)=>{
    const books = await pool.query("SELECT * FROM book");
    res.json(books);
});
router1.post('/',async (req, res)=>{
    const bookMember = req.body as BookMember;
    const result = await pool.query("INSERT INTO book_member(book_isbn, member_id, issed_date, return_date) VALUES (?,?,?,?)",[bookMember.bookIsbn, bookMember.memberId,bookMember.issedDate, bookMember.returnDate]);
    if (result.affectedRows==1){
        await pool.query("UPDATE book SET availability=? WHERE isbn=?",[ 'issued' ,bookMember.bookIsbn]);
        res.sendStatus(201);
        return;
    }
    res.sendStatus(404);
});
router1.delete('/:isbm',async (req, res)=>{
    const result = await pool.query("DELETE FROM book_member WHERE isbm=?",[req.params.isbm]);
    if (result.affectedRows==1){
        await pool.query("UPDATE book SET availability=? WHERE isbn=?",[ 'available' ,req.params.isbm]);
        res.sendStatus(204);
        return;
    }
    res.sendStatus(404);
});
