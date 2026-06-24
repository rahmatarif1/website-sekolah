import { Link } from 'react-router'
import { ekskul } from './data/ekstrakurikulerData'

function Ekskul() {
  return (
    <section id="ekstrakurikuler" className="px-9 py-16 bg-blue-950">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Ekstrakurikuler
      </h2>
      <div className="flex justify-center gap-2 mb-10">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {ekskul.map((item) => {
          const Icon = item.Icon
          return (
            <Link
              key={item.id}
              to={'/ekstrakurikuler/' + item.id}
              className="bg-white rounded-lg p-4 md:p-16 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Icon className={`w-12 h-12 md:w-15 md:h-15 shrink-0 ${item.warna}`} strokeWidth={1.5} />
              <h3 className="font-bold text-blue-950 text-sm md:text-base">{item.nama}</h3>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Ekskul