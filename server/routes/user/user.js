const express = require('express')
const router = express.Router()


router.get('/');
router.post('/');
router.delete('/');
router.patch('/');




router.get('/:_id/product');
router.post('/:_id/product');
router.delete('/:_id/product');
router.patch('/:_id/product');



module.exports.user = router;