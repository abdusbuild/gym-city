import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <div>
        <b>404</b>
        <h1 className="h2">This page doesn&apos;t exist</h1>
        <p>The link may be old or mistyped.</p>
        <Link href="/" className="btn btn--gold">Back to Gym City</Link>
      </div>
    </main>
  );
}
