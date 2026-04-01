import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-[100dvh] bg-[#FFFFFF] clip-path-none pt-24 lg:pt-32">
      <SimpleNavbar />
      
      <section className="w-full px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h1 className="font-display font-black text-[clamp(3rem,6vw,6rem)] leading-none uppercase tracking-tight text-[#121212]">
              PRIVACY POLICY
            </h1>
            <p className="font-mono text-sm tracking-widest text-[#121212]/60 mt-8 uppercase">
              LAST UPDATED: MAR 31, 2026
            </p>
          </div>

          <div className="space-y-12 font-sans text-lg leading-relaxed text-[#121212]/80 max-w-4xl">
            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">1. Information Collection</h2>
              <p>
                We collect information that you provide directly to us, including when you fill out a form, request customer support, or communicate with us. This may include your name, email address, company details, and project parameters.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">2. Use of Information</h2>
              <p>
                THE ORDINARY COMPANY, L.L.C. uses the information we collect to provide, maintain, and improve our services, to communicate with you, to process your requests, and to develop new visual infrastructure solutions. We may also use the information to send you technical notices, updates, and administrative messages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties except as described in this privacy policy or with your consent. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">4. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-bold text-2xl uppercase tracking-widest text-[#121212]">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the project inquiry form on our website.
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