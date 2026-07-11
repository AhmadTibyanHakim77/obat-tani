import type { Article, BankPayment, ConsultationProgram, Metric, Product } from "@/types";

export const products: Product[] = [
  {
    id: "OBT-NEEM-500",
    name: "BioNeem Shield 500ml",
    category: "Obat Tani",
    description: "Insektisida nabati untuk wereng, trips, dan kutu daun dengan residu rendah.",
    activeIngredient: "Azadirachtin 0,8% + ekstrak serai wangi",
    dosage: "2 ml per liter air, semprot pagi atau sore setiap 5-7 hari.",
    targetPests: ["Wereng", "Trips", "Kutu daun", "Ulat muda"],
    price: 86000,
    stock: 342,
    rating: 4.9,
    image: "/products/bioneem-shield.png",
    badges: ["Organik", "Best Seller"]
  },
  {
    id: "OBT-FUNGI-250",
    name: "FungiClear SC 250ml",
    category: "Obat Tani",
    description: "Fungisida sistemik untuk bercak daun, blas, antraknosa, dan busuk batang.",
    activeIngredient: "Difenokonazol 250 g/l",
    dosage: "1 ml per liter air, ulangi 7 hari bila intensitas penyakit tinggi.",
    targetPests: ["Blas", "Bercak daun", "Antraknosa", "Busuk batang"],
    price: 118000,
    stock: 188,
    rating: 4.8,
    image: "/products/fungiclear-sc.png",
    badges: ["Fungisida", "Proteksi Cepat"]
  },
  {
    id: "OBT-HERBI-1L",
    name: "WeedStop Gold 1L",
    category: "Obat Tani",
    description: "Herbisida purna tumbuh untuk gulma daun lebar dan rumput liar di pematang.",
    activeIngredient: "Glifosat isopropilamina 486 g/l",
    dosage: "80-120 ml per tangki 16 liter, arahkan hanya ke gulma sasaran.",
    targetPests: ["Gulma daun lebar", "Rumput liar", "Teki"],
    price: 96000,
    stock: 264,
    rating: 4.7,
    image: "/products/weedstop-gold.png",
    badges: ["Herbisida", "Hemat Biaya"]
  },
  {
    id: "PUP-NPK-16",
    name: "NPK Premium Balance 16-16-16",
    category: "Pupuk",
    description: "Nutrisi makro seimbang untuk padi, cabai, jagung, dan hortikultura.",
    activeIngredient: "Nitrogen 16%, Fosfat 16%, Kalium 16%",
    dosage: "150-250 kg per hektare sesuai rekomendasi tanah.",
    targetPests: ["Defisiensi nitrogen", "Defisiensi fosfat", "Defisiensi kalium"],
    price: 148000,
    stock: 824,
    rating: 4.8,
    image: "/products/bioneem-shield.png",
    badges: ["Stok Gudang", "Subsidi Mitra"]
  },
  {
    id: "BEN-PADI-01",
    name: "Benih Padi Agronusa IR Pro",
    category: "Benih",
    description: "Benih padi unggul genjah, anakan produktif tinggi, dan tahan rebah.",
    activeIngredient: "Varietas padi unggul bersertifikat",
    dosage: "25-30 kg per hektare, rendam dan peram sesuai SOP benih.",
    targetPests: ["Tahan rebah", "Produktivitas tinggi", "Umur genjah"],
    price: 72000,
    stock: 519,
    rating: 4.9,
    image: "/products/fungiclear-sc.png",
    badges: ["Panen Cepat", "Sertifikat"]
  },
  {
    id: "ALT-SPRAYER-16",
    name: "Smart Sprayer 16L Lithium",
    category: "Alat",
    description: "Sprayer elektrik ringan dengan nozzle presisi dan baterai tahan 8 jam.",
    activeIngredient: "Pompa elektrik lithium 12V",
    dosage: "Gunakan nozzle kabut untuk obat dan nozzle kipas untuk herbisida.",
    targetPests: ["Aplikasi pestisida", "Aplikasi pupuk cair", "Sanitasi gudang"],
    price: 575000,
    stock: 91,
    rating: 4.7,
    image: "/products/weedstop-gold.png",
    badges: ["Garansi", "Pro Grade"]
  },
    {
    id: "BEN-PADI-01",
    name: "Benih Padi Agronusa IR Pro",
    category: "Benih",
    description: "Benih padi unggul genjah, anakan produktif tinggi, dan tahan rebah.",
    activeIngredient: "Varietas padi unggul bersertifikat",
    dosage: "25-30 kg per hektare, rendam dan peram sesuai SOP benih.",
    targetPests: ["Tahan rebah", "Produktivitas tinggi", "Umur genjah"],
    price: 72000,
    stock: 519,
    rating: 4.9,
    image: "/products/fungiclear-sc.png",
    badges: ["Panen Cepat", "Sertifikat"]
  },
  {
    id: "ALT-SPRAYER-16",
    name: "Smart Sprayer 16L Lithium",
    category: "Alat",
    description: "Sprayer elektrik ringan dengan nozzle presisi dan baterai tahan 8 jam.",
    activeIngredient: "Pompa elektrik lithium 12V",
    dosage: "Gunakan nozzle kabut untuk obat dan nozzle kipas untuk herbisida.",
    targetPests: ["Aplikasi pestisida", "Aplikasi pupuk cair", "Sanitasi gudang"],
    price: 575000,
    stock: 91,
    rating: 4.7,
    image: "/products/weedstop-gold.png",
    badges: ["Garansi", "Pro Grade"]
  }
];

