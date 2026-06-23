// src/data/pengajuanData.js
// Tabel TAMPILAN (read-only) — daftar usulan buku yang masuk.
// Nanti kalau form pengajuan dibuat, data akan masuk ke sini lewat backend.

export const pengajuan = [
  { id: 1, judul: "Laskar Pelangi",        penulis: "Andrea Hirata",   pengusul: "Nadia Putri",  tanggal: "03 Jun 2026", status: "Disetujui" },
  { id: 2, judul: "Bumi Manusia",          penulis: "Pramoedya A.T.",  pengusul: "Rizki Ramadhan", tanggal: "08 Jun 2026", status: "Diproses" },
  { id: 3, judul: "Filosofi Teras",        penulis: "Henry Manampiring", pengusul: "Dewi Lestari", tanggal: "11 Jun 2026", status: "Ditolak" },
]