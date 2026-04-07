import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between p-5 shadow">
      <h1 className="font-bold text-xl">CRM Solutions</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}