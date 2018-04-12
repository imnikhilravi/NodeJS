const aboutRoutes = require("./about");
const eduRoutes = require("./education");
const storyRoutes = require("./story");

const constructorMethod = (app) => {
    app.use("/about", aboutRoutes);
    app.use("/education", eduRoutes);
    app.use("/story", storyRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;
