import PageShell from "../components/PageShell";
import baganKomite from "../assets/struktur/komite.jpg"; // sesuaikan nama file

function StrukturKomite() {
  return (
    <PageShell judulBreadcrumb="Struktur Komite">
      <img
        src={baganKomite}
        alt="Struktur Komite"
        className="w-full rounded-lg shadow-md"
      />
    </PageShell>
  );
}

export default StrukturKomite;