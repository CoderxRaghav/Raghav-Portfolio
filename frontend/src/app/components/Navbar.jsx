import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Raghav Tiwari</div>

      <div className="nav-links">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