export const metrics: Metric[] = [
  { slug: "gmv-bulan-ini", label: "GMV Bulan Ini", value: "Rp 4,8 M", detail: "+18,4% dari bulan lalu" },
  { slug: "distributor-aktif", label: "Distributor Aktif", value: "312", detail: "42 kabupaten prioritas" },
  { slug: "akurasi-stok", label: "Akurasi Stok", value: "99,2%", detail: "Sinkron gudang, toko, dan marketplace" },
  { slug: "sla-pesanan", label: "SLA Pesanan", value: "22 jam", detail: "Rata-rata sampai gudang mitra" }
];

export const metricDetails: Record<string, string[]> = {
  "gmv-bulan-ini": [
    "Menghitung total transaksi marketplace, kasir, distributor, dan pesanan konsultasi pada bulan berjalan.",
    "Dipakai owner untuk melihat pertumbuhan omzet, kategori paling kuat, dan waktu promo terbaik.",
    "Saat tersambung database, angka ini diambil dari tabel orders dan order_items secara real-time."
  ],
  "distributor-aktif": [
    "Menampilkan distributor yang masih melakukan transaksi, update stok, atau menerima order dalam 30 hari terakhir.",
    "Dipakai tim sales untuk menentukan area prioritas, target kunjungan, dan penambahan gudang kecil.",
    "Setiap distributor bisa punya limit kredit, wilayah layanan, dan katalog harga khusus."
  ],
  "akurasi-stok": [
    "Membandingkan stok sistem dengan stok fisik dari gudang, toko, dan retur barang.",
    "Kasir dapat melihat produk yang perlu stock opname, produk cepat habis, dan barang mendekati kedaluwarsa.",
    "Akurasi tinggi membantu mencegah overselling saat musim tanam ramai."
  ],
  "sla-pesanan": [
    "Mengukur rata-rata waktu dari order dibuat sampai barang siap dikirim atau diambil.",
    "Dipakai untuk menilai performa gudang, kurir distributor, dan kesiapan stok cabang.",
    "Jika SLA melewati target, sistem dapat memberi peringatan ke admin operasional."
  ]
};

export const articles: Article[] = [
  {
    slug: "strategi-pengendalian-wereng",
    title: "Strategi pengendalian wereng tanpa merusak ekosistem sawah",
    category: "Proteksi Tanaman",
    readingTime: "6 menit",
    summary: "Panduan pemilihan bahan aktif, jadwal aplikasi, dan monitoring populasi hama.",
    details: [
      "Mulai dari monitoring rumpun padi minimal 20 titik per petak untuk menghitung populasi wereng.",
      "Gunakan insektisida selektif ketika populasi melewati ambang kendali, bukan berdasarkan kebiasaan semprot mingguan.",
      "Rotasi bahan aktif dan pertahankan musuh alami dengan menghindari pencampuran obat yang tidak perlu."
    ]
  },
  {
    slug: "defisiensi-npk-padi",
    title: "Membaca gejala defisiensi NPK pada padi fase vegetatif",
    category: "Nutrisi",
    readingTime: "5 menit",
    summary: "Checklist lapangan untuk menentukan kebutuhan pupuk secara cepat dan tepat.",
    details: [
      "Daun tua menguning merata biasanya berkaitan dengan nitrogen, sedangkan tepi daun terbakar sering mengarah ke kalium.",
      "Bandingkan gejala di area rendah, tinggi, dan dekat saluran air sebelum menentukan dosis pupuk.",
      "Catat umur tanaman, riwayat pemupukan, dan kondisi air agar rekomendasi tidak berlebihan."
    ]
  },
  {
    slug: "crm-inventori-toko-pertanian",
    title: "Membangun toko pertanian modern dengan CRM dan inventori real-time",
    category: "Bisnis",
    readingTime: "7 menit",
    summary: "Cara menjaga pelanggan, margin, dan ketersediaan produk di musim puncak.",
    details: [
      "Segmentasikan pelanggan berdasarkan komoditas, musim tanam, dan histori pembelian obat/pupuk.",
      "Gunakan reorder point untuk produk cepat laku seperti insektisida, fungisida, NPK, dan benih utama.",
      "Pantau margin per kategori agar promosi tidak menggerus keuntungan di musim permintaan tinggi."
    ]
  }
];

export const consultationPrograms: ConsultationProgram[] = [
  {
    slug: "jadwal-pakar-obat-tani",
    title: "Jadwal Pakar Diskusi Obat Tani",
    subtitle: "Booking sesi chat, video, atau kunjungan lahan dengan agronomis.",
    schedule: ["Senin 09.00-11.00: Wereng dan insektisida", "Rabu 14.00-16.00: Fungisida padi dan cabai", "Jumat 08.00-10.00: Herbisida dan keamanan aplikasi"],
    details: ["Bawa foto tanaman, umur tanaman, lokasi lahan, riwayat obat terakhir, dan cuaca 3 hari terakhir.", "Pakar membantu memilih jenis obat, dosis, interval semprot, dan cara rotasi bahan aktif.", "Setiap sesi menghasilkan ringkasan rekomendasi yang bisa dipakai kasir untuk menawarkan produk."],
    output: "Rekomendasi obat, dosis, jadwal aplikasi, dan catatan keamanan semprot."
  },
  {
    slug: "analisis-gejala-tanaman",
    title: "Analisis Gejala Tanaman",
    subtitle: "Input foto, komoditas, dan gejala untuk rekomendasi awal.",
    schedule: ["Setiap hari 07.00-20.00: screening gejala", "Respon awal maksimal 30 menit pada jam operasional"],
    details: ["Analisis membedakan gejala hama, jamur, bakteri, kekurangan nutrisi, atau efek cuaca.", "Sistem meminta foto daun atas, daun bawah, batang, akar bila ada, dan kondisi petak.", "Hasil awal ditinjau agronomis sebelum produk disarankan ke pelanggan."],
    output: "Kemungkinan penyebab, tingkat urgensi, produk yang relevan, dan tindakan lapangan."
  },
  {
    slug: "peta-lahan-dan-riwayat",
    title: "Peta Lahan dan Riwayat Tanam",
    subtitle: "Catat lokasi, musim tanam, dan riwayat panen agar rekomendasi makin presisi.",
    schedule: ["Input lahan bisa dilakukan kapan saja", "Review data lahan setiap Sabtu 09.00-12.00"],
    details: ["Setiap lahan menyimpan komoditas, luas, varietas, jadwal tanam, jadwal pupuk, dan riwayat serangan.", "Kasir dapat melihat produk yang pernah dibeli pelanggan untuk menghindari bahan aktif yang terlalu sering dipakai.", "Data membantu prediksi kebutuhan stok toko pada minggu berikutnya."],
    output: "Profil lahan, kalender budidaya, riwayat aplikasi, dan rekomendasi stok."
  }
];

export const banks: BankPayment[] = [
  { id: "bca", name: "BCA", accountNumber: "1234567890", accountName: "PT AgroNusa Store Indonesia", color: "#0b56a5", logo: "BCA" },
  { id: "bri", name: "BRI", accountNumber: "9876543210", accountName: "PT AgroNusa Store Indonesia", color: "#00529c", logo: "BRI" },
  { id: "bni", name: "BNI", accountNumber: "8800123456", accountName: "PT AgroNusa Store Indonesia", color: "#f58220", logo: "BNI" },
  { id: "mandiri", name: "Mandiri", accountNumber: "1310098765432", accountName: "PT AgroNusa Store Indonesia", color: "#f7c600", logo: "MDR" },
  { id: "qris", name: "QRIS", accountNumber: "NMID: ID1023260712345", accountName: "AgroNusa QRIS", color: "#111827", logo: "QRIS" }
];
