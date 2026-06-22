import PageShell from "../components/PageShell";
import fotoGedung from "../assets/sejarah/gedung.jpg";

function Sejarah() {
  return (
    
        <PageShell judulBreadcrumb="Sejarah Madrasah" gambar={fotoGedung}>
      <p>
        MTs Darul Muttaqin didirikan pada... (isi sejarah di sini).
      </p>
    </PageShell>
  );
}

export default Sejarah;