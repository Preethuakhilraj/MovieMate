const express = require('express');
const router = express.Router();
const Model = require('../model/moviemodel'); // Ensure the correct path to your model file

require('../connection/connection'); // Ensure the correct path to your connection file

router.get('/movies', async (req, res) => {
    try {
        const movies = await Model.find();
        console.log(movies)
        res.status(200).json(movies);
    } catch (err) {
        console.error('Error retrieving dashboards:', err);
        res.status(500).json({ message: 'Failed to retrieve dashboards', error: err.message });
    }
});

module.exports = router;
