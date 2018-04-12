const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipe;
const promise = require("promise");


router.get("/", (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
    res.json(recipeList);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});


router.get("/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });
    });
});

router.post("/", (req, res) => {
    var recipeIngData = req.body;

    recipeData.addRecipe(recipeIngData.title, recipeIngData.ingredients, recipeIngData.steps).then((recipeNew) => {
        res.json(recipeNew);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});


router.put("/:id", (req, res) => {
    var updatedData = req.body;

    var getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.updateRecipe(req.params.id, updatedData).then((updatedRecipe) => {
            res.json(updatedRecipe);
        }).catch((e) => {
            res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "recipie not found" });
    });
});


router.delete("/:id", (req, res) => {
    var getRecipe = recipeData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipeData.removeRecipe(req.params.id).then(() => {
            res.sendStatus(200);
        }).catch((e) => {
            res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "recipie not found" });
    });
});

module.exports = router;