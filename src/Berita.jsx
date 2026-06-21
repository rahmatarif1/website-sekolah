function Berita() {
  const berita = [
    { tanggal: "21", bulan: "Okt, 2025", judul: "Dua Siswi Ciptakan Aplikasi Bahasa Isyarat", ringkasan: "Di tengah tantangan komunikasi antara teman dengar dan teman tuli, dua siswi...", gambar: "/berita1.jpg" },
    { tanggal: "15", bulan: "Okt, 2025", judul: "Peduli Lingkungan: Siswa Kelas X Beraksi", ringkasan: "Siswa kelas X menunjukkan kepedulian mereka terhadap lingkungan sekitar...", gambar: "/berita2.jpg" },
    { tanggal: "15", bulan: "Okt, 2025", judul: "Kegiatan Bersih-Bersih Lingkungan Sekolah", ringkasan: "Siswa menunjukkan kepedulian terhadap kebersihan dan keasrian sekolah...", gambar: "/berita3.jpg" },
    { tanggal: "11", bulan: "Mar, 2026", judul: "Berbagi Kasih di Bulan Suci Ramadan", ringkasan: "Dalam balutan semangat berbagi di bulan suci Ramadan, siswa kelas XII...", gambar: "/berita4.jpg" },
    { tanggal: "10", bulan: "Nov, 2025", judul: "Pelantikan Pengurus OSIM Periode Baru", ringkasan: "Sekolah melantik pengurus OSIM dalam sebuah upacara yang khidmat...", gambar: "/berita5.jpg" },
    { tanggal: "28", bulan: "Okt, 2025", judul: "Upacara Peringatan Hari Sumpah Pemuda", ringkasan: "Upacara bendera diikuti oleh seluruh guru, karyawan, dan siswa...", gambar: "/berita6.jpg" },
  ]

  return (
    <section id="berita" className="px-8 py-16 bg-blue-950">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Berita Terbaru
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {berita.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden w-full md:w-80 shadow-lg">

            {/* Foto + tanggal melayang + efek zoom */}
            <div className="relative overflow-hidden group">
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-blue-950/80 text-white px-4 py-2 z-10">
                <p className="text-2xl font-bold leading-none">{item.tanggal}</p>
                <p className="text-xs text-amber-400">{item.bulan}</p>
              </div>
            </div>

            {/* Isi kartu */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-950 mb-2">{item.judul}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.ringkasan}</p>
              <button className="text-blue-950 font-bold text-sm hover:text-amber-500 cursor-pointer border-b border-gray-200 pb-3 w-full text-left">
                Read More »
              </button>
              <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                <span>👤</span> admin
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Tombol bawah */}
      <div className="text-center mt-10">
        <button className="border-2 border-amber-400 text-amber-400 font-bold px-8 py-3 rounded hover:bg-amber-400 hover:text-blue-950 cursor-pointer">
          TAMPILKAN SEMUA BERITA
        </button>
      </div>
    </section>
  )
}

export default Berita