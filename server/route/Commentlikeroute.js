const express = require('express');
const { addCommentLike, getCommentsByRecipeId, updateLike } = require('../controller/Commentlikecontroller');
const router = express.Router();

// Define your routes using router
router.post('/like', addCommentLike);
router.get('/recipe/:recipeId', getCommentsByRecipeId);
router.post('/updateLike', updateLike); // Changed the path to match router

module.exports = router;
