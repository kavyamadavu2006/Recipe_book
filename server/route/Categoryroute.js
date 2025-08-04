const upload = require('../Middleware/Upload');
const express = require('express');
const router = express.Router();

const { AddCategory,Getcategory,UpdateCategory,DeleteCategory } = require('../controller/Categorycontroller'); // Corrected the import

router.post('/AddCategory',upload.single('category_image'), AddCategory);
router.get('/GetCategory', Getcategory); // Corrected to match the controller function name
router.put('/UpdateCategory/:id', UpdateCategory);
router.delete('/DeleteCategory/:id', DeleteCategory);

// router.delete('/Deletecat/:id', DeleteUser);
// router.put('/Updatecat/:id', Updateuser);

module.exports = router;
