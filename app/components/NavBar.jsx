import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between">
      <div>
        <Link href={"/"}>
          <h1>Dojo Helpdesk</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/tickets"}>Tickets</Link>
      </div>
    </nav>
  );
}
