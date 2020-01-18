const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getByID,
    insert,
    update,
    remove
}


function get() {
    return db('accounts');
}

function getByID(id) {
    return db('accounts')
        .where({ id })
        .first();
}

function insert(account) {
    return db('accounts')
        .insert(account)
        .then(acc => {
            return getByID(acc[0]);
        });        
}

function update(id, changes) {
    return db('accounts')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('accounts')
        .where('id', id)
        .del();
}