import bos1 from "../assets/keuangan/bos1.jpg";
import dokBos1 from "../assets/keuangan/rekap1.jpg"; // foto laporannya


import komite1 from "../assets/keuangan/komite1.jpg"; // sesuaikan; atau pakai gambar yang sudah ada
import dokKomite1 from "../assets/keuangan/rekapkom1.jpg"; // foto laporannya


export const keuanganData = [
  {
    id: 1,
    judul: "Rekapitulasi Realisasi Penggunaan Dana BOSP Tahun 2025",
    gambar: bos1,          // untuk kartu/banner
    dokumen: dokBos1,      // ← foto laporan besar di detail
    tanggal: "07",
    bulan: "Nov",
    tahun: 2025,
    kategori: "BOS",
    ringkasan: "...",
    isi: ["..."],
  },

{
    id: 2,                                    // ← lanjutkan dari id terakhir, jangan ulang
    judul: "Laporan Penggunaan Dana Komite Tahun 2025",
    gambar: komite1,                          // untuk kartu
    dokumen: komite1,                         // foto laporan besar di detail (opsional)
    tanggal: "12",
    bulan: "Des",
    tahun: 2025,
    kategori: "Komite",                       // ← wajib persis "Komite"
    ringkasan: "Laporan penggunaan dana komite sekolah tahun ajaran 2025...",
    isi: [
      "Rincian penggunaan dana komite...",
      "Keterangan tambahan...",
    ],
  },

];