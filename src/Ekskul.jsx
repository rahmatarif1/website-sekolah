import { Users, Heart, FlaskConical, Cpu, BookOpen, Drama, Mountain, Languages } from 'lucide-react'

function Ekskul() {
  const ekskul = [
    { nama: "Pleton Inti (TONTI)", Icon: Users, warna: "text-blue-500" },
    { nama: "Teladan Junior Red Cross (TJRC)", Icon: Heart, warna: "text-red-500" },
    { nama: "Teladan Science Club (TSC)", Icon: FlaskConical, warna: "text-amber-500" },
    { nama: "Teladan Robotic Club (TRC)", Icon: Cpu, warna: "text-green-500" },
    { nama: "SIGMA (Jurnalistik)", Icon: BookOpen, warna: "text-cyan-500" },
    { nama: "Nila Pangkaja (Teater)", Icon: Drama, warna: "text-purple-500" },
    { nama: "Teladan Hiking Association (THA)", Icon: Mountain, warna: "text-emerald-500" },
    { nama: "All Nation Teenagers", Icon: Languages, warna: "text-pink-500" },
  ]

  return (
    <section id="ekstrakurikuler" className="px-9 py-16 bg-blue-950">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Ekstrakurikuler
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {ekskul.map((item, index) => {
          const Icon = item.Icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-14 flex items-center gap-4 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Icon className={`w-16 h-16 shrink-0 ${item.warna}`} strokeWidth={1.5} />
              <h3 className="font-bold text-blue-950">{item.nama}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Ekskul