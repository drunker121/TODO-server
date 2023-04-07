const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

require("dotenv").config();

const { TODO } = require('../model/userDetails');

router.get('/' , (req, res) => {
    res.send(`Server is live here`);
});

router.post('/', async (req, res) => {
    const {task, description} = req.body;

    if ( !task || !description ) { 
        return res.status(422).json({error: "Please fill the entries"});
    }

    try {

        const todo = new TODO({ task, description});

        await todo.save();

        res.status(201).json({ message: "Task Added successfully" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;