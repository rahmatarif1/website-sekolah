import PageShell from "../components/PageShell";
import baganOsim from "../assets/struktur/osim.jpg"; // sesuaikan nama file

function StrukturOsim() {
  return (
    <PageShell judulBreadcrumb="Struktur Osim">
      <img
        src={baganOsim}
        alt="Struktur Osim"
        className="w-full rounded-lg shadow-md"
      />
    </PageShell>
  );
}

export default StrukturOsim;