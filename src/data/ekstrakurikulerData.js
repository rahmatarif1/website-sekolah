// src/data/ekstrakurikulerData.js
// Sumber data tunggal untuk:
//  - section grid Ekstrakurikuler di beranda (Ekskul.jsx) -> Icon + nama
//  - halaman detail /ekstrakurikuler/:id                  -> + deskripsiLengkap, pembina, jadwal
// Catatan: Icon menyimpan KOMPONEN lucide (bukan teks), jadi lucide di-import DI SINI.

import { Tent, Mic, Swords, Music, Medal, Volleyball, Goal, Newspaper } from 'lucide-react'

export const ekskul = [
  { id: 40, nama: "Pramuka", Icon: Tent, warna: "text-green-600",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Pramuka.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 41, nama: "Khitobiyah", Icon: Mic, warna: "text-amber-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Khitobiyah.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 42, nama: "Pencak Silat", Icon: Swords, warna: "text-red-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Pencak Silat.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 43, nama: "Menari", Icon: Music, warna: "text-pink-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Menari.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 44, nama: "Olimpiade", Icon: Medal, warna: "text-yellow-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Olimpiade.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 45, nama: "Volley", Icon: Volleyball, warna: "text-orange-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Volley.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 46, nama: "Mini Soccer", Icon: Goal, warna: "text-emerald-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Mini Soccer.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 48, nama: "Jurnalistik", Icon: Newspaper, warna: "text-cyan-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Jurnalistik.", pembina: "// TODO", jadwal: "// TODO" },
]