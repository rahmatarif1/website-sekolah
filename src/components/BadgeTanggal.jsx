function BadgeTanggal({ tanggal, bulan, tahun }) {
  return (
    <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white rounded-lg px-3 py-2 text-center shadow-lg">
      <div className="text-2xl font-bold leading-none text-amber-400">{tanggal}</div>
      <div className="text-xs mt-1">{bulan}, {tahun}</div>
    </div>
  );
}

export default BadgeTanggal;