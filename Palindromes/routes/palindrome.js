const express = require('express');
const router = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/static", (req, res) => {
    res.render("palindrome/static", {});
});

router.get("/server", (req, res) => {
    res.render("palindrome/server", {});
});

router.post("/server", (req, res) => {
    
    let str = req.body.str;
    let result;

    try {
        result = palindrome.pali(str);
    } catch (e) {
        res.render("palindrome/server", { str: str, error: e });
        return;
    }
    //result = s.printCumRes(result);
    res.render("palindrome/server", { str: str, result: result });
});

module.exports = router;