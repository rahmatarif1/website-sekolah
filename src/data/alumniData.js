// src/data/alumniData.js
// Sumber data tunggal untuk:
//  - section "Profil Alumni" di beranda (Alumni.jsx) -> pakai field "kisah" (singkat)
//  - halaman detail /alumni/:id (AlumniDetail.jsx)   -> pakai field "kisahLengkap"
// Aturan: id WAJIB unik di seluruh file data (lanjut dari id tertinggi yang sudah dipakai).

export const alumni = [
  {
    id: 14,
    nama: "Rita Juliawati, S.Pd., Gr.",
    tahunLulus: 2020, // TODO: isi tahun lulus dari MTs Darul Muttaqin kalau datanya ada
    foto: "/alumni1.jpg",
    kisah: "Kepala MTs N 1 Palangka Raya, dilantik 08 Juli 2024.",
    kisahLengkap:
      "Rita Juliawati, S.Pd., Gr. adalah Kepala MTs N 1 Palangka Raya yang dilantik pada 08 Juli 2024. " +
      "// TODO: lengkapi paragraf perjalanan beliau (latar pendidikan, pengalaman mengajar, prestasi, " +
      "dan pesan untuk adik-adik alumni).",
  },
  {
    id: 15,
    nama: "Resty Aulia Nurmaya Ulfi, S.Pd.",
    tahunLulus: 2020, // TODO: isi tahun lulus
    foto: "/alumni2.jpg",
    kisah: "Kepala Staf Urusan Haji & Umrah, Kemenag Wilayah Kalimantan Tengah.",
    kisahLengkap:
      "Resty Aulia Nurmaya Ulfi, S.Pd. saat ini menjabat sebagai Kepala Staf Urusan Haji dan Umrah " +
      "di Kementerian Agama Wilayah Kalimantan Tengah. " +
      "// TODO: lengkapi paragraf perjalanan karier dan pesan beliau.",
  },
  {
    id: 16,
    nama: "Nabilatul Ulum Fitria",
    tahunLulus: 2025, // TODO: isi tahun lulus
    foto: "/alumni3.jpg",
    kisah: "Lulusan terbaik.",
    kisahLengkap:
      "Nabilatul Ulum Fitria merupakan salah satu lulusan terbaik MTs Darul Muttaqin. " +
      "// TODO: lengkapi paragraf (prestasi, kegiatan saat sekolah, kelanjutan studi, dan pesan).",
  },
  {
    id: 17,
    nama: "Alif Muhammad Reza",
    tahunLulus: 2024, // TODO: isi tahun lulus
    foto: "/alumni4.jpg",
    kisah: "Lulusan terbaik.",
    kisahLengkap:
      "Alif Muhammad Reza merupakan salah satu lulusan terbaik MTs Darul Muttaqin. " +
      "// TODO: lengkapi paragraf (prestasi, kegiatan saat sekolah, kelanjutan studi, dan pesan).",
  },
]