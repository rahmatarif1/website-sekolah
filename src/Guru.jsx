import { useState, useEffect } from 'react'

function Guru() {
  const guru = [
    { nama: "Sholihuddin, S.Pd.I., Gr..", jabatan: "Kepala Madrasah", foto: "/guru1.jpg" },
    { nama: "Nur Huda, S.Pd., Gr", jabatan: "Waka Kurikulum", foto: "/guru2.jpg" },
    { nama: "Prihatin, S.Pd.", jabatan: "Kepala Perpustakaan", foto: "/guru3.jpg" },
    { nama: "Endang Sujarwati, S.Pd.I", jabatan: "Bahasa Inggris", foto: "/guru4.jpg" },
    { nama: "Rahmat Arif Setiawan, S.Pd", jabatan: "Pendidikan Jasmani, Olahraga & Kesehatan", foto: "/guru5.jpg" },
    { nama: "Siti Muhimatul hoiroh, S.Pd.I", jabatan: "Akidah Akhlak", foto: "/guru6.jpg" },
    { nama: "Wahyu Prasetyo Putra, S.Pd., Gr", jabatan: "IPA", foto: "/guru7.jpg" },
    { nama: "Fauziyatul Iffah, Lc., M.Pd.", jabatan: "IPA Terpadu", foto: "/guru8.jpg" },
  ]

  const [perView, setPerView] = useState(5)
  const [mulai, setMulai] = useState(0)
  const [transisiAktif, setTransisiAktif] = useState(true)

  // Deteksi lebar layar
  useEffect(() => {
    const aturPerView = () => setPerView(window.innerWidth < 768 ? 1 : 5)
    aturPerView()
    window.addEventListener('resize', aturPerView)
    return () => window.removeEventListener('resize', aturPerView)
  }, [])

  // Timer geser otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setMulai((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Reset diam-diam saat sampai set kedua
  useEffect(() => {
    if (mulai >= guru.length) {
      // Tunggu animasi geser selesai (durasi 500ms), lalu reset tanpa transisi
      const t = setTimeout(() => {
        setTransisiAktif(false)       // matikan animasi
        setMulai(mulai - guru.length) // lompat balik ke posisi identik
      }, 500)
      return () => clearTimeout(t)
    } else {
      // Nyalakan lagi transisi untuk geser berikutnya
      setTransisiAktif(true)
    }
  }, [mulai])

  const geser = () => setMulai((prev) => prev + 1)
  const mundur = () => setMulai((prev) => (prev <= 0 ? guru.length - 1 : prev - 1))

  // Gandakan kartu: [guru..., guru...]
  const kartuGanda = [...guru, ...guru]

  return (
    <section id="guru" className="px-8 py-16 bg-slate-100">
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-2">
        Guru dan Tenaga Kependidikan
      </h2>
      <div className="flex justify-center gap-2 mb-12">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="relative group max-w-7xl mx-auto">

        {/* Panah kiri */}
        <button
          onClick={mundur}
          className="absolute top-1/2 -left-4 -translate-y-1/2 md:translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-blue-950 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer z-20"
        >
          ‹
        </button>

        {/* JENDELA */}
        <div className="overflow-hidden">
          <div
            className={`flex ${transisiAktif ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${mulai * (100 / perView)}%)` }}
          >
            {kartuGanda.map((item, index) => (
              <div key={index} className="w-full md:w-1/5 shrink-0 px-3">
                <div className="relative">
                  <img src={item.foto} alt={item.nama} className="w-full h-72 object-cover rounded-lg" />
                  <div className="bg-white rounded-lg shadow-md p-4 text-center mx-3 -mt-10 relative z-10">
                    <h3 className="font-bold text-blue-950 text-sm">{item.nama}</h3>
                    <p className="text-amber-500 text-sm">{item.jabatan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panah kanan */}
        <button
          onClick={geser}
          className="absolute top-1/2 -right-4 -translate-y-1/2 md:-translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-blue-950 text-white w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer z-20"
        >
          ›
        </button>

      </div>
    </section>
  )
}

export default Guru