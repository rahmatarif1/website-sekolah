import PageShell from "../components/PageShell";

function VisiMisi() {
  return (
    <PageShell judulBreadcrumb="Visi & Misi">

      {/* VISI */}
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-center mb-4 tracking-wide">
        VISI
      </h2>
      <p className="text-center max-w-3xl mx-auto">
        Terwujudnya sekolah yang mampu... (isi visi).
      </p>

      {/* MISI */}
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 text-center mt-10 mb-4 tracking-wide">
        MISI
      </h2>
      <ol className="list-decimal list-outside space-y-3 pl-6 max-w-3xl mx-auto">
        <li>Mengembangkan kemampuan akademik...</li>
        <li>Mengembangkan kedisiplinan...</li>
        <li>Mengembangkan sikap berkompetisi...</li>
        <li>Menanamkan nilai keteladanan...</li>
      </ol>

    </PageShell>
  );
}

export default VisiMisi;