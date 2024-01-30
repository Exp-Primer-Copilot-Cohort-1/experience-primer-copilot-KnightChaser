// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../services/authService');

router.post('/', auth, commentController.createComment);
router.get('/', commentController.getComments);
router.get('/:id', commentController.getCommentById);
router.put('/:id', auth, commentController.updateComment);
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;