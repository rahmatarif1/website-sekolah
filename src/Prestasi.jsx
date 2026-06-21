function Prestasi() {
  const prestasi = [
    { gambar: "/prestasi1.jpg", judul: "Juara 2 Panahan Compound Olympic Round Team", tanggal: "06 Apr, 2026", skala: "Skala Provinsi", siswa: "Faith Radithya Muhammad XI F6" },
    { gambar: "/prestasi2.jpg", judul: "Juara 2 Panahan Compound Olympic Round Individual", tanggal: "06 Apr, 2026", skala: "Skala Provinsi", siswa: "Faith Radithya Muhammad, XI F6" },
    { gambar: "/prestasi3.jpg", judul: "Juara 3 PORDA Wushu", tanggal: "05 Apr, 2026", skala: "Skala Provinsi", siswa: "Ahmad Fauzan, X A2" },
    { gambar: "/prestasi4.jpg", judul: "Juara 1 MTQ Tingkat Kota", tanggal: "12 Mar, 2026", skala: "Skala Kota", siswa: "Siti Nurhaliza, IX B1" },
  ]

  return (
    <section id="prestasi" className="px-8 py-16 bg-slate-100">
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-2">
        Prestasi
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      {/* Kotak dengan scroll internal */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {prestasi.map((item, index) => (
          <div
  key={index}
  className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md overflow-hidden min-h-[16rem]"
>
            {/* Foto besar */}
            <img
  src={item.gambar}
  alt={item.judul}
  className="w-full md:w-72 h-48 md:h-auto object-cover shrink-0"
/>

            {/* Detail */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-950 mb-3">{item.judul}</h3>
              <p className="text-gray-600 mb-3 flex items-center gap-2">
                <span>📅</span> {item.tanggal}
              </p>
              <hr className="border-gray-200 mb-3" />
              <p className="text-gray-700 mb-2">{item.skala}</p>
              <p className="text-gray-700 flex items-center gap-2">
                <span>👤</span> {item.siswa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Prestasi