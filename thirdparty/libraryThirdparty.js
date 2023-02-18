import axios from 'axios';

export default async function GetBooks (subjects, offset = 0, limit = 10){
    const books = await axios.get(`http://openlibrary.org/subjects/${subjects}.json?limit=${limit}&offset${offset}`)
    return books.data;
}
