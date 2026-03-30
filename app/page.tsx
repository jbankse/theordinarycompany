import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-[100dvh] bg-[#FFFFFF] overflow-x-hidden">
        <SchemaOrg />
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Contact />
        <Footer />
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>
    </SmoothScroll>
  );
}
