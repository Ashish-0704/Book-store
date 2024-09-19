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
const express_1 = __importDefault(require("express"));
const bookModel_1 = require("../models/bookModel");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.Book.find({});
        return res.status(200).json({ count: books.length, data: books });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield bookModel_1.Book.findById(id);
        return res.status(200).send(book);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }
        const { id } = req.params;
        const result = yield bookModel_1.Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }
        const newBook = { title, author, publishYear };
        const result = yield bookModel_1.Book.create(newBook);
        return res.status(201).send(result);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield bookModel_1.Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book deleted successfully' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
