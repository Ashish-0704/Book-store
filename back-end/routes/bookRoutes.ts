import express, { Request, Response } from "express";
import { Book } from "../models/bookModel";

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const books = await Book.find({});
        return res.status(200).json({ count: books.length, data: books });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

router.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).send(book);
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

router.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please fill all the fields' });            
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result)
        {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book updated successfully' });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

router.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) {
            return res.status(400).json({ message: 'Please fill all the fields' });            
        }
        const newBook = { title, author, publishYear };
        const result = await Book.create(newBook);
        return res.status(201).send(result);
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result)
        {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

export default router;