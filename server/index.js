const express = require('express');
const cors = require('cors');
const dbConnection = require('./db');

const app = express();
const PORTNO = 5000;
app.use(cors());
app.use(express.json());

dbConnection();

app.get('/hai', (req, res) => {
    res.send("hello");
});

app.use("/api/user", require('./route/Userroute'));
app.use("/api/Category", require('./route/Categoryroute'));
app.use("/api/recipe", require('./route/Reciperoute'));
app.use("/api/Suggestion", require('./route/Suggestionroute'));
app.use("/api/Commentlike", require('./route/Commentlikeroute'));
app.use("/api/admin", require('./route/Adminroute'));
app.use("/api/dashboard", require('./route/dashboardRoutes'));
app.use("/api/image/", express.static("./Uploads"));
// Assuming you are using Express.js
app.get('/api/comments/:recipeId', async (req, res) => {
    const { recipeId } = req.params;
    try {
      const comments = await Comment.find({ recipeId });
      res.json(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  });
  

app.listen(PORTNO, () => {
    console.log(`Server is on portno: ${PORTNO}`);
});
