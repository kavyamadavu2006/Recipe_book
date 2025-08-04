const UserModel = require('../model/user_model'); // Adjust the path as needed
const RecipeModel = require('../model/recipe_model'); // Adjust the path as needed
const SuggestionModel = require('../model/Suggestion_model'); // Adjust the path as needed

// Get total count of users
const getTotalUsers = async (req, res) => {
  try {
    const count = await UserModel.countDocuments();
    console.log('Total Users:', count); // Add logging
    res.json({ count });
  } catch (error) {
    console.error('Error fetching users count:', error); // Add logging
    res.status(500).json({ message: 'Error fetching users count', error });
  }
};

// Get total count of recipes
const getTotalRecipes = async (req, res) => {
  try {
    const count = await RecipeModel.countDocuments();
    console.log('Total Recipes:', count); // Add logging
    res.json({ count });
  } catch (error) {
    console.error('Error fetching recipes count:', error); // Add logging
    res.status(500).json({ message: 'Error fetching recipes count', error });
  }
};

// Get count of new recipes created today
const getNewRecipesToday = async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const count = await RecipeModel.countDocuments({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    console.log('New Recipes Today:', count); // Add logging

    res.json({ count });
  } catch (error) {
    console.error('Error fetching new recipes count:', error); // Add logging
    res.status(500).json({ message: 'Error fetching new recipes count', error });
  }
};

// Get total count of suggestions
const getTotalSuggestions = async (req, res) => {
  try {
    const count = await SuggestionModel.countDocuments();
    console.log('Total Suggestions:', count); // Add logging
    res.json({ count });
  } catch (error) {
    console.error('Error fetching suggestions count:', error); // Add logging
    res.status(500).json({ message: 'Error fetching suggestions count', error });
  }
};

module.exports = {
  getTotalUsers,
  getTotalRecipes,
  getNewRecipesToday,
  getTotalSuggestions
};
