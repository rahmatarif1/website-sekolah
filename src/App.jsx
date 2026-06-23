import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Sambutan from "./pages/Sambutan";
import VisiMisi from "./pages/VisiMisi";
import StrukturMadrasah from "./pages/StrukturMadrasah";
import StrukturKomite from "./pages/StrukturKomite";
import StrukturOsim from "./pages/StrukturOsim";
import BeritaDetail from "./pages/BeritaDetail";
import Berita from "./pages/Berita";
import InfoSekolah from "./pages/InfoSekolah";
import InfoDetail from "./pages/InfoDetail";
import Agenda from "./pages/Agenda";
import AgendaDetail from "./pages/AgendaDetail";
import Galeri from "./pages/Galeri";
import KeuanganBos from "./pages/KeuanganBos";
import KeuanganDetail from "./pages/KeuanganDetail";
import KeuanganKomite from "./pages/KeuanganKomite";
import PrestasiDaftar from "./pages/PrestasiDaftar";
import PrestasiDetail from "./pages/PrestasiDetail";
import AlumniDetail from './pages/AlumniDetail'
import Perpustakaan from './pages/Perpustakaan'
import UsulanBuku from './pages/UsulanBuku'
import PeminjamanBuku from './pages/PeminjamanBuku'
import GuruDetail from './pages/GuruDetail'
import EkstrakurikulerDetail from './pages/EkstrakurikulerDetail'
import NotFound from './pages/NotFound'
import HasilCari from './pages/HasilCari'




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profil/sambutan" element={<Sambutan />} />
        <Route path="sejarah" element={<Sejarah />} />
        <Route path="profil/visi-misi" element={<VisiMisi />} />
        <Route path="profil/struktur/madrasah" element={<StrukturMadrasah />} />
        <Route path="profil/struktur/komite" element={<StrukturKomite />} />
        <Route path="profil/struktur/osim" element={<StrukturOsim />} />
        <Route path="berita/:id" element={<BeritaDetail />} />
        <Route path="berita" element={<Berita />} />
        <Route path="info-sekolah" element={<InfoSekolah />} />
        <Route path="info-sekolah/:id" element={<InfoDetail />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="agenda/:id" element={<AgendaDetail />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="keuangan/bos" element={<KeuanganBos />} />
        <Route path="keuangan/detail/:id" element={<KeuanganDetail />} />
        <Route path="keuangan/komite" element={<KeuanganKomite />} />
        <Route path="prestasi" element={<PrestasiDaftar />} />
        <Route path="prestasi/:id" element={<PrestasiDetail />} />
        <Route path="/alumni/:id" element={<AlumniDetail />} />
        <Route path="/perpustakaan" element={<Perpustakaan />} />
        <Route path="/usulan-buku" element={<UsulanBuku />} />
        <Route path="/peminjaman-buku" element={<PeminjamanBuku />} />
        <Route path="/guru/:id" element={<GuruDetail />} />
        <Route path="/ekstrakurikuler/:id" element={<EkstrakurikulerDetail />} />
        <Route path="/cari" element={<HasilCari />} />
       
      </Route>
       <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;