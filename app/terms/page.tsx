import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Marcel Grace Infotech',
  description: 'Terms of Service for Marcel Grace Infotech - Legal terms and conditions for using our services',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black pt-20 lg:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="glass-card p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the services provided by Marcel Grace Infotech ("Company," "we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Marcel Grace Infotech provides software development and technology consulting services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Web development and design</li>
                <li>Mobile application development</li>
                <li>Custom software solutions</li>
                <li>UI/UX design services</li>
                <li>Technology consulting and support</li>
                <li>Cloud solutions and DevOps services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Project Terms</h2>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Project Scope</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All project work will be defined in a separate project agreement or statement of work. 
                Changes to project scope must be agreed upon in writing by both parties.
              </p>
              
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Payment terms will be specified in individual project agreements</li>
                <li>Late payments may result in project suspension</li>
                <li>All prices are in the currency specified in the project agreement</li>
                <li>Additional work outside the original scope will be billed separately</li>
              </ul>

              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Timeline and Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                Project timelines are estimates and may be subject to change due to scope modifications, 
                client feedback delays, or unforeseen technical challenges. We will communicate any 
                timeline changes promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Client Rights</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Upon full payment, clients will own the custom code developed specifically for their project, 
                excluding any third-party libraries, frameworks, or our proprietary tools and methodologies.
              </p>
              
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Company Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                We retain rights to our general methodologies, techniques, and any pre-existing intellectual property. 
                We may use general knowledge gained from projects for future work, provided client confidentiality is maintained.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
              <p className="text-gray-300 leading-relaxed">
                We will maintain the confidentiality of all client information and will not disclose any 
                proprietary or confidential information to third parties without prior written consent, 
                except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Warranties and Disclaimers</h2>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Limited Warranty</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We warrant that our services will be performed in a professional manner in accordance with 
                industry standards. We will correct any defects in our work at no charge for a period of 
                30 days after project completion.
              </p>
              
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Disclaimer</h3>
              <p className="text-gray-300 leading-relaxed">
                Except as expressly stated above, we make no other warranties, express or implied, 
                including any warranties of merchantability or fitness for a particular purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Marcel Grace Infotech be liable for any indirect, incidental, special, 
                or consequential damages arising out of or in connection with our services. Our total 
                liability shall not exceed the amount paid by the client for the specific project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate a project agreement with written notice. Upon termination, 
                the client will pay for all work completed up to the termination date. We will provide 
                all completed work and transfer any applicable rights as specified in the project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Bangladesh. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of 
                the courts of Bangladesh.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Marcel Grace Infotech</strong><br />
                  Email: info.marcelgrace@gmail.com<br />
                  Phone: +8809638-604252<br />
                  Address: Dhaka, Bangladesh
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after 
                any changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
