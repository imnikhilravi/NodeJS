const mongoCollections = require("../config/mongoCollections");
const recipeCollection = mongoCollections.recipe;
const recipe = require("./recipe");
const uuid = require("node-uuid");
const promise = require("promise");

async function getAllComments(id) {

        if (id == undefined)
            return Promise.reject("id not found");
        return recipeCollection().then((commData) => {
                return commData.find({ _id: id }, { comments: 1, title: 1 }).limit(1).toArray().then(function (recipeList) {
                    if (recipeList.length == 0) return Promise.reject("comment could not be found " + id);
                        return recipeList[0];

                    });
        });
    }

async function getAllCommentsById(id) {

        return recipeCollection().then((commData) => {
                return commData.find({ 'comments._id': id }, { comments: { $elemMatch: { _id: id } }, title: 1 }).toArray().then(function (recipeList) {
                    if (recipeList.length == 0) return Promise.reject("comment could not be found " + id);

                    return recipeList[0];

                });
        });
    }

async function createComment(id, poster, comment) {
        if (!poster)
            return Promise.reject("poster not provided");

        if (!comment)
            return Promise.reject("comment not provided");

        console.log(poster, comment, id);
        return recipeCollection().then((commentData) => {
            let id= uuid.v4();
            let updateComment = {
                $addToSet:
                {
                    comments: {
                        _id: id ,
                        poster: poster,
                        comment: comment
                    }
                }
            };

            return commentData.updateOne({_id: id}, updateComment).then(() => {
                return this.getAllCommentsById(id);
            }, (err) => {
                return Promise.reject("Cannot update");
            });
        });

    }
   
async function removeComment(id) {
        return recipeCollection().then((commData) => {

                return commData.update({ 'comments._id': id }, { $pull: { 'comments': { '_id': id } } }).then(() => {
                    return "Comment deleted!";
                }, (error) => {
                     return Promise.reject("Comment could not be deleted!");
                });
        });

    }
   
async function updateComment(recipeId, commentId, posterData, commentData) {
        return recipeCollection().then((data) => {

                if (!dataOfComment && !dataOfPoster) {
                    return data.update({ _id: recipeId, 'comments._id': commentId }, {
                        $set: {
                            'comments.$.poster': posterData, 'comments.$.comment': commentData
                        }
                    }).then(() => {
                        return this.getAllCommentsById(idOfComment);

                    });
                }

                else if (dataOfComment && dataOfPoster == undefined) {
                    return data.update({ _id: recipeId, 'comments._id': commentId }, {
                        $set: {
                            'comments.$.comment': commentData
                        }
                    }).then(() => {
                        return this.getAllCommentsById(commentId);

                    });
                }
                else {
                    return data.update({ _id: recipeId, 'comments._id': commentId }, {
                        $set: {
                            'comments.$.poster': posterData
                        }
                    }).then(() => {
                        return this.getAllCommentsById(commentId);

                    });
                }
        });
    }



module.exports = {getAllComments, getAllCommentsById, createComment, removeComment, updateComment}