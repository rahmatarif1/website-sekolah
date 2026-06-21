import fotoHero from './assets/hero.jpg'

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${fotoHero})` }}
    >
      {/* Overlay gelap tipis */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten — di atas overlay */}
      <div className="relative z-10 w-full">

        {/* Judul — lebar lebih sempit */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            MTs DARUL MUTTAQIN
          </h1>
        </div>

        {/* Search bar — lebar sendiri, lebih panjang */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
            <input
              type="text"
              placeholder="Apa yang ingin anda cari?"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-slate-700"
            />
            <button className="bg-amber-400 text-slate-900 font-bold px-8 py-2 rounded-full hover:bg-amber-300 cursor-pointer">
              Cari
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero