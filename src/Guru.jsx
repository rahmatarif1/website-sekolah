import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { guru } from './data/guruData'

function Guru() {
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
      const t = setTimeout(() => {
        setTransisiAktif(false)
        setMulai(mulai - guru.length)
      }, 500)
      return () => clearTimeout(t)
    } else {
      setTransisiAktif(true)
    }
  }, [mulai])

  const geser = () => setMulai((prev) => prev + 1)
  const mundur = () => setMulai((prev) => (prev <= 0 ? guru.length - 1 : prev - 1))

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
                <Link to={'/guru/' + item.id} className="block relative group/kartu">
                  <img src={item.foto} alt={item.nama} className="w-full h-72 object-cover rounded-lg" />
                  <div className="bg-white rounded-lg shadow-md p-4 text-center mx-3 -mt-10 relative z-10 transition group-hover/kartu:shadow-xl">
                    <h3 className="font-bold text-blue-950 text-sm">{item.nama}</h3>
                    <p className="text-amber-500 text-sm">{item.jabatan}</p>
                  </div>
                </Link>
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