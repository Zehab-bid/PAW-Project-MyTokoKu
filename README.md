# PAW Project — Week 7
**Integrasi Frontend, REST API, dan Middleware Logger**

Aplikasi web berbasis Node.js + Express.js dengan arsitektur MVC, view engine EJS, dan Tailwind CSS.

---

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan server (development dengan nodemon)
npm run dev

# Atau jalankan langsung
npm start
```

Server berjalan di: **http://localhost:3001**

---

## 🌐 Halaman & Endpoint

| Route | Keterangan |
|---|---|
| `GET /` | Halaman beranda |
| `GET /produk` | Halaman daftar produk (EJS view) |
| `GET /api/status` | Status server (JSON) |
| `GET /api/produk` | Daftar produk (JSON) |

---

## 📁 Struktur Folder

```
project/
├── config/
│   └── app.config.js        # Konfigurasi aplikasi
├── models/
│   └── produk.model.js      # Data produk (static array)
├── middlewares/
│   └── logger.middleware.js # Middleware logger request HTTP
├── controllers/
│   ├── home.controller.js   # Controller halaman beranda
│   ├── produk.controller.js # Controller produk (API & view)
│   └── status.controller.js # Controller status server
├── routes/
│   ├── api.routes.js        # Route endpoint REST API
│   └── web.routes.js        # Route halaman web
├── views/
│   ├── partials/
│   │   ├── header.ejs       # Partial header & navbar
│   │   └── footer.ejs       # Partial footer
│   ├── index.ejs            # Halaman beranda
│   └── produk.ejs           # Halaman daftar produk
├── utils/
│   └── formatter.js         # Fungsi utilitas formatting
├── app.js                   # Entry point aplikasi
└── package.json
```

---

## 🛠️ Teknologi

- **Backend**: Node.js + Express.js
- **View Engine**: EJS
- **CSS Framework**: Tailwind CSS (CDN)
- **Arsitektur**: MVC (Model-View-Controller)

---

## 📋 Fitur

- ✅ Halaman frontend dengan EJS + Tailwind CSS
- ✅ Endpoint `GET /api/status` — status server (JSON)
- ✅ Endpoint `GET /api/produk` — daftar produk (JSON)
- ✅ Middleware logger mencatat method, path, status, dan timestamp
- ✅ Arsitektur MVC dengan pembagian tanggung jawab yang jelas
- ✅ Data produk dikelola melalui Model (static array)
