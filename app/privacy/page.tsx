import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Marcel Grace Infotech',
  description: 'Privacy Policy for Marcel Grace Infotech - How we collect, use, and protect your personal information',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-20 lg:pt-24">
      <div className="max-w-3xl mx-auto px-4 py-12 border-l-4 border-[#697565] bg-white">
        <h1 className="text-xs md:text-lg font-bold text-black mb-4">Privacy Policy</h1>
        <p className="text-xs md:text-sm text-black mb-8">Last updated: January 1, 2025</p>
        <div className="space-y-8">
            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Introduction</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                Marcel Grace Infotech ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Information We Collect</h2>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Personal Information</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1 mb-2">
                <li>Contact us through our website forms</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for employment</li>
              </ul>
              
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Automatically Collected Information</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">How We Use Your Information</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process service requests and project proposals</li>
                <li>Improve our website and services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Information Sharing</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Data Security</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Your Rights</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Contact Information</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-xs md:text-sm text-black">
                <strong>Marcel Grace Infotech</strong><br />
                Email: info.marcelgrace@gmail.com<br />
                Phone: +8809638-604252<br />
                Address: Dhaka, Bangladesh
              </div>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Changes to This Policy</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
        </div>
      </div>
    </main>
  );
}
