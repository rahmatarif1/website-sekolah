import { Mail, MapPin, Phone, Printer } from 'lucide-react'

function Kontak() {
  const kontak = [
    { Icon: Mail, label: "Email", isi: "mtsdarulmuttaqin@gmail.com" },
    { Icon: MapPin, label: "Alamat", isi: "Jl. A. Yani KM 46, Pangkalan Dewa, Pangkalan Lada, Kotawaringin Barat , Kalimantan Tengah 74184" },
    { Icon: Phone, label: "Telepon", isi: "0813 4843 0221" },
  ]

  return (
    <section id="kontak" className="px-8 py-16 bg-slate-100">
      <h2 className="text-3xl font-bold text-blue-950 text-center mb-2">
        Hubungi Kami
      </h2>
      <div className="flex justify-center gap-2 mb-12">
        <span className="w-8 h-1 bg-amber-400"></span>
        <span className="w-4 h-1 bg-amber-400"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* KIRI — Peta */}
        <div>
          <h3 className="text-2xl font-bold text-blue-950 mb-4">Denah Lokasi</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0831453315072!2d111.82407920271429!3d-2.4883440724879344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e088904c2129ea7%3A0x506e60588073ae84!2sMTs%20Darul%20Muttaqin!5e0!3m2!1sen!2sus!4v1781990476402!5m2!1sen!2sus" 
            className="w-full h-80 rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            title="Lokasi MTs Darul Muttaqin"
          ></iframe>
        </div>

        {/* KANAN — Kontak */}
        <div>
          <h3 className="text-2xl font-bold text-blue-950 mb-4">Kontak</h3>
          <div className="flex flex-col gap-4">
            {kontak.map((item, index) => {
              const Icon = item.Icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <Icon className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-blue-950 font-bold">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.isi}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Kontak