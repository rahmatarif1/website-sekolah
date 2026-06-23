import { Link } from "react-router";
import { beritaData } from "./data/beritaData";

function Berita() {
  // ambil 6 berita teratas untuk beranda
  const beritaTampil = beritaData.slice(0, 6);

  return (
    <section id="berita" className="px-8 py-16 bg-blue-950">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Berita Terbaru
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {beritaTampil.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">

            {/* Foto + tanggal melayang + efek zoom */}
            <div className="relative overflow-hidden group">
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-blue-950/80 text-white px-4 py-2 z-10">
                <p className="text-2xl font-bold leading-none">{item.tanggal}</p>
                <p className="text-xs text-amber-400">{item.bulan}, {item.tahun}</p>
              </div>
            </div>

            {/* Isi kartu */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-blue-950 mb-2">
                <Link to={`/berita/${item.id}`} className="hover:text-amber-500">
                  {item.judul}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.ringkasan}</p>
              <Link
                to={`/berita/${item.id}`}
                className="block text-blue-950 font-bold text-sm hover:text-amber-500 cursor-pointer border-b border-gray-200 pb-3 w-full text-left"
              >
                Read More »
              </Link>
              <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                <span>👤</span> admin
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Tombol bawah → ke halaman daftar penuh */}
      <div className="text-center mt-10">
        <Link
          to="/berita"
          className="inline-block border-2 border-amber-400 text-amber-400 font-bold px-8 py-3 rounded hover:bg-amber-400 hover:text-blue-950 cursor-pointer"
        >
          TAMPILKAN SEMUA BERITA
        </Link>
      </div>
    </section>
  );
}

export default Berita;