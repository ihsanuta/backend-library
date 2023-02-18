import GetBooks from '../thirdparty/libraryThirdparty.js';
import Add,{Get} from '../data/data.js';

// function get All Products
export default async function GetBooksController(subjects, page = 1, limit = 10){
    try {
        let offset = (page - 1) * limit;
        const respBooks = await GetBooks(subjects, offset, limit);
        var books = [];
        for(const b of respBooks.works){
            let book = {
                "title": b.title,
                "author": b.authors,
                "editionNumber": b.cover_edition_key
            }
            books.push(book);
        }

        let res = {
            "status": "OK",
            "books": books
        }
        return res;
    } catch (error) {
        return error;
    }
}

export async function RentController(payload){
    var res ;
    if(!payload.name){
        throw new Error('name required');
    }else if(payload.name.length < 1){
        throw new Error('name required');
    }

    if(!payload.pickup_date){
        throw new Error('pickup date required');
    }else if(payload.pickup_date.length < 1){
        throw new Error('pickup date required');
    }

    if(!payload.books){
        throw new Error('books required');
    }else if(payload.books.length < 1){
        throw new Error('books required');
    }
    try {
        let req = {
            "name":payload.name,
            "pickup_date":payload.pickup_date,
            "books":payload.books,
        }

        const books = await Get();
        books.push(req);

        try {
            await Add(books)
            res = {
                "status": "OK",
                "data": req
            }
        } catch (error) {
            res = {
                "status":"Failed",
                "error": error.message()
            }
        }

        return res;
    } catch (error) {
        return error;
    }
}

export async function GetRentController(){
    try {
        var res;
        try {
            const books = await Get()
            res = {
                "status": "OK",
                "data": books
            }
        } catch (error) {
            res = {
                "status":"Failed",
                "error": error.message()
            }
        }

        return res;
    } catch (error) {
        return error;
    }
}