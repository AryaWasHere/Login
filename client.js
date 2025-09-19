// client.js (laptop pertama)
const axios = require('axios');

// ganti IP_LAPTOP_KEDUA dengan IP Laptop kedua di jaringan
const SERVER_URL = 'http://192.168.100.32:3000/save-data';

// data yang mau dikirim
const data = {
    nama: 'Websiteku',
    waktu: new Date(),
    konten: 'ini data dari laptop pertama'
};

axios.post(SERVER_URL, data)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error('Gagal kirim data:', err);
    });

    console.log('Mulai mengirim data...');
    axios.post(SERVER_URL, data)
        .then(res => {
            console.log('Response dari server:', res.data);
        })
        .catch(err => {
            console.error('Gagal kirim data:', err.message);
});