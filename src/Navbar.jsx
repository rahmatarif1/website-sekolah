import { useState, useEffect } from 'react'


import logo from './assets/logo.png'

function Navbar() {
  const [bukaProfil, setBukaProfil] = useState(false)
  const [bukaStruktur, setBukaStruktur] = useState(false)
  const [bukaBerita, setBukaBerita] = useState(false)
  const [bukaKeuangan, setBukaKeuangan] = useState(false)
  const [bukaLayanan, setBukaLayanan] = useState(false)
  const [bukaKelas, setBukaKelas] = useState(false)
const [scrolled, setScrolled] = useState(false)
  const [menuHp, setMenuHp] = useState(false)
  const [menuAktifHp, setMenuAktifHp] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center gap-4 px-8 py-4 transition-colors duration-300 ${
  scrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
}`}>

      {/* Tombol HAMBURGER — di KIRI, hanya HP */}
      <button
        onClick={() => setMenuHp(!menuHp)}
        className="md:hidden text-white text-3xl cursor-pointer"
      >
        ☰
      </button>

      <div className="flex items-center gap-3">
  <img src={logo} alt="Logo MTs Darul Muttaqin" className="h-10 w-auto" />
  <h2 className="text-2xl font-bold text-white">MTs Darul Muttaqin</h2>
</div>

      {/* Menu DESKTOP — didorong ke kanan dengan ml-auto */}
      <ul className="hidden md:flex gap-6 items-center ml-auto">

        {/* PROFIL — dropdown... (isi menu desktop tetap sama seperti sekarang) */}

        {/* PROFIL — dropdown, dengan sub Struktur */}
        <li
          className="relative"
          onMouseEnter={() => setBukaProfil(true)}
          onMouseLeave={() => setBukaProfil(false)}
        >
          <button className="text-white hover:text-gray-300 cursor-pointer">
            PROFIL ▾
          </button>
          {bukaProfil && (
            <ul className="absolute top-full left-0 bg-slate-800 rounded-lg py-2 w-48">
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Sejarah</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Visi &amp; Misi</li>
              <li
                className="relative"
                onMouseEnter={() => setBukaStruktur(true)}
                onMouseLeave={() => setBukaStruktur(false)}
              >
                <button className="w-full text-left px-4 py-2 text-white hover:bg-slate-700 cursor-pointer flex justify-between items-center">
                  Struktur Organisasi <span>▸</span>
                </button>
                {bukaStruktur && (
                  <ul className="absolute left-full top-0 bg-slate-800 rounded-lg py-2 w-48">
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Madrasah</li>
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Komite Madrasah</li>
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">OSIM</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* BERITA — dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setBukaBerita(true)}
          onMouseLeave={() => setBukaBerita(false)}
        >
          <button className="text-white hover:text-gray-300 cursor-pointer">
            BERITA ▾
          </button>
          {bukaBerita && (
            <ul className="absolute top-full left-0 bg-slate-800 rounded-lg py-2 w-48">
              <li className="hover:bg-slate-700 cursor-pointer">
  <a href="#berita" className="block px-4 py-2 text-white">
    Berita Terbaru
  </a> </li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Info Sekolah</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Agenda</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Galery</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"></li>
            </ul>
          )}
        </li>
        {/* KEUANGAN — dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setBukaKeuangan(true)}
          onMouseLeave={() => setBukaKeuangan(false)}
        >
          <button className="text-white hover:text-gray-300 cursor-pointer">
            KEUANGAN ▾
          </button>
          {bukaKeuangan && (
            <ul className="absolute top-full left-0 bg-slate-800 rounded-lg py-2 w-48">
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">BOS</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Komite</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"></li>
            </ul>
          )}
        </li>

        {/* LAYANAN — dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setBukaLayanan(true)}
          onMouseLeave={() => setBukaLayanan(false)}
        >
          <button className="text-white hover:text-gray-300 cursor-pointer">
            LAYANAN ▾
          </button>
          {bukaLayanan && (
            <ul className="absolute top-full left-0 bg-slate-800 rounded-lg py-2 w-48">
                <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">E-Learning</li>
              <li className="hover:bg-slate-700 cursor-pointer">
  <a href="#ekstrakurikuler" className="block px-4 py-2 text-white">
    Ekstrakurikuler
  </a>
</li>
              <li
                className="relative"
                onMouseEnter={() => setBukaKelas(true)}
                onMouseLeave={() => setBukaKelas(false)}
              >
                <button className="w-full text-left px-4 py-2 text-white hover:bg-slate-700 cursor-pointer flex justify-between items-center">
                  Kelas Layanan <span>▸</span>
                </button>
                {bukaKelas && (
                  <ul className="absolute left-full top-0 bg-slate-800 rounded-lg py-2 w-48">
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">OSM</li>
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Khafidz</li>
                    <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Bahasa</li>
                  </ul>
                )}
              </li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Perpustakaan</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer">Layanan Kesiswaan</li>
              <li className="px-4 py-2 text-white hover:bg-slate-700 cursor-pointer"></li>
            </ul>
          )}
        </li>

        <li>
  <a href="#prestasi" className="text-white hover:text-gray-300 cursor-pointer">
    PRESTASI
  </a>
</li>
        <li>
          <a href="#alumni" className="text-white hover:text-gray-300 cursor-pointer">
            PROFIL ALUMNI
          </a>
        </li>
        <li>
  <a href="#kontak" className="text-white hover:text-gray-300 cursor-pointer">
    KONTAK
  </a>
</li>
      </ul>

      {/* OVERLAY gelap — muncul saat drawer terbuka, tap untuk menutup */}
<div
  onClick={() => setMenuHp(false)}
  className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
    menuHp ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
></div>

{/* DRAWER — panel menu geser dari kiri */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 transition-transform duration-300 ${
    menuHp ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
    <span className="text-white font-bold">Menu</span>
    <button
      onClick={() => setMenuHp(false)}
      className="text-white text-2xl cursor-pointer"
    >
      ✕
    </button>
  </div>

  <ul className="flex flex-col py-2">
    {/* PROFIL — accordion */}
    <li>
      <button
        onClick={() => setMenuAktifHp(menuAktifHp === 'profil' ? null : 'profil')}
        className="w-full text-left px-6 py-3 text-white hover:bg-slate-700 cursor-pointer flex justify-between"
      >
        PROFIL <span>{menuAktifHp === 'profil' ? '▴' : '▾'}</span>
      </button>
      {menuAktifHp === 'profil' && (
        <ul className="bg-slate-900">
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Sejarah</li>
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Visi &amp; Misi</li>
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Struktur Organisasi</li>
        </ul>
      )}
    </li>

{/* BERITA — accordion */}
    <li>
  <button
    onClick={() => setMenuAktifHp(menuAktifHp === 'berita' ? null : 'berita')}
    className="w-full text-left px-6 py-3 text-white hover:bg-slate-700 cursor-pointer flex justify-between"
  >
    BERITA <span>{menuAktifHp === 'berita' ? '▴' : '▾'}</span>
  </button>
  {menuAktifHp === 'berita' && (
    <ul className="bg-slate-900">
      <li className="hover:bg-slate-700 cursor-pointer">
        <a href="#berita" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">Berita Terbaru</a>
      </li>
      <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Info Sekolah</li>
      <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Agenda</li>
      <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Galeri</li>
    </ul>
  )}
</li>

{/* KEUANGAN — accordion */}
    <li>
  <button
    onClick={() => setMenuAktifHp(menuAktifHp === 'keuangan' ? null : 'keuangan')}
    className="w-full text-left px-6 py-3 text-white hover:bg-slate-700 cursor-pointer flex justify-between"
  >
    KEUANGAN <span>{menuAktifHp === 'keuangan' ? '▴' : '▾'}</span>
  </button>
  {menuAktifHp === 'keuangan' && (
    <ul className="bg-slate-900">
      <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">BOS</li>
      <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Komite</li>
    </ul>
  )}
</li>

    {/* LAYANAN — accordion */}
    <li>
      <button
        onClick={() => setMenuAktifHp(menuAktifHp === 'layanan' ? null : 'layanan')}
        className="w-full text-left px-6 py-3 text-white hover:bg-slate-700 cursor-pointer flex justify-between"
      >
        LAYANAN <span>{menuAktifHp === 'layanan' ? '▴' : '▾'}</span>
      </button>
      {menuAktifHp === 'layanan' && (
        <ul className="bg-slate-900">
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">E-Learning</li>
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">
            <a href="#ekstrakurikuler" onClick={() => setMenuHp(false)}>Ekstrakurikuler</a>
            </li>
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Perpustakaan</li>
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">Layanan Kesiswaan</li>
        </ul>
      )}
    </li>

    <li className="px-6 py-3 text-white hover:bg-slate-700 cursor-pointer">
        <a href="#prestasi" onClick={() => setMenuHp(false)}>PRESTASI</a>
        </li>
    <li className="px-6 py-3 text-white hover:bg-slate-700 cursor-pointer">
      <a href="#alumni" onClick={() => setMenuHp(false)}>PROFIL ALUMNI</a>
    </li>
    <li>
  
    <a href="#kontak"
    onClick={() => setMenuHp(false)}
    className="block px-6 py-3 text-white hover:bg-slate-700 cursor-pointer"
  >
    KONTAK
  </a>
</li>
  </ul>
</div>
    </nav>
  )
}

export default Navbar