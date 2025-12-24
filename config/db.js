const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soguk_zincir_ybs'
});

db.connect((err) => {
    if (err) console.log("Bağlantı Hatası: " + err);
    else console.log("Süper! Veritabanına bağlandık.");
});

module.exports = db;