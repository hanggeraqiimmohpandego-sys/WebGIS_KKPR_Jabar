// rtrwZoningInfo.js
const rtrwZoningInfo = {
  "Kawasan Konservasi": {
    allowed: [
      "Kegiatan konservasi, hutan lindung, Cagar Alam, Suaka Margasatwa, Taman Hutan Raya, Taman Nasional, Taman Wisata Alam",
      "Penelitian dan pengembangan, ilmu pengetahuan, pendidikan, preservasi sumber daya alam",
      "Wisata alam tanpa mengubah bentang alam"
    ],
    conditional: [
      "Pendirian bangunan terbatas untuk menunjang kegiatan penelitian, pengembangan, ilmu pengetahuan, dan pendidikan",
      "Kegiatan lain yang menunjang budi daya",
      "Pemanfaatan sumber daya alam sesuai peraturan",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya secara terbatas"
    ],
    forbidden: [
      "Pendirian bangunan selain ketentuan di atas",
      "Kegiatan yang mengganggu bentang alam, kesuburan tanah, fungsi hidrologi, kelestarian flora/fauna",
      "Penanaman flora atau pelepasan satwa yang bukan asli kawasan"
    ]
  },
  "Kawasan Pencadangan Konservasi di Laut": {
    allowed: [
      "Perlindungan habitat dan populasi ikan serta alur migrasi biota laut",
      "Perlindungan ekosistem pesisir dan laut yang unik/rentan",
      "Perlindungan situs budaya/adat tradisional"
    ],
    conditional: [
      "Penelitian, pengembangan, dan pendidikan",
      "Wisata alam bentang laut, pantai/pesisir, pulau-pulau kecil, bawah laut",
      "Wisata budaya",
      "Penangkapan ikan",
      "Pembudidayaan ikan",
      "Fasilitas umum",
      "Energi",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya secara terbatas"
    ],
    forbidden: [
      "Kegiatan yang mengubah keutuhan atau fungsi kawasan",
      "Mengganggu pengelolaan jenis ikan beserta habitat",
      "Mengganggu alur migrasi biota laut",
      "Penangkapan ikan dengan alat merusak ekosistem",
      "Semua jenis kegiatan penambangan",
      "Menambang terumbu karang",
      "Mengambil terumbu karang dengan cara merusak, pembuangan jangkar, sampah, limbah"
    ]
  },
  "Kawasan Hutan Adat": {
    allowed: ["Hutan adat", "Hutan lindung", "Kawasan konservasi"],
    conditional: [
      "Permukiman",
      "Wisata alam",
      "Kegiatan pendidikan dan penelitian tanpa merubah bentang alam",
      "Kawasan pertanian",
      "Jaringan dan bangunan utilitas",
      "Prasarana transportasi"
    ],
    forbidden: ["Seluruh kegiatan yang mengurangi luas hutan, tutupan vegetasi, dan fungsi resapan air"]
  },
  "Kawasan Lindung Geologi": {
    allowed: [
      "Kegiatan pendidikan/penelitian yang tidak mengganggu sistem/siklus hidrologi",
      "Kegiatan yang tidak merusak komponen geologi dan ekosistem",
      "RTH"
    ],
    conditional: [
      "Kegiatan pertanian, perkebunan, kehutanan tanpa mengubah bentang alam",
      "Kegiatan pariwisata dengan pengaturan kapasitas",
      "Jalur jalan wisatawan tanpa mengganggu fungsi utama perlindungan",
      "Kegiatan eksisting yang tidak mengganggu fungsi kawasan lindung geologi"
    ],
    forbidden: [
      "Pertambangan",
      "Mengganggu fungsi imbuhan air",
      "Mengubah sistem/siklus hidrologi",
      "Merusak komponen geologi/ekosistem",
      "Memotong kayu/vegetasi hutan",
      "Membuang sampah/barang yang mengganggu",
      "Penambahan luasan kegiatan terbangun eksisting"
    ]
  },
  "Kawasan Cagar Budaya": {
    allowed: ["Kegiatan pendidikan dan penelitian sesuai peraturan"],
    conditional: [
      "Museum",
      "Pariwisata",
      "RTH",
      "Sarana/prasarana penunjang sesuai peraturan",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya secara terbatas"
    ],
    forbidden: [
      "Kegiatan/bangunan tidak sesuai fungsi kawasan",
      "Merusak cagar budaya",
      "Mengubah bentukan geologi tertentu",
      "Mengganggu kelestarian lingkungan di sekitar cagar budaya"
    ]
  },
  "Kawasan Hutan Produksi": {
    allowed: [
      "Hutan produksi",
      "Pemanfaatan hasil hutan kayu dan bukan kayu",
      "Pemanfaatan kawasan untuk budi daya tanaman obat dan kegiatan penelitian/pendidikan"
    ],
    conditional: [
      "Pemanfaatan jasa lingkungan",
      "Pemanfaatan hasil hutan kayu restorasi ekosistem",
      "Pemanfaatan lain tanpa dampak negatif",
      "Pemanfaatan untuk kepentingan pembangunan strategis sesuai peraturan",
      "Pemanfaatan hasil hutan untuk menjaga kestabilan neraca kehutanan",
      "Wisata alam tidak mengganggu fungsi kawasan",
      "Bangunan penunjang pemanfaatan hasil hutan dan pencegahan bencana"
    ],
    forbidden: ["Kegiatan yang merusak dan menurunkan bentang alam serta kualitas fungsi kawasan"]
  },
  "Kawasan Pertanian": {
    allowed: ["Kegiatan pertanian"],
    conditional: [
      "Kegiatan pendukung pertanian",
      "Penelitian pertanian",
      "Usaha pengolahan hasil pertanian",
      "Ekowisata tetap mempertahankan fungsi utama kawasan pertanian",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya",
      "Alih fungsi lahan sawah sesuai peraturan",
      "Kegiatan eksisting RTR wilayah kabupaten/kota",
      "Permukiman perdesaan",
      "Kegiatan lain yang tidak mengubah fungsi lahan pertanian tanaman pangan beririgasi teknis"
    ],
    forbidden: ["Kegiatan yang mengganggu fungsi kawasan pertanian dan keberlanjutan lahan"]
  },
  "Kawasan Perikanan": {
    allowed: [
      "Pemanfaatan perikanan tangkap tidak melebihi potensi lestari",
      "Perikanan tangkap ukuran layak, armada < 30 GT, bukan musim kawin",
      "Pembudidayaan ikan",
      "Sarana/prasarana pendukung perikanan",
      "Pemanfaatan sumber daya perikanan berkelanjutan",
      "Kegiatan penelitian perikanan"
    ],
    conditional: [
      "Penelitian dan pendidikan",
      "Penempatan alat bantu tangkap ikan",
      "Bioteknologi dan biofarmakologi",
      "Pariwisata",
      "Perikanan budi daya lepas pantai",
      "Energi",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: [
      "Menangkap ikan dengan bahan peledak/bahan beracun",
      "Alat tangkap merusak ekosistem",
      "Menangkap ikan ukuran kecil",
      "Pertambangan",
      "Membuang sampah/limbah"
    ]
  },
  "Kawasan Pergaraman": {
    allowed: [
      "Kegiatan pergaraman",
      "Sarana/prasarana pendukung pergaraman",
      "Pemanfaatan sumber daya perikanan berkelanjutan"
    ],
    conditional: [
      "Fasilitas pendukung pergaraman",
      "Penelitian pergaraman/perikanan",
      "Usaha mikro, kecil, menengah pendukung pergaraman",
      "Permukiman",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: ["Kegiatan yang mengganggu fungsi kawasan pergaraman"]
  },
  "Kawasan Pertambangan dan Energi": {
    allowed: [
      "Kegiatan pertambangan energi sesuai kriteria teknis dan peraturan",
      "Sarana/prasarana pendukung kegiatan pertambangan energi",
      "Bongkar muat bahan baku, hasil produksi, penunjang",
      "Prasarana jaringan tenaga listrik dan penunjangnya"
    ],
    conditional: [
      "Kegiatan pendukung pertambangan energi",
      "Pertanian",
      "RTH",
      "Permukiman",
      "Wisata minat khusus",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: ["Kegiatan yang mengakibatkan terganggunya kegiatan pertambangan energi"]
  },
  "Kawasan Peruntukan Industri": {
    allowed: [
      "Kawasan industri dan infrastruktur dasar",
      "Pengembangan sentra industri",
      "Infrastruktur penunjang industri",
      "RTH"
    ],
    conditional: [
      "Perumahan",
      "Perdagangan jasa",
      "Fasilitas sosial dan umum (pendidikan, kesehatan, ibadah, olahraga)",
      "Perkantoran",
      "Pemerintahan",
      "Sarana/prasarana transportasi",
      "Transportasi",
      "Pertanian",
      "Pelabuhan ikan",
      "Pertambangan",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: [
      "Kegiatan industri yang menimbulkan dampak negatif pada lingkungan",
      "Membuang limbah ke laut, air permukaan, dan tanah secara langsung"
    ]
  },
  "Kawasan Pariwisata": {
    allowed: [
      "Pemanfaatan ruang untuk pembangunan pariwisata dan fasilitas penunjang",
      "Pemanfaatan potensi alam/budaya sesuai daya dukung lingkungan",
      "Pendidikan dan penelitian",
      "Perlindungan cagar budaya",
      "RTH & RTNH",
      "Penyediaan sarana/prasarana sesuai kriteria teknis"
    ],
    conditional: [
      "Jasa akomodasi",
      "Kegiatan penunjang wisata",
      "Permukiman mendukung kegiatan wisata",
      "Sarana transportasi",
      "Pelabuhan perikanan",
      "Perikanan budi daya laut",
      "Energi tidak mengganggu kegiatan wisata",
      "Bangunan pelindung pantai",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: ["Semua kegiatan yang berpotensi mengubah lingkungan fisik kawasan wisata"]
  },
  "Kawasan Permukiman": {
    allowed: [
      "Permukiman",
      "Perumahan",
      "Perdagangan jasa",
      "Perkantoran",
      "Pemerintahan",
      "Fasilitas sosial dan umum",
      "Industri eksisting",
      "Pertanian",
      "Perkebunan",
      "Sarana transportasi",
      "RTH",
      "Pengembangan jaringan sarana prasarana kota",
      "Kegiatan lain penunjang permukiman"
    ],
    conditional: [
      "Kegiatan non permukiman <150 Ha sesuai RTRW kab/kota tanpa mengganggu kegiatan permukiman",
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: ["Kegiatan yang mengganggu kenyamanan, keamanan, dan ketertiban permukiman"]
  },
  "Kawasan Pembuangan Hasil Pengerukan di Laut": {
    allowed: ["Pembuangan material setelah memperoleh izin sesuai peraturan"],
    conditional: [
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: [
      "Kegiatan menimbulkan dampak terhadap daerah sensitif berdasarkan kajian pemodelan sebaran dampak",
      "Kegiatan yang mengganggu dan merusak ekosistem laut sesuai peraturan"
    ]
  },
  "Kawasan Transportasi": {
    allowed: [
      "Sarana transportasi",
      "Fasilitas penunjang transportasi",
      "Perdagangan/jasa skala lingkungan",
      "RTH & RTNH"
    ],
    conditional: [
      "Bangunan prasarana kota sesuai ketentuan teknis",
      "Fasilitas perdagangan/jasa",
      "Kegiatan campuran",
      "Permukiman, perkantoran, pergudangan sesuai ketentuan",
      "Usaha sektor informal",
      "Industri penunjang transportasi dan pengolahan hasil perikanan",
      "Pendidikan/penelitian",
      "Wisata alam, budaya, sejarah",
      "Wilayah kerja/pengoperasian pelabuhan perikanan",
      "Pekerjaan bawah air",
      "Bangunan pelindung pantai",
      "Kegiatan energi"
    ],
    forbidden: [
      "Semua kegiatan yang mengganggu fungsi kawasan transportasi",
      "Perikanan tangkap/laut yang mengganggu pelabuhan",
      "Wisata bawah laut",
      "Perikanan budi daya laut",
      "Pertambangan mineral"
    ]
  },
  "Kawasan Pertahanan dan Keamanan": {
    allowed: [
      "Pembangunan prasarana/sarana penunjang pertahanan dan keamanan",
      "Rumah dinas, rumah susun, fasilitas pendidikan, kesehatan, ibadah, olahraga, sosial",
      "Pengembangan kawasan lindung/budi daya sebagai zona penyangga"
    ],
    conditional: [
      "Pengembangan sistem jaringan transportasi, energi, telekomunikasi, sumber daya air, dan prasarana lainnya"
    ],
    forbidden: ["Semua kegiatan yang menimbulkan gangguan terhadap kawasan pertahanan dan keamanan"]
  }
};
