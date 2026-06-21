
import logo from './assets/logo.png'

function Footer() {
  const info = [
    { gambar: "/p1.jpg", judul: "Pengumuman SPMB Jalur Afirmasi", tanggal: "26 Mei, 2026", ringkasan: "Diberitahukan kepada calon murid Jalur Afirmasi Disabilitas..." },
    { gambar: "/p2.jpg", judul: "Pengumuman Kelulusan", tanggal: "04 Mei, 2026", ringkasan: "Hasil Kelulusan Siswa Kelas IX Tahun Ajaran 2025/2026 bisa..." },
  ]

  const agenda = [
    { gambar: "/a1.jpg", judul: "Surat Edaran Kelulusan", tanggal: "18 Apr, 2026", ringkasan: "Surat Edaran Kelulusan Siswa Kelas IX Tahun Ajaran 2025/2026..." },
    { gambar: "/a2.jpg", judul: "Pembagian Laporan Hasil Belajar", tanggal: "13 Mei, 2026", ringkasan: "Pembagian laporan hasil belajar siswa akan dilaksanakan pada..." },
  ]

  return (
    <footer className="bg-blue-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8 py-16">

        {/* KOLOM 1 — Logo + deskripsi + sosmed */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <h3 className="text-xl font-bold">MTs Darul Muttaqin</h3>
          </div>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            MTs Darul Muttaqin berkomitmen membentuk generasi yang berakhlak,
            berilmu, dan berprestasi, dengan landasan nilai-nilai keislaman.
          </p>
          <div className="flex gap-3">
  <a href="#" className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors text-sm font-bold">
    f
  </a>
  <a href="#" className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors text-sm font-bold">
    IG
  </a>
  <a href="#" className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors text-sm font-bold">
    YT
  </a>
</div>
        </div>

        {/* KOLOM 2 — Info Sekolah */}
        <div>
          <h3 className="text-lg font-bold mb-6">INFO SEKOLAH</h3>
          <div className="flex flex-col gap-4">
            {info.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img src={item.gambar} alt={item.judul} className="w-16 h-16 object-cover rounded shrink-0" />
                <div>
                  <h4 className="text-amber-400 font-bold text-sm">{item.judul}</h4>
                  <p className="text-gray-400 text-xs mb-1">{item.tanggal}</p>
                  <p className="text-gray-300 text-sm">{item.ringkasan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KOLOM 3 — Agenda Sekolah */}
        <div>
          <h3 className="text-lg font-bold mb-6">AGENDA SEKOLAH</h3>
          <div className="flex flex-col gap-4">
            {agenda.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img src={item.gambar} alt={item.judul} className="w-16 h-16 object-cover rounded shrink-0" />
                <div>
                  <h4 className="text-amber-400 font-bold text-sm">{item.judul}</h4>
                  <p className="text-gray-400 text-xs mb-1">{item.tanggal}</p>
                  <p className="text-gray-300 text-sm">{item.ringkasan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Baris copyright */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-300">
            © Copyright 2026. All Rights Reserved By <span className="text-amber-400 font-bold">MTs Darul Muttaqin</span>
          </p>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-amber-400">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-400">License</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-400">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer