import PageShell from "../components/PageShell";
import baganMadrasah from "../assets/struktur/struktur-madrasah.jpg"; // sesuaikan nama file

function StrukturMadrasah() {
  return (
    <PageShell judulBreadcrumb="Struktur Organisasi Madrasah">
      <img
        src={baganMadrasah}
        alt="Struktur Organisasi Madrasah"
        className="w-full rounded-lg shadow-md"
      />
    </PageShell>
  );
}

export default StrukturMadrasah;    