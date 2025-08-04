// Commentlikecontroller.js
const CommentLike = require('../model/Commentlike_model');

const addCommentLike = async (req, res) => {
  try {
    const { rating, comment, like, recipeid } = req.body;

    console.log('Request body:', req.body); // Log the request body for debugging

    if (!rating || !comment || !recipeid) {
      throw new Error('Missing required fields');
    }

    const newCommentLike = new CommentLike({
      rating,
      comment,
      like,
      recipeid,
      // userid,
    });

    await newCommentLike.save();
    res.status(201).json(newCommentLike);
  } catch (error) {
    console.error('Error saving comment like:', error);
    res.status(500).json({ error: error.message });
  }
};

const getCommentsByRecipeId = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const comments = await CommentLike.find({ recipeid: recipeId });

    if (!comments) {
      return res.status(404).json({ message: 'No comments found for this recipe.' });
    }

    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

const updateLike = async (req, res) => {
  try {
    const { commentId, userid } = req.body;
    
    // Check if the user has already liked this comment
    const existingLike = await CommentLike.findOne({ commentId, userid });
    
    if (existingLike) {
      // If user has already liked, remove the like
      await CommentLike.deleteOne({ _id: existingLike._id });
      return res.status(200).json({ message: 'Like removed', likeCount: await CommentLike.countDocuments({ commentId }) });
    }
    
    // Add a new like
    const newLike = new CommentLike({ commentId, userid });
    await newLike.save();
    res.status(201).json({ message: 'Like added', likeCount: await CommentLike.countDocuments({ commentId }) });
  } catch (error) {
    console.error('Error updating like:', error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { addCommentLike,getCommentsByRecipeId,updateLike};
