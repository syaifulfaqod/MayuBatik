# Mayu Batik Landing Page

Website landing page modern untuk tugas Digital Marketing dengan tema **"Digitalizing the Thread"** tentang optimasi aset visual batik.

## Teknologi
- **Next.js** (App Router)
- **Tailwind CSS v4** (Custom Design System)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Cara Menjalankan Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan mode pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

3. **Build untuk produksi:**
   ```bash
   npm run build
   ```

4. **Siap Deploy ke Vercel:**
   Project ini sudah menggunakan struktur standar Next.js yang kompatibel dengan Vercel. Anda tinggal menghubungkan repositori GitHub ke Vercel.

## Panduan Edit Konten

Semua bagian penting telah diberi komentar agar mudah diubah:

- **Gambar:** Cari komentar `// EDIT GAMBAR` di komponen dalam folder `src/components/`.
- **Video:** Cari komentar `// GANTI LINK VIDEO` di `src/components/VideoSection.tsx`.
- **Sosial Media:** Cari komentar `// EDIT LINK SOSIAL MEDIA` di `src/components/Footer.tsx`.
- **Metadata:** Anda dapat mengubah title dan deskripsi di `src/app/layout.tsx`.

## Struktur Project
- `src/app/`: File utama aplikasi dan routing.
- `src/components/`: Komponen UI modular (Hero, Navbar, Collection, dll).
- `src/app/globals.css`: Konfigurasi tema warna dan font (Tailwind v4).

---
*Dibuat untuk tugas Digital Marketing: Optimasi Aset Visual Mode Batik.*
