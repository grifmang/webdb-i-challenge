const express = require('express');
const account = require('./accountModel');

const router = express.Router();

router.get('/', (req, res) => {
    account.get()
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong.' })
    })
})

router.get('/:id', (req, res) => {
    if (req.params.id) {
        const { id } = req.params;
        account.getByID(id)
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ error: "Something went wrong." })
        })
    }
})

router.delete('/:id', (req, res) => {
    account.remove(req.params.id)
    .then(response => {
        return res.status(200).json({ message: "Account removed." })
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ error: "Something went wrong." })
    })
})

router.post('/', (req, res) => {
    account.insert(req.body)
    .then(response => {
        return res.status(201).json(response);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ error: "Error adding account." })
    })
})

router.put('/:id', (req, res) => {
    if (req.params.id) {
        const { id } = req.params;
        account.update(id, req.body)
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ error: "Error editing account." })
        })
    }
})

module.exports = router;