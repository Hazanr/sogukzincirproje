const db = require('../config/db');

const Depo = {
    getAll: (callback) => {

        return db.query('SELECT *, (toplam_kapasite_ton - mevcut_stok_ton) as bos_alan FROM depo', callback);
    },
    updateStok: (id, miktar, callback) => {
        // 'depo' tablosundaki stoğu günceller
        return db.query('UPDATE depo SET mevcut_stok_ton = mevcut_stok_ton + ? WHERE id = ?', [miktar, id], callback);
    }
};

module.exports = Depo;