import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "./ScrollToTop";
import { useLocation } from 'react-router';
import { useEffect } from "react";

function Layout() {
  const { pathname } = useLocation()

  // Daftar halaman tanpa navbar & footer. Tambah alamat lain di sini kalau perlu.
  const halamanPolos = ["/perpustakaan", "/usulan-buku", "/peminjaman-buku"].includes(pathname)
  
// di dalam komponen Layout, sebelum return:
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }
}, [location])



  return (
    <>
      {!halamanPolos && <Navbar />}
      <ScrollToTop />
      <Outlet />
      {!halamanPolos && <Footer />}
    </>
  )
}

export default Layout