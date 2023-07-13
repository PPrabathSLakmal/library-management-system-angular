"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router1 = void 0;
const express_1 = __importDefault(require("express"));
const promise_mysql_1 = __importDefault(require("promise-mysql"));
exports.router1 = express_1.default.Router();
let pool;
(function init() {
    return __awaiter(this, void 0, void 0, function* () {
        pool = yield promise_mysql_1.default.createPool({
            host: 'localhost',
            port: 3306,
            database: 'library_app_angular',
            user: 'root',
            password: '122333',
            connectionLimit: 5
        });
    });
})();
exports.router1.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield pool.query("SELECT * FROM book");
    res.json(books);
}));
exports.router1.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookMember = req.body;
    const result = yield pool.query("INSERT INTO book_member(book_isbn, member_id, issed_date, return_date) VALUES (?,?,?,?)", [bookMember.bookIsbn, bookMember.memberId, bookMember.issedDate, bookMember.returnDate]);
    if (result.affectedRows == 1) {
        yield pool.query("UPDATE book SET availability=? WHERE isbn=?", ['issued', bookMember.bookIsbn]);
        res.sendStatus(201);
        return;
    }
    res.sendStatus(404);
}));
exports.router1.delete('/:isbm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query("DELETE FROM book_member WHERE isbm=?", [req.params.isbm]);
    if (result.affectedRows == 1) {
        yield pool.query("UPDATE book SET availability=? WHERE isbn=?", ['available', req.params.isbm]);
        res.sendStatus(204);
        return;
    }
    res.sendStatus(404);
}));
