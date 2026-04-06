import Link from 'next/link';

export default function SimpleNavbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#FFFFFF] py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-[#121212]">
          <span className="font-display font-black text-xl tracking-tighter uppercase">THE ORDINARY COMPANY</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-[#121212]">
          <Link href="/#services" className="hover:text-[#FF0000] transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-[#FF0000] transition-colors">Work</Link>
          <Link href="/careers" className="hover:text-[#FF0000] transition-colors">Careers</Link>
          <Link href="/blog" className="hover:text-[#FF0000] transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-[#FF0000] transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
