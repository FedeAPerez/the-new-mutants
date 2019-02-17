const admin = require('firebase-admin');
const serviceAccount = require('../private.json');

const Firebase = {
    init: function() {
        if (admin.apps.length === 0) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: 'https://meli-challenge-f5e11.firebaseio.com'
            });
        }
    }
};

module.exports = Firebase;