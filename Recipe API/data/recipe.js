const mongoCollections = require("../config/mongoCollections");
const recipe = mongoCollections.recipe;
const uuid = require('node-uuid');
const comments = require ("./comments");
const promise = require("promise");

    
async function getAllRecipes() { 
        return recipe().then((recipeCollection) => {
            return recipeCollection.find({},{_id : 1 ,title : 1}).toArray();
        });
    }

        /* let recipes = await recipeCollection();
        let recipeList = [];
        let allRecipes = await recipes.find( ).toArray( );

        return allRecipes;
    }
*/
async function getRecipeById(id) {
    if(!id)
    {
        promise.reject("cannot find recipie with the given id")
    }
    return recipe().then((recipeCollection) => {
        return recipeCollection.findOne({_id: id},{_id : 1 , title : 1, ingredients : 1 , steps : 1, comments:1 }).then((post) => {
            if (!post)
                throw "Recipe not available";
            return post;
        });
    });
}

async function addRecipe(title,ingredients,steps) {
    if (typeof title !== "string")
        return Promise.reject("No title provided");

    if (!Array.isArray(ingredients)) {
        ingredients = [];
    }
    if (!Array.isArray(steps)) {
        steps = [];
    }
    
    return recipes().then((recipeCollection) => {
        
        let recipeNew = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };

        return recipeCollection.insertOne(recipeNew).then((newInsertInformation) => {
            return newInsertInformation.insertedId;
        }).then((recipeNewId) => {
            return this.getRecipeById(recipeNewId);
        });
    });
}


async function removeRecipe(id) {
    if(!id)
    {
        promise.reject("Recipe id not found")
    }
    return recipe().then((recipeCollection) => {
            return recipeCollection.removeOne({_id: id}).then((deleted) => {
                if (deleted.deletedCount === 0) {
                    throw(`Could not devare post with id of ${id}`)
                } else {
                     return "recipe deleted!";
                 }
            });
    });
}


async function updateRecipe(id, updateRecipe) {
    if(!id)
    {
        promise.reject("Given id can't be updated")
    }
    return recipe().then((recipeCollection) => {
            var updatedData = {};

        if (updateRecipe.ingredients) {
            updatedData.ingredients = updateRecipe.ingredients;
        }

        if (updateRecipe.title) {
            updatedData.title = updateRecipe.title;
        }

        if (updateRecipe.steps) {
            updatedData.steps = updateRecipe.steps;
        }

        let updateCommand = {
            $set: updatedData
        };

        return recipeCollection.updateOne({_id: id}, updateCommand).then((result) => {
            return this.getRecipeById(id);
        });
    });
}



module.exports = {getAllRecipes, getRecipeById, addRecipe, removeRecipe, updateRecipe};