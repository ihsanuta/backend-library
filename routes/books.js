import GetBooksController, { RentController, GetRentController } from '../controller/bookController.js';

// function get All Products
export default async function Books(req, res){
    try {
        var page = 1;
        var limit = 10;
        if(!req.query.subjects){
            res.status(400).json({message: "Bad Request"})
        }
        if(req.query.page){
            page = req.query.page;
        }
        if(req.query.limit){
            limit = req.query.limit;
        }
        const books = await GetBooksController(req.query.subjects, page, limit);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function Rent(req, res){
    try {
        const books = await RentController(req.body);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function GetRents(req, res){
    try {
        const books = await GetRentController();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}