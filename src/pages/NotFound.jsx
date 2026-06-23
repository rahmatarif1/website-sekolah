import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
     <h1 className="text-7xl md:text-9xl font-bold text-[#1e3a5f] animate-404">
  404
</h1>

      <p className="mt-4 text-lg md:text-xl text-gray-600">
  Halaman tidak ditemukan.
</p>

      <p
        className="mt-2 text-gray-500 animate-fadeIn"
        style={{ animationDelay: "0.4s" }}
      >
        Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="mt-8 bg-[#1e3a5f] text-white px-6 py-3 rounded-lg hover:bg-[#16293f] transition-colors animate-fadeIn"
        style={{ animationDelay: "0.6s" }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;