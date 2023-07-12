import express,{json} from "express";
import mysql,{Pool} from "promise-mysql";


export const router2 = express.Router();
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

router2.get('/',async (req, res)=>{
    const members = await pool.query("SELECT * FROM member");
    res.json(members);
});

router2.post('/',async (req,res)=>{
    const member = req.body as Member;
    const result =await pool.query("INSERT INTO member (id,name,address, contact) VALUES (?,?,?,?)",[member.id, member.name, member.address, member.contact]);
    res.status(201).json(member);
});
router2.patch('/:memberId',async (req,res)=>{
    const member = (req.body as Member);
    const result =await pool.query("UPDATE member SET name=?, address=?, contact=? WHERE id=?",[member.name, member.address, member.contact, req.params.memberId]);
    res.sendStatus(result.affectedRows?204:404);
});

router2.delete('/:memberId',async (req,res)=>{
    const result = await pool.query("DELETE FROM member WHERE id=?",[req.params.memberId]);
    res.sendStatus(result.affectedRows?204:404);
});