import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Marcel Grace Infotech',
  description: 'Terms of Service for Marcel Grace Infotech - Legal terms and conditions for using our services',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-20 lg:pt-24">
      <div className="max-w-3xl mx-auto px-4 py-12 border-l-4 border-[#697565] bg-white">
        <h1 className="text-xs md:text-lg font-bold text-black mb-4">Terms of Service</h1>
        <p className="text-xs md:text-sm text-black mb-8">Last updated: January 1, 2025</p>
        <div className="space-y-8">
            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Agreement to Terms</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                By accessing and using the services provided by Marcel Grace Infotech ("Company," "we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Services</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                Marcel Grace Infotech provides software development and technology consulting services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1">
                <li>Web development and design</li>
                <li>Mobile application development</li>
                <li>Custom software solutions</li>
                <li>UI/UX design services</li>
                <li>Technology consulting and support</li>
                <li>Cloud solutions and DevOps services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Project Terms</h2>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Project Scope</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                All project work will be defined in a separate project agreement or statement of work. 
                Changes to project scope must be agreed upon in writing by both parties.
              </p>
              
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Payment Terms</h3>
              <ul className="list-disc list-inside text-xs md:text-sm text-black space-y-1 mb-2">
                <li>Payment terms will be specified in individual project agreements</li>
                <li>Late payments may result in project suspension</li>
                <li>All prices are in the currency specified in the project agreement</li>
                <li>Additional work outside the original scope will be billed separately</li>
              </ul>

              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Timeline and Delivery</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                Project timelines are estimates and may be subject to change due to scope modifications, 
                client feedback delays, or unforeseen technical challenges. We will communicate any 
                timeline changes promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Intellectual Property</h2>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Client Rights</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                Upon full payment, clients will own the custom code developed specifically for their project, 
                excluding any third-party libraries, frameworks, or our proprietary tools and methodologies.
              </p>
              
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Company Rights</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                We retain rights to our general methodologies, techniques, and any pre-existing intellectual property. 
                We may use general knowledge gained from projects for future work, provided client confidentiality is maintained.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Confidentiality</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We will maintain the confidentiality of all client information and will not disclose any 
                proprietary or confidential information to third parties without prior written consent, 
                except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Warranties and Disclaimers</h2>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Limited Warranty</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                We warrant that our services will be performed in a professional manner in accordance with 
                industry standards. We will correct any defects in our work at no charge for a period of 
                30 days after project completion.
              </p>
              
              <h3 className="text-xs md:text-sm font-semibold text-black mb-1">Disclaimer</h3>
              <p className="text-xs md:text-sm text-black mb-2">
                Except as expressly stated above, we make no other warranties, express or implied, 
                including any warranties of merchantability or fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Limitation of Liability</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                In no event shall Marcel Grace Infotech be liable for any indirect, incidental, special, 
                or consequential damages arising out of or in connection with our services. Our total 
                liability shall not exceed the amount paid by the client for the specific project.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Termination</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                Either party may terminate a project agreement with written notice. Upon termination, 
                the client will pay for all work completed up to the termination date. We will provide 
                all completed work and transfer any applicable rights as specified in the project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Governing Law</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                These terms shall be governed by and construed in accordance with the laws of Bangladesh. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of 
                the courts of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Contact Information</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-xs md:text-sm text-black">
                <strong>Marcel Grace Infotech</strong><br />
                Email: info.marcelgrace@gmail.com<br />
                Phone: +8809638-604252<br />
                Address: Dhaka, Bangladesh
              </div>
            </section>

            <section>
              <h2 className="text-xs md:text-base font-bold text-black mb-2">Changes to Terms</h2>
              <p className="text-xs md:text-sm text-black mb-2">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after 
                any changes constitutes acceptance of the new terms.
              </p>
            </section>
        </div>
      </div>
    </main>
  );
}
