// src/data/guruData.js
// Sumber data tunggal untuk:
//  - section "Guru dan Tenaga Kependidikan" di beranda (Guru.jsx) -> nama, jabatan, foto
//  - halaman detail /guru/:id (GuruDetail.jsx)                    -> + bio
// Aturan: id WAJIB unik di seluruh file data. (Mulai 30 — sesuaikan kalau nabrak.)

export const guru = [
  { id: 30, nama: "Sholihuddin, S.Pd.I., Gr.", jabatan: "Kepala Madrasah", foto: "/guru1.jpg",
    bio: "// TODO: lengkapi biografi (latar pendidikan, pengalaman, dan peran beliau di MTs Darul Muttaqin)." },
  { id: 31, nama: "Nur Huda, S.Pd., Gr.", jabatan: "Waka Kurikulum", foto: "/guru2.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 32, nama: "Prihatin, S.Pd.", jabatan: "Kepala Perpustakaan", foto: "/guru3.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 33, nama: "Endang Sujarwati, S.Pd.I.", jabatan: "Bahasa Inggris", foto: "/guru4.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 34, nama: "Rahmat Arif Setiawan, S.Pd.", jabatan: "Pendidikan Jasmani, Olahraga & Kesehatan", foto: "/guru5.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 35, nama: "Siti Muhimatul Hoiroh, S.Pd.I.", jabatan: "Akidah Akhlak", foto: "/guru6.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 36, nama: "Wahyu Prasetyo Putra, S.Pd., Gr.", jabatan: "IPA", foto: "/guru7.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
  { id: 37, nama: "Fauziyatul Iffah, Lc., M.Pd.", jabatan: "IPA Terpadu", foto: "/guru8.jpg",
    bio: "// TODO: lengkapi biografi singkat." },
]