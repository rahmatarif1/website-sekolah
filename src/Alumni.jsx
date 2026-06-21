import { useState, useEffect } from 'react'

function Alumni() {
  const alumni = [
    { nama: "Rita Juliawati, S.Pd., Gr.", kisah: "Rita Juliawati adalah Kepala MTs N 1 Palangka Raya dilantik pada 08 Juli 2024..", foto: "/alumni1.jpg" },
    { nama: "Resty Aulia Nurmaya Ulfi, S.Pd.", kisah: "Kepala Staf Urusan Haji dan Umrah di Kementrian Agama Wilayah Kalimantan Tengah.", foto: "/alumni2.jpg" },
    { nama: "Nabilatul Ulum Fitria", kisah: "Lulusan terbaik.", foto: "/alumni3.jpg" },
    { nama: "Alif Muhammad Reza", kisah: "Lulusan Terbaik.", foto: "/alumni4.jpg" },
  ]

  const [perView, setPerView] = useState(2)
  const [mulai, setMulai] = useState(0)
  const [transisiAktif, setTransisiAktif] = useState(true)

  // Deteksi lebar layar
  useEffect(() => {
    const aturPerView = () => setPerView(window.innerWidth < 768 ? 1 : 2)
    aturPerView()
    window.addEventListener('resize', aturPerView)
    return () => window.removeEventListener('resize', aturPerView)
  }, [])

  // Timer geser otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setMulai((prev) => prev + 1)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Reset diam-diam saat sampai set kedua
  useEffect(() => {
    if (mulai >= alumni.length) {
      const t = setTimeout(() => {
        setTransisiAktif(false)
        setMulai(mulai - alumni.length)
      }, 500)
      return () => clearTimeout(t)
    } else {
      setTransisiAktif(true)
    }
  }, [mulai])

  const geser = () => setMulai((prev) => prev + 1)
  const mundur = () => setMulai((prev) => (prev <= 0 ? alumni.length - 1 : prev - 1))

  const kartuGanda = [...alumni, ...alumni]

  return (
    <section id="alumni" className="px-8 py-16 bg-blue-950">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Profil Alumni
      </h2>
      <div className="flex justify-center gap-2 mb-12">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="relative max-w-6xl mx-auto group">

        {/* Panah kiri */}
        <button
          onClick={mundur}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 md:translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-white text-blue-950 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer shadow-lg z-20 hover:bg-amber-400"
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
              <div key={index} className="w-full md:w-1/2 shrink-0 px-3">
                <div className="bg-blue-900/50 border border-blue-800 rounded-lg p-6 flex flex-col md:flex-row gap-4 h-full items-center md:items-start text-center md:text-left">
                  <img src={item.foto} alt={item.nama} className="w-32 h-40 object-cover rounded shrink-0" />
                  <div>
                    <h3 className="text-amber-400 font-bold mb-2">{item.nama}</h3>
                    <p className="text-gray-300 text-sm">
                      <span className="text-amber-400 text-2xl">"</span>
                      {item.kisah}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panah kanan */}
        <button
          onClick={geser}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 md:-translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-white text-blue-950 w-10 h-10 rounded-full text-2xl flex items-center justify-center cursor-pointer shadow-lg z-20 hover:bg-amber-400"
        >
          ›
        </button>

      </div>
    </section>
  )
}

export default Alumni