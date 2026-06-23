import { useState, useEffect } from 'react'

import { Link } from "react-router";
import logo from './assets/logo.png'
import { useLocation } from "react-router";

// ...import lain

  

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

  const { pathname } = useLocation();
  const diBeranda = pathname === "/";

  const [strukturHp, setStrukturHp] = useState(false)
  const [kelasHp, setKelasHp] = useState(false)
  // ...state scrolled yang sudah ada tetap

  // navbar solid jika: sudah scroll, ATAU sedang tidak di beranda
  const navSolid = scrolled || !diBeranda;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center gap-4 px-8 py-4 transition-colors duration-300 ${
  navSolid ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
}`}>

      {/* Tombol HAMBURGER — di KIRI, hanya HP */}
      <button
        onClick={() => setMenuHp(!menuHp)}
        className="md:hidden text-white text-3xl cursor-pointer"
      >
        ☰
      </button>

      <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center gap-2 md:gap-3 mx-auto md:mx-0"
>
  <img src={logo} alt="Logo MTs Darul Muttaqin" className="h-8 md:h-10 w-auto" />
  <h2 className="text-base md:text-2xl font-bold text-white">
    <span className="md:hidden">MTs DaMu</span>
    <span className="hidden md:inline">MTs Darul Muttaqin</span>
  </h2>
</Link>
      {/* Menu DESKTOP — didorong ke kanan dengan ml-auto */}
      <ul className="hidden md:flex gap-8 items-center ml-auto text-sm">

        {/* PROFIL — dropdown... (isi menu desktop tetap sama seperti sekarang) */}

        {/* PROFIL — dropdown, dengan sub Struktur */}
        <li
          className="relative"
          onMouseEnter={() => setBukaProfil(true)}
          onMouseLeave={() => setBukaProfil(false)}
        >
          <button className="text-white hover:text-gray-300 cursor-pointer">
            PROFIL MADRASAH ▾
          </button>
          {bukaProfil && (
            <ul className="absolute top-full left-0 bg-slate-800 rounded-lg py-2 w-48">
              <li className="hover:bg-slate-700">
              <Link to="/profil/sambutan" className="block px-4 py-2 text-white cursor-pointer">Kata Sambutan</Link>
              </li>
              <li className="hover:bg-slate-700">
              <Link to="/sejarah" className="block px-4 py-2 text-white cursor-pointer"> Sejarah</Link>
              </li>
              <li className="hover:bg-slate-700">
  <Link to="/profil/visi-misi" className="block px-4 py-2 text-white cursor-pointer">
    Visi &amp; Misi
  </Link>
</li>
              <li className="hover:bg-slate-700"> <a href="https://sarpra.mtsdm.sch.id" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white cursor-pointer">Sarana Prasarana</a>
</li>
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
                    <li className="hover:bg-slate-700">
  <Link to="/profil/struktur/madrasah" className="block px-4 py-2 text-white cursor-pointer">
    Madrasah
  </Link>
</li>
                    <li className="hover:bg-slate-700">
  <Link to="/profil/struktur/komite" className="block px-4 py-2 text-white cursor-pointer">
    Komite
  </Link>
</li>
                    <li className="hover:bg-slate-700">
  <Link to="/profil/struktur/osim" className="block px-4 py-2 text-white cursor-pointer">
    OSIM
  </Link>
</li>
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
              <li className="hover:bg-slate-700">
  <Link to="/berita" className="block px-4 py-2 text-white">
    Berita Terbaru
  </Link>
</li>
              <li className="hover:bg-slate-700">
  <Link to="/info-sekolah" className="block px-4 py-2 text-white">
    Info Sekolah
  </Link>
</li>
              <li className="hover:bg-slate-700">
  <Link to="/agenda" className="block px-4 py-2 text-white">
    Agenda
  </Link>
</li>
              <li className="hover:bg-slate-700">
  <Link to="/galeri" className="block px-4 py-2 text-white">
    Galery  </Link>
</li>
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
              <li className="hover:bg-slate-700">
  <Link to="/keuangan/bos" className="block px-4 py-2 text-white">BOS</Link>
</li>
<li className="hover:bg-slate-700">
  <Link to="/keuangan/komite" className="block px-4 py-2 text-white">Komite</Link>
</li>
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
              
  <Link to="/#ekstrakurikuler" className="block px-4 py-2 text-white">Ekstrakurikuler</Link>
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
                    <li className="hover:bg-slate-700">
  <Link to="/kelas/osm" className="block px-4 py-2 text-white cursor-pointer">OSM</Link>
</li>
<li className="hover:bg-slate-700">
  <Link to="/kelas/khafidz" className="block px-4 py-2 text-white cursor-pointer">Khafidz</Link>
</li>
<li className="hover:bg-slate-700">
  <Link to="/kelas/bahasa" className="block px-4 py-2 text-white cursor-pointer">Bahasa</Link>
</li>
                  </ul>
                )}
              </li>
              <li className="hover:bg-slate-700 cursor-pointer">
              <Link to="/perpustakaan" className="block px-4 py-2 text-white">
    Perpustakaan  </Link> </li>
              <li className="hover:bg-slate-700"> <a href="https://forms.gle/FrQWUFPrwhEBBNGw5" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-white cursor-pointer">Layanan Kesiswaan</a>
</li>
            </ul>
          )}
        </li>

        <Link to="/#prestasi" className="text-white hover:text-gray-300 cursor-pointer">
    PRESTASI </Link>
        <li>
  <Link to="/#alumni" className="text-white hover:text-gray-300 cursor-pointer">
    PROFIL ALUMNI
  </Link>
</li>
<li>
  <Link to="/#kontak" className="text-white hover:text-gray-300 cursor-pointer">KONTAK</Link>
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
          <li className="hover:bg-slate-700">
    <Link to="/profil/sambutan" onClick={() => setMenuHp(false)}
    className="block px-10 py-2 text-gray-300">Kata Sambutan</Link>
          </li>
          <li className="hover:bg-slate-700">
  <Link to="/sejarah" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Sejarah
  </Link>
</li>
          <li className="hover:bg-slate-700">
  <Link to="/profil/visi-misi" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Visi &amp; Misi
  </Link>
</li>
          <li className="hover:bg-slate-700">
  
    <a href="https://alamat-web-sarana.com"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setMenuHp(false)}
    className="block px-10 py-2 text-gray-300"
  >
    Sarana Prasarana
  </a>
</li>
          {/* Sub-accordion Struktur */}
<li>
  <button
    onClick={() => setStrukturHp(!strukturHp)}
    className="w-full text-left px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer flex justify-between items-center"
  >
    Struktur Organisasi <span>{strukturHp ? '▴' : '▾'}</span>
  </button>

  {strukturHp && (
    <ul className="bg-slate-950">
      <li className="hover:bg-slate-700">
        <Link to="/profil/struktur/madrasah" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          Madrasah
        </Link>
      </li>
      <li className="hover:bg-slate-700">
        <Link to="/profil/struktur/komite" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          Komite Madrasah
        </Link>
      </li>
      <li className="hover:bg-slate-700">
        <Link to="/profil/struktur/osim" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          OSIM
        </Link>
      </li>
    </ul>
  )}
</li>
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
      <li className="hover:bg-slate-700">
  <Link to="/berita" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Berita Terbaru
  </Link>
</li>
      <li className="hover:bg-slate-700">
  <Link to="/info-sekolah" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Info Sekolah
  </Link>
</li>
      <li className="hover:bg-slate-700">
  <Link to="/agenda" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Agenda
  </Link>
</li>
      <li className="hover:bg-slate-700">
  <Link to="/galeri" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Galery
  </Link>
</li>
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
      <li className="hover:bg-slate-700">
  <Link to="/keuangan/bos" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">BOS</Link>
</li>
<li className="hover:bg-slate-700">
  <Link to="/keuangan/komite" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">Komite</Link>
</li>
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
          {/* E-Learning masih placeholder (belum ada halaman/route) */}
          <li className="px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer">E-Learning</li>
          <li className="hover:bg-slate-700">
  <Link to="/#ekstrakurikuler" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Ekstrakurikuler
  </Link>
</li>

{/* Sub-accordion Kelas Layanan */}
<li>
  <button
    onClick={() => setKelasHp(!kelasHp)}
    className="w-full text-left px-10 py-2 text-gray-300 hover:bg-slate-700 cursor-pointer flex justify-between items-center"
  >
    Kelas Layanan <span>{kelasHp ? '▴' : '▾'}</span>
  </button>

  {kelasHp && (
    <ul className="bg-slate-950">
      <li className="hover:bg-slate-700">
        <Link to="/kelas/osm" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          OSM
        </Link>
      </li>
      <li className="hover:bg-slate-700">
        <Link to="/kelas/khafidz" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          Khafidz
        </Link>
      </li>
      <li className="hover:bg-slate-700">
        <Link to="/kelas/bahasa" onClick={() => setMenuHp(false)} className="block px-14 py-2 text-gray-400">
          Bahasa
        </Link>
      </li>
    </ul>
  )}
</li>


          <li className="hover:bg-slate-700">
  <Link to="/perpustakaan" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Perpustakaan
  </Link>
</li>
          <li className="hover:bg-slate-700">
  <a href="https://forms.gle/FrQWUFPrwhEBBNGw5" target="_blank" rel="noopener noreferrer" onClick={() => setMenuHp(false)} className="block px-10 py-2 text-gray-300">
    Layanan Kesiswaan
  </a>
</li>
        </ul>
      )}
    </li>

    <li className="hover:bg-slate-700">
  <Link to="/#prestasi" onClick={() => setMenuHp(false)} className="block px-6 py-3 text-white">
    PRESTASI
  </Link>
</li>
    <li className="hover:bg-slate-700">
  <Link to="/#alumni" onClick={() => setMenuHp(false)} className="block px-6 py-3 text-white">
    PROFIL ALUMNI
  </Link>
</li>
    <li className="hover:bg-slate-700">
  <Link to="/#kontak" onClick={() => setMenuHp(false)} className="block px-6 py-3 text-white">
    KONTAK
  </Link>
</li>
  </ul>
</div>
    </nav>
  )
}

export default Navbar