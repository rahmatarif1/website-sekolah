// src/data/ekstrakurikulerData.js
// Sumber data tunggal untuk:
//  - section grid Ekstrakurikuler di beranda (Ekskul.jsx) -> Icon + nama
//  - halaman detail /ekstrakurikuler/:id                  -> + deskripsiLengkap, pembina, jadwal
// Catatan: Icon menyimpan KOMPONEN lucide (bukan teks), jadi lucide di-import DI SINI.

import { Users, Heart, FlaskConical, Cpu, BookOpen, Drama, Mountain, Languages } from 'lucide-react'

export const ekskul = [
  { id: 40, nama: "Pleton Inti (TONTI)", Icon: Users, warna: "text-blue-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan TONTI.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 41, nama: "Teladan Junior Red Cross (TJRC)", Icon: Heart, warna: "text-red-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan TJRC.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 42, nama: "Teladan Science Club (TSC)", Icon: FlaskConical, warna: "text-amber-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan TSC.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 43, nama: "Teladan Robotic Club (TRC)", Icon: Cpu, warna: "text-green-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan TRC.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 44, nama: "SIGMA (Jurnalistik)", Icon: BookOpen, warna: "text-cyan-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan SIGMA.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 45, nama: "Nila Pangkaja (Teater)", Icon: Drama, warna: "text-purple-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan Nila Pangkaja.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 46, nama: "Teladan Hiking Association (THA)", Icon: Mountain, warna: "text-emerald-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan THA.", pembina: "// TODO", jadwal: "// TODO" },
  { id: 47, nama: "All Nation Teenagers", Icon: Languages, warna: "text-pink-500",
    deskripsiLengkap: "// TODO: deskripsi kegiatan All Nation Teenagers.", pembina: "// TODO", jadwal: "// TODO" },
]