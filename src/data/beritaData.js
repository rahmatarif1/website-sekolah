// import gambar dulu (Vite butuh import untuk file di assets)
import berita1 from "../assets/berita/mc1.jpg";
import berita2 from "../assets/berita/contoh2.jpg";

export const beritaData = [
  {
    id: 1,
    judul: "Master Ceremony",
    gambar: berita1,
    tanggal: "11",
    bulan: "Mar",
    tahun: 2026,
    ringkasan:
      "Patah Tumbuh, Hilang Berganti",
    isi: [
      "Paragraf pertama isi berita lengkap...",
      "Paragraf kedua isi berita lengkap...",
    ],
  },
  {
    id: 2,
    judul: "Judul Berita Kedua",
    gambar: berita2,
    tanggal: "05",
    bulan: "Feb",
    tahun: 2026,
    ringkasan: "Ringkasan singkat berita kedua...",
    isi: [
      "Isi lengkap berita kedua paragraf 1...",
      "Isi lengkap berita kedua paragraf 2...",
    ],
  },
  {
    id: 3,
    judul: "MTs Darul Muttaqin Go OSM",
    gambar: berita2,
    tanggal: "05",
    bulan: "Feb",
    tahun: 2026,
    ringkasan: "Ringkasan singkat berita kedua...",
    isi: [
      "Isi lengkap berita kedua paragraf 1...",
      "Isi lengkap berita kedua paragraf 2...",
    ],
  },
];