"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">CRM Solutions</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="block hover:text-blue-400">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/customers" className="block hover:text-blue-400">
            Customers
          </Link>
        </li>

        <li>
          <Link href="/leads" className="block hover:text-blue-400">
            Leads
          </Link>
        </li>

        <li>
          <Link href="/settings" className="block hover:text-blue-400">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}