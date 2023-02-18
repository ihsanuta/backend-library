import Books,{Rent, GetRents} from '../routes/books.js';
import {jest} from '@jest/globals'

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('Test GET books list Handlers', function () {
    test('response to get books with page limit', async () => {
        const req = { 
            "query": {
                "subjects" : "love",
                "limit" : 5,
                "page" : 1
            }
        };

        const res = mockResponse();
        try {
            await Books(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });

    test('response to get books without page limit', async () => {
        const req = { 
            "query": {
                "subjects" : "love",
            }
        };

        const res = mockResponse();
        try {
            await Books(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });

    test('response error not subjects', async () => {
        const req = { 
            "query": {}
        };

        const res = mockResponse();
        try {
            await Books(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });

});

describe('Test GET rents list Handlers', function(){
    test('response to get books with page limit', async () => {
        const req = {};
        const res = mockResponse();
        try {
            await GetRents(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    })
});

describe('Test Post rent data Handlers', function(){
    test('response to post rent ', async () => {
        const req = { 
            "body": {
                "name":"Emily Brontë",
                "pickup_date":"2022-01-04",
                "books":[
                    {
                        "title": "Wuthering Heights",
                        "author": [
                            {
                                "key": "/authors/OL4327048A",
                                "name": "Emily Brontë"
                            }
                        ],
                        "editionNumber": "OL38586477M"
                    }
                ]
            }
        };

        const res = mockResponse();
        try {
            await Rent(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });
    test('response to post rent without name ', async () => {
        const req = { 
            "body": {
                "pickup_date":"2022-01-04",
                "books":[
                    {
                        "title": "Wuthering Heights",
                        "author": [
                            {
                                "key": "/authors/OL4327048A",
                                "name": "Emily Brontë"
                            }
                        ],
                        "editionNumber": "OL38586477M"
                    }
                ]
            }
        };

        const res = mockResponse();
        try {
            await Rent(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });
    test('response to post rent without pickup date ', async () => {
        const req = { 
            "body": {
                "name":"Emily Brontë",
                "books":[
                    {
                        "title": "Wuthering Heights",
                        "author": [
                            {
                                "key": "/authors/OL4327048A",
                                "name": "Emily Brontë"
                            }
                        ],
                        "editionNumber": "OL38586477M"
                    }
                ]
            }
        };

        const res = mockResponse();
        try {
            await Rent(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });
    test('response to post rent books list ', async () => {
        const req = { 
            "body": {
                "name":"Emily Brontë",
                "pickup_date":"2022-01-04",
                "books":[]
            }
        };

        const res = mockResponse();
        try {
            await Rent(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        } catch (err) {
            expect(err).toEqual(new Error());
        }
    });
});