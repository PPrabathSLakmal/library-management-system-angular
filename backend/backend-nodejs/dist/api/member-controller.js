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
exports.router2 = void 0;
const express_1 = __importDefault(require("express"));
const promise_mysql_1 = __importDefault(require("promise-mysql"));
exports.router2 = express_1.default.Router();
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
exports.router2.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield pool.query("SELECT * FROM member");
    res.json(members);
}));
exports.router2.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const member = req.body;
    const result = yield pool.query("INSERT INTO member (id,name,address, contact) VALUES (?,?,?,?)", [member.id, member.name, member.address, member.contact]);
    res.status(201).json(member);
}));
exports.router2.patch('/:memberId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const member = req.body;
    const result = yield pool.query("UPDATE member SET name=?, address=?, contact=? WHERE id=?", [member.name, member.address, member.contact, req.params.memberId]);
    res.sendStatus(result.affectedRows ? 204 : 404);
}));
exports.router2.delete('/:memberId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pool.query("DELETE FROM member WHERE id=?", [req.params.memberId]);
    res.sendStatus(result.affectedRows ? 204 : 404);
}));
