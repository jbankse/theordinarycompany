import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <main className="relative min-h-[100dvh] bg-[#FFFFFF] clip-path-none pt-24 lg:pt-32">
      <SimpleNavbar />
      
      <section className="w-full px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h1 className="font-display font-black text-[clamp(3rem,6vw,6rem)] leading-none uppercase tracking-tight text-[#121212]">
              TERMS OF SERVICE
            </h1>
            <p className="font-mono text-sm tracking-widest text-[#121212]/60 mt-8 uppercase">
              LAST UPDATED: MAR 31, 2026
            </p>
          </div>

          <div className="space-y-12 font-sans text-lg leading-relaxed text-[#121212]/80 max-w-4xl">
            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">2. Service Description</h2>
              <p>
                THE ORDINARY COMPANY, L.L.C. provides Visual Infrastructure as a Service (VIaaS), including but not limited to branding, motion design, social media management, and marketing content production. We reserve the right to modify, suspend or discontinue any part of our services at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">3. Intellectual Property</h2>
              <p>
                All content, features, and functionality on this site, including text, graphics, logos, icons, and images, are the exclusive property of THE ORDINARY COMPANY, L.L.C. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">4. User Conduct</h2>
              <p>
                You agree to use our services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website, including accessing data not intended for you, or logging into a server or account which you are not authorized to access.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">5. Limitation of Liability</h2>
              <p>
                In no event shall THE ORDINARY COMPANY, L.L.C., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32"></div>

      <SimpleFooter />
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}