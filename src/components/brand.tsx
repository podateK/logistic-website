import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Veloq home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {!compact && <span>veloq</span>}
    </Link>
  );
}
