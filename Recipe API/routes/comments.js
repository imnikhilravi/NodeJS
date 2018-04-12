const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;
const recipeData = data.recipe;
const promise = require("promise");


router.get("/recipe/:recipeId", function (req, res) {
    var recipeId = req.params.recipeId;
    commentsData.getAllComments(recipeId).then(function (data) {
        var commentList = data.comments;
        var listOfComments = { comments: [] };
        var addcomment = function (id, comment, poster) {
            var newComment = { _id: id, recipeId: data._id, recipeTitle: data.title, name: comment, poster: poster };

            listOfComments.comments.push(newComment);
        };
        for (let i = 0; i < commentList.length; i++) {
            addcomment(commentList[i]._id, commentList[i].comment, commentList[i].poster);
        }
        res.status(200).json(listOfComments);
    }, function (error) {
        res.status(500).json({ error: error });
    });
});


router.get("/:recipeId", function (req, res) {
    var recipeId = req.params.recipeId;
    commentsData.getAllCommentsById(recipeId).then(function (data) {
        var commentList = data.comments;
        var listOfComments = { comments: [] };
        var addcomment = function (id, comment, poster) {
            var newComment = { _id: id, recipeId: data._id, recipeTitle: data.title, name: comment, poster: poster };

            listOfComments.comments.push(newComment);
        };

        addcomment(commentList[0]._id, commentList[0].comment, commentList[0].poster);

        res.status(200).json(newList);
    }, function (error) {
        res.status(500).json({ error: error });
    });
});


router.post("/:recipeId", (req, res) => {
    var commentData = req.body;

    commentsData.createComment(req.params.recipeId, commentData.poster, commentData.comment).then((newPost) => {
        res.json(newComm);
    }).catch((e) => {
        res.status(500).json({error: e});
    });
});

router.delete("/:id", (req, res) => {

    return commentsData.removeComment(req.params.id).then((deleted) => {
        res.json(deleted);
    }, (err) => {
        res.status(404).json({ error: "no comment found!!" });
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});


router.put("/:idRecipe/:idComment", (req, res) => {
    var updatedComment = req.body;

return commentsData. updateComment(req.params.idRecipe, req.params.idComment, updatedComment.poster, updatedComment.comment).then((commData) => {
        res.json(commData);
}, (err) => {
    res.sendStatus(500);
});
});



module.exports = router;