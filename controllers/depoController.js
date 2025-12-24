const Depo = require('../models/depoModel');

exports.getDepolar = (req, res) => {
    Depo.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.updateStok = (req, res) => {
    const { id, miktar } = req.body;
    Depo.updateStok(id, miktar, (err, result) => {
        if (err) {
            // Trigger hatası (Kapasite doluluğu) buraya düşer
            return res.status(400).json({ error: err.sqlMessage });
        }
        res.json({ message: "Stok başarıyla güncellendi!" });
    });
};