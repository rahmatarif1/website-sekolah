import { Link } from "react-router";
import logo from './assets/logo.png'
import { infoData } from "./data/infoData";
import { agendaData } from "./data/agendaData";
import { FaTiktok } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

function Footer() {
  // ambil 2 teratas dari masing-masing data terpusat
  const info = infoData.slice(0, 2);
  const agenda = agendaData.slice(0, 2);

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
  
    <a href="https://instagram.com/mtsdarulmuttaqin"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors"
  >
    <FaInstagram />
  </a>
  
    <a href="https://youtube.com/@mtsdarulmuttaqin"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors"
  >
    <FaYoutube />
  </a>
  
    <a href="https://tiktok.com/@mtsdarulmuttaqin"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-400 hover:text-blue-950 transition-colors"
  >
    <FaTiktok />
  </a>
</div>
        </div>

        {/* KOLOM 2 — Info Sekolah */}
        <div>
          <h3 className="text-lg font-bold mb-6">INFO SEKOLAH</h3>
          <div className="flex flex-col gap-4">
            {info.map((item) => (
              <Link to={`/info-sekolah/${item.id}`} key={item.id} className="flex gap-3 group">
                <img src={item.gambar} alt={item.judul} className="w-16 h-16 object-cover rounded shrink-0" />
                <div>
                  <h4 className="text-amber-400 font-bold text-sm group-hover:underline">{item.judul}</h4>
                  <p className="text-gray-400 text-xs mb-1">{item.tanggal} {item.bulan}, {item.tahun}</p>
                  <p className="text-gray-300 text-sm">{item.ringkasan}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* KOLOM 3 — Agenda Sekolah */}
        <div>
          <h3 className="text-lg font-bold mb-6">AGENDA SEKOLAH</h3>
          <div className="flex flex-col gap-4">
            {agenda.map((item) => (
              <Link to={`/agenda/${item.id}`} key={item.id} className="flex gap-3 group">
                <img src={item.gambar} alt={item.judul} className="w-16 h-16 object-cover rounded shrink-0" />
                <div>
                  <h4 className="text-amber-400 font-bold text-sm group-hover:underline">{item.judul}</h4>
                  <p className="text-gray-400 text-xs mb-1">{item.tanggal} {item.bulan}, {item.tahun}</p>
                  <p className="text-gray-300 text-sm">{item.ringkasan}</p>
                </div>
              </Link>
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