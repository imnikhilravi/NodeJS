const recipeRoutes = require("./recipe");
const commentsRoutes = require("./comments");

const constructorMethod = (app) => {
    app.use("/recipe", recipeRoutes);
    app.use("/comments", commentsRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
})
};

module.exports = constructorMethod;