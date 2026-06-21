function Card({ judul, deskripsi }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg w-72">
      <h3 className="text-xl font-bold text-amber-400 mb-2">{judul}</h3>
      <p className="text-gray-300">{deskripsi}</p>
    </div>
  )
}

export default Card