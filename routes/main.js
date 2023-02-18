import { Router } from 'express';
import Books, { Rent, GetRents }  from './books.js'

const router = Router();

router.get('/books', Books)
router.get('/rents', GetRents )
router.post('/rent',Rent)

export default router;