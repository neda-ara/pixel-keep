import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Gallery",
  },
  {
    href: "/playground",
    label: "Playground",
  },
];

export function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-zinc-200 px-6 py-8 lg:block dark:border-zinc-800">
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
