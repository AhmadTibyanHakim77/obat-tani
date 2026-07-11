import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-white py-12">
      <div className="section flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white">
            <Leaf size={21} />
          </span>
          <div>
            <p className="font-black text-forest">AgroNusa Store Enterprise</p>
            <p className="text-sm text-forest/58">Marketplace, CRM, inventori, ERP-lite, dan analytics agrikultur.</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-forest/58">Siap untuk petani, distributor, perusahaan, pemerintah, dan peneliti.</p>
      </div>
    </footer>
  );
}
