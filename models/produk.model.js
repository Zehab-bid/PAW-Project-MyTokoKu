// Data masih hardcode. Nanti bagian ini diganti query database,
// sementara controller dan route tidak perlu diubah.
const daftarProduk = [
  {
    id: 1,
    nama: 'Laptop Gaming ASUS ROG',
    kategori: 'Elektronik',
    deskripsi: 'Sangrai performa tinggi dengan prosesor Intel Core i7 dan GPU NVIDIA RTX 4060.',
    harga: 15000000,
    stok: 10,
  },
  {
    id: 2,
    nama: 'Smartphone Samsung Galaxy S24',
    kategori: 'Elektronik',
    deskripsi: 'Smartphone flagship dengan kamera 200MP dan layar Dynamic AMOLED 2X.',
    harga: 12000000,
    stok: 25,
  },
  {
    id: 3,
    nama: 'Mechanical Keyboard Keychron K2',
    kategori: 'Aksesoris',
    deskripsi: 'Keyboard mekanikal wireless dengan switch Gateron Brown.',
    harga: 1200000,
    stok: 50,
  },
  {
    id: 4,
    nama: 'Monitor LG UltraWide 34"',
    kategori: 'Elektronik',
    deskripsi: 'Monitor ultrawide dengan resolusi 3440x1440 dan refresh rate 144Hz.',
    harga: 6500000,
    stok: 8,
  },
  {
    id: 5,
    nama: 'Mouse Logitech MX Master 3',
    kategori: 'Aksesoris',
    deskripsi: 'Mouse ergonomis premium dengan sensor MagSpeed electromagnetic.',
    harga: 850000,
    stok: 35,
  },
  {
    id: 6,
    nama: 'Headset Sony WH-1000XM5',
    kategori: 'Audio',
    deskripsi: 'Headset over-ear dengan noise cancelling terbaik di kelasnya.',
    harga: 4500000,
    stok: 15,
  },
];

const ProdukModel = {
  getAll() {
    return daftarProduk;
  },
};

module.exports = ProdukModel;
