const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController');


const upload = require('../config/uploadConfig');


router.get('/', (req,res) => {
  blogController.index(req, res);
})

router.get('/profile', (req,res) => {
    blogController.profile(req, res);
})

router.post('/profile', upload.single('profilePicture'), (req,res) => {
    blogController.updateProfile(req, res);
});

module.exports = router;

