import Link from "next/link";
import { Leaf, ShoppingBag, UserRoundCog } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <nav className="section glass flex items-center justify-between rounded-full px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-black text-forest" aria-label="AgroNusa beranda">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white">
            <Leaf size={20} />
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
          <span className="sm:hidden">AgroNusa</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold text-forest/75 md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-forest">
              {item.label}
            </a>
          ))}
          <Link href="/kasir" className="transition hover:text-forest">
            Kasir
          </Link>
        </div>
        <Link href="/kasir" className="hidden h-10 w-10 place-items-center rounded-full bg-cream text-forest sm:grid" aria-label="Masuk kasir">
          <UserRoundCog size={18} />
        </Link>
        <Link href="/checkout" className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-white shadow-soft">
          <ShoppingBag size={17} />
          Checkout
        </Link>
      </nav>
    </header>
  );
}
