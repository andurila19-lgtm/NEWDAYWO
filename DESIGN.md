# DESIGN SYSTEM & BRAND STRATEGY DOCUMENT
**Brand:** New Day Wedding Organizer & Planner (Yogyakarta)  
**Ecosystem:** New Day WO × New Day Gallery  
**Version:** 2.0 (Full Bilingual ID/EN Support & Production Architecture)

---

## 1. Brand Strategy & Positioning

### 1.1 Brand Identity
* **Tagline (ID):** *"Jadikan moment pernikahanmu indah dan tak terlupakan."*
* **Tagline (EN):** *"Make your wedding moment beautiful and unforgettable."*
* **Brand Essence:** Tenang (Tranquil), Hangat (Warm), Elegan (Sophisticated), Terorganisir (Meticulously Organized).
* **Location & Territory:** Yogyakarta & Daerah Istimewa Yogyakarta (D.I.Y).
* **Proof Points:** Rating 5,0 bintang sempurna di Google Business (26 ulasan terverifikasi).

### 1.2 The New Day Ecosystem
1. **New Day Wedding Organizer & Planning:** Layanan pendampingan persiapan, penyusunan konsep, koordinasi vendor, rundown hari H, hingga eksekusi prosesi adat Jawa sakral maupun modern intimate.
2. **New Day Gallery (@galleryofnewday):** Lini busana pengantin terintegrasi (*wedding attire*) di Jl. Bugisan 335P, Yogyakarta, menyediakan fitting gaun pengantin modern, kebaya kontemporer, dan beskap/tuxedo pria.

---

## 2. Curated Color Palette & Design Tokens

New Day menggunakan estetika *Warm Editorial Luxury* yang memadukan latar gelap kontemporer (*near-black*) dengan aksen kehangatan *dusty rose* dan kontras *warm ivory*.

| Token Name | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| `--bg-base` | `#0D0C0D` | Background primer halaman, header gelap, dan kontras editorial utama |
| `--bg-surface` | `#191719` | Background kartu, container sectional, dan panel formulir sekunder |
| `--bg-ivory` | `#F7F3F1` | Background kontras naratif cerah (*Warm Ivory*) untuk seksi storytelling & table |
| `--border-dark` | `#2A2629` | Garis batas tipis mewah pada latar gelap |
| `--border-light`| `#B7AAA9` (alpha: 0.3-0.5) | Garis batas dan pemisah halus pada latar ivory |
| `--accent-rose` | `#E98B98` | Aksen brand utama (*Dusty Rose*), tombol CTA, badge aktif, dan highlight teks |
| `--text-light` | `#F7F3F1` | Teks judul utama pada latar gelap |
| `--text-muted` | `#B7AAA9` | Teks deskripsi sekunder, subtitle, dan label info pada latar gelap |
| `--text-dark` | `#0D0C0D` | Teks judul pada latar ivory/terang |
| `--text-body` | `#191719` | Teks paragraf editorial pada latar ivory/terang |

---

## 3. Typography Hierarchy

* **Heading / Editorial Serif:** `Cormorant Garamond` (fallback: `Playfair Display`, `Georgia`, `serif`). Digunakan untuk `h1`, `h2`, `h3`, dan aksen miring (*italic*) pada kata kunci emosional (misal: *TERORGANISIR*, *WUJUDKAN*, *PERCAKAPAN*).
* **Body Text / UI Sans:** `Plus Jakarta Sans` / `Inter` (fallback: `system-ui`, `sans-serif`). Tipografi modern dengan keterbacaan tinggi, *clean tracking*, dan visual ritmis.
* **Mono / Metadata Badges:** `JetBrains Mono` / `ui-monospace`. Digunakan pada nomor tahapan (`01`, `STAGE 01`), kota (`YOGYAKARTA`), dan label teknis.

---

## 4. Internationalization (i18n) Architecture

* **Default Language:** Bahasa Indonesia (`id`).
* **Secondary Language:** English (`en`).
* **Reactive Context:** `LanguageContext` dengan hook `useLanguage()`.
* **Storage Persistence:** Disimpan di `localStorage.getItem("newday_language")` sehingga preferensi pengguna tetap terjaga saat navigasi antar halaman atau saat me-refresh browser.
* **Full Coverage:** 100% halaman (Beranda, Tentang, Layanan, Paket, Portofolio, Galeri, New Day Gallery, FAQ, Kontak, Navbar, Footer) terhubung secara reaktif tanpa perlu hardcoded string yang tersisa.

---

## 5. Information Architecture & Page-by-Page UX

1. **Beranda (`/`):**
   * *Hero Section:* Visual sinematik, status rating Google 5,0 bintang, dual CTA (Konsultasi WhatsApp & Lihat Portofolio).
   * *Intro Section:* Filosofi pendampingan New Day di Yogyakarta.
   * *Services Grid:* 6 pilar layanan inti.
   * *Featured Portfolio:* Dokumentasi perayaan terpilih.
   * *Why New Day:* 4 pilar nilai (Sentuhan Personal, Terarah, Eksekusi Tenang, Ekosistem Terpadu).
   * *Packages Teaser:* Pilihan skema koordinasi.
   * *New Day Gallery Teaser:* Sinergi busana pernikahan.
   * *Testimonials & FAQ:* Social proof ulasan Google & jawaban pertanyaan calon pengantin.
   * *Final CTA Section:* Ajakan diskusi hangat menuju hari bahagia (*"WUJUDKAN MOMEN PERNIKAHAN IMPIAN"*).

2. **Tentang Kami (`/about`):**
   * Header filosofi & cerita New Day.
   * Narasi mendalam mengenai ketenangan hari pernikahan tanpa kepanikan teknis.
   * 4 Kartu Nilai & Karakter kerja New Day.
   * Banner konsultasi langsung ke WhatsApp tim perencana.

3. **Layanan (`/services`):**
   * 6 Layanan komprehensif: Wedding Organizer, Wedding Planning, Koordinasi Vendor, Pernikahan Adat & Modern, Persiapan & Pelaksanaan, serta New Day Gallery Attire.
   * Visual alur kerja sama (Discovery -> Timeline -> Technical Meeting -> Eksekusi Hari H).

4. **Pilihan Skema & Paket (`/packages`):**
   * 3 Kartu skema terperinci: Wedding Organizer (Hari H), Wedding Planning (Menyeluruh), dan Custom Coordination (Fleksibel).
   * Tabel komparasi cakupan tanggung jawab teknis (*responsive horizontal table*).
   * Skema penyesuaian khusus (*bespoke inquiry*).

5. **Portofolio (`/portfolio`):**
   * Dokumentasi karya (*Featured Story* & *Stories Archive*).
   * Mood board visual ornamen, dekorasi botani, dan atmosfer prosesi sakral di Yogyakarta.

6. **New Day Gallery (`/new-day-gallery`):**
   * Eksplorasi gaun pengantin modern (*contemporary gown*), kebaya adat modifikasi, beskap pria, dan aksesoris.
   * Panduan alur fitting privat di Yogyakarta.

7. **Kontak & Konsultasi (`/contact`):**
   * Form interaktif kustomisasi kebutuhan: pilihan layanan, estimasi tanggal/bulan, perkiraan jumlah tamu, dan catatan konsep.
   * Generator pesan WhatsApp otomatis yang langsung terformat rapi ke WhatsApp Business resmi (+62 823-4212-7655).
   * Kartu alamat kantor resmi Madukismo Yogyakarta, jam operasional, rating Google Business, dan link Instagram.

---

## 6. Conversion Optimization & WhatsApp Deep Linking

Setiap tombol CTA di seluruh website terhubung langsung ke WhatsApp New Day dengan pesan awal dinamis sesuai konteks layanan atau paket yang sedang dilihat pengguna:
* Format: `https://wa.me/6282342127655?text=...`
* Menghilangkan friksi komunikasi bagi calon pengantin Yogyakarta yang mengutamakan percakapan instan yang hangat dan personal.

---

## 7. SEO, AEO & GEO Optimization Strategy

* **Local Target:** Yogyakarta, Bantul, Sleman, Kota Yogyakarta, Daerah Istimewa Yogyakarta.
* **Primary Search Terms:** `wedding organizer jogja`, `wedding organizer yogyakarta`, `wedding planner jogja`, `paket wedding jogja`, `sewa busana pengantin jogja`.
* **AEO (Answer Engine Optimization):** Struktur FAQ dengan skema tanya-jawab terstruktur untuk pengutipan langsung oleh AI search (ChatGPT, Perplexity, Gemini).
* **GEO (Generative Engine Optimization):** Metadata lengkap, sitasi ulasan Google Business 5,0, alamat fisik Madukismo No. 1, dan deskripsi entitas bisnis yang kaya konteks lokal.
