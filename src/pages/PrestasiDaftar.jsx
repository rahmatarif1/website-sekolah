import { Link } from "react-router";
import { prestasiData } from "../data/prestasiData";
import heroPrestasi from "../assets/prestasi/hero.jpg"; // foto banner; sesuaikan

function PrestasiDaftar() {
  return (
    <div className="min-h-screen">

      {/* HERO BANNER */}
      <div className="relative h-80 md:h-96">
        <img src={heroPrestasi} alt="Prestasi" className="w-full h-full object-cover" />
        {/* overlay gelap */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">PRESTASI</h1>
          <div className="bg-black/40 rounded-lg px-5 py-2 text-sm text-white flex items-center gap-2">
            <Link to="/" className="hover:text-amber-400">🏠 Home</Link>
            <span className="text-amber-400">›</span>
            <span>Prestasi</span>
          </div>
        </div>
      </div>

      {/* GRID PRESTASI */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prestasiData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  <Link to={`/prestasi/${item.id}`} className="hover:text-amber-500">
                    {item.judul}
                  </Link>
                </h3>
                <Link
                  to={`/prestasi/${item.id}`}
                  className="text-blue-950 font-bold text-sm hover:text-amber-500 border-b border-gray-200 pb-3"
                >
                  READ MORE »
                </Link>
                <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                  <span>👤</span> ADMIN
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default PrestasiDaftar;