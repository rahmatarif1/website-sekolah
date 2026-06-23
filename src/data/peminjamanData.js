// src/data/peminjamanData.js
// Tabel TAMPILAN (read-only) — admin yang isi/ubah data di sini.
// Catatan: id di sini cuma buat "key" React, TIDAK perlu unik antar-file
// karena tidak dipakai di route :id (beda dengan berita/alumni/prestasi).

export const peminjaman = [
  { id: 1, judul: "Samurai",       peminjam: "Ahmad Fauzi",  kelas: "IX A", tglPinjam: "10 Jun 2026", tglKembali: "17 Jun 2026", status: "Dipinjam" },
  { id: 2, judul: "Die Therapie",  peminjam: "Siti Aminah",  kelas: "VIII B", tglPinjam: "05 Jun 2026", tglKembali: "12 Jun 2026", status: "Kembali" },
  { id: 3, judul: "33 Kunci",      peminjam: "Budi Santoso", kelas: "IX C", tglPinjam: "12 Jun 2026", tglKembali: "19 Jun 2026", status: "Dipinjam" },
]