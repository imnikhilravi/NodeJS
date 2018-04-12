const users = require("../data/users.js").users;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt-nodejs");

const constructorMethod = (app) => {
    app.use(cookieParser());

    app.use(function(req, res, next) {
        if(req.cookies.session) {
            const expiresAt = new Date();
            expiresAt.setHours(expiresAt.getHours() + 1);
            res.cookie("session", req.cookies.session, {expires: expiresAt });
            req.user = JSON.parse(req.cookies.session);
        }
        next();
    });

    app.get("/private", (req, res) => {
        if(req.user)
            res.render("private/static", {user: req.user});
        else
            res.redirect("/");
    });

    app.get("/", (req, res) => {
        if(req.user)
            res.redirect("/private");
        else
            res.render("login/static", {});
    });

    app.post("/login", (req, res, next) => {
        requestedUser = null;
        for(i=0; i<users.length; i++)
        {
            user = users[i];
            if(user.username == req.body.username)
            {
                requestedUser = user;
                break;
            }
        }
        if(requestedUser == null){
            res.render("login/static", {error: "Username incorrect!"});
        }
        else 
            bcrypt.compare(req.body.password, requestedUser.hashedPassword, (error, result) => {
                if (result === true){
                    user = {username: requestedUser.username, firstName: requestedUser.firstName, lastName: requestedUser.lastName, Profession: requestedUser.Profession, Bio: requestedUser.Bio};
                    const expiresAt = new Date();
                    expiresAt.setHours(expiresAt.getHours() + 1);
                    res.cookie("session", JSON.stringify(user), {expires: expiresAt});
                    res.render("private/static", {user:user});
                }
                else
                    res.render("login/static", {username: requestedUser.username, error: "Password incorrect!"});
            }); 
    });  

}

module.exports = constructorMethod;