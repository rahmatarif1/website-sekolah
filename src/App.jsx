import Navbar from './Navbar'
import Hero from './Hero'
import Berita from './Berita'
import Alumni from './Alumni'
import Highlight from './Highlight'
import Prestasi from './Prestasi'
import Ekskul from './Ekskul'
import Guru from './Guru'
import Kontak from './Kontak'
import Footer from './Footer'


function App() {
  const programs = [
    { judul: "Tahfidz Al-Qur'an", deskripsi: "Program hafalan dengan bimbingan ustadz berpengalaman."},
    { judul: "Sains & Teknologi", deskripsi: "Laboratorium dan pembelajaran berbasis praktik." },
    { judul: "Bahasa Arab & Inggris", deskripsi: "Penguasaan dua bahasa untuk masa depan global." },
    {judul:"Khitobiyah", deskripsi:"Penerapan Public Speaking."},
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlight />
        <Berita />
        <Prestasi />
        <Ekskul />
        <Guru /> 
        <Alumni />
        <Kontak />
        <Footer />

    </div>
  )
}

export default App