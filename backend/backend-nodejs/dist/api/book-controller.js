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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const promise_mysql_1 = __importDefault(require("promise-mysql"));
exports.router = express_1.default.Router();
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
exports.router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield pool.query("SELECT * FROM book");
    res.json(books);
}));
exports.router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const result = yield pool.query("INSERT INTO book (isbn,title,author) VALUES (?,?,?)", [book.isbn, book.title, book.author]);
    book.availability = 'available';
    res.status(201).json(book);
}));
exports.router.patch('/:isbn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const result = yield pool.query("UPDATE book SET title=?, author=?, availability=? WHERE isbn=?", [book.title, book.author, book.availability, req.params.isbn]);
    res.sendStatus(result.affectedRows ? 204 : 404);
}));
exports.router.delete('/:isbn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query("DELETE FROM book WHERE isbm=?", [req.params.isbn]);
    res.sendStatus(result.affectedRows ? 204 : 404);
}));
