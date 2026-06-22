import { Link } from "react-router";

function Breadcrumb({ judul, induk, lebar = "max-w-5xl", tengah = false }) {
  return (
    <div className={`${lebar} mx-auto px-4 md:px-6`}>
      <div className={`bg-slate-100 rounded-lg px-4 py-3 text-xs md:text-sm text-slate-600 ${tengah ? "text-center" : ""}`}>
        <Link to="/" className="text-emerald-700 hover:underline">Home</Link>
        <span className="mx-2">›</span>

        {induk && (
          <>
            <Link to={induk.to} className="text-emerald-700 hover:underline">{induk.label}</Link>
            <span className="mx-2">›</span>
          </>
        )}

        <span>{judul}</span>
      </div>
    </div>
  );
}

export default Breadcrumb;