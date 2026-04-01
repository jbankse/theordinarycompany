'use client';

import Link from 'next/link';

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FFFFFF] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h4 className="font-sans font-bold text-[#121212]/50 text-xs md:text-sm mb-6">Company</h4>
            <ul className="space-y-4 font-sans text-xs md:text-sm text-[#121212]">
              <li><Link href="/" className="hover:text-[#FF0000] transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-[#FF0000] transition-colors">Services</Link></li>
              <li><Link href="/#work" className="hover:text-[#FF0000] transition-colors">Work</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF0000] transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF0000] transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-[#FF0000] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-[#121212]/50 text-xs md:text-sm mb-6">Social</h4>
            <ul className="space-y-4 font-sans text-xs md:text-sm text-[#121212]">
              <li><a href="https://instagram.com/stopbeingordinary" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com/company/theordinarycompany" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">LinkedIn</a></li>
              <li><a href="https://youtube.com/theordinarycompany" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">YouTube</a></li>
              <li><a href="https://x.com/theordinarycompany" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">X</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">Are.na</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-bold text-[#121212]/50 text-xs md:text-sm mb-6">Terms & Policies</h4>
            <ul className="space-y-4 font-sans text-xs md:text-sm text-[#121212]">
              <li><Link href="/terms" className="hover:text-[#FF0000] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FF0000] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 font-sans text-[#121212] text-xs md:text-sm">
          <p>The Ordinary Company © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
