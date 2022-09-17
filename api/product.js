const express = require("express");
const router = express.Router();
const db = require('./queries')

router.get("/", async (req, res) => {
    try {
        res.json(db.getSongs)
    } catch (error) {
        console.error(error)
        return res.status(500).send("sever boo")
    }
})

module.exports = router