import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Terms of Service | Tirthon Tech"
        description="Tirthon Tech's terms of service. The rules for working with us and using our website."
        path="/terms-of-service"
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 border-b border-border/40 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
            >
              Terms of <span className="text-primary">Service</span>
            </motion.h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10 text-muted-foreground leading-relaxed"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Overview</h2>
                <p>
                  These terms apply when you use the Tirthon Tech website (tirthontech.com) or engage us for any software development, data, or consulting services. By using our site or working with us, you agree to these terms. If something here doesn't make sense to you, just reach out and we'll explain it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Our Services</h2>
                <p>
                  Tirthon Tech provides software development, AI solutions, data annotation, data collection, Shopify development, and technology consulting. The specific scope, deliverables, timeline, and payment terms for any engagement are agreed upon separately in a project agreement or statement of work before we start.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Using This Website</h2>
                <p>You're welcome to use this website to learn about our services and contact us. You agree not to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Use the site for any unlawful purpose</li>
                  <li>Attempt to access systems or data you're not authorized to access</li>
                  <li>Copy, scrape, or reproduce our content without permission</li>
                  <li>Use our contact form to send spam or unsolicited promotions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
                <p>
                  Everything on this website (text, design, logo, and code) belongs to Tirthon Tech. You may not copy or reproduce it without our written permission.
                </p>
                <p className="mt-3">
                  For software we build for clients: ownership of the final deliverables is transferred to the client upon full payment, as specified in the project agreement. We may retain rights to reusable frameworks, libraries, or tools that were built independently of your project.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Confidentiality</h2>
                <p>
                  We take client confidentiality seriously. Any information you share with us about your business, product, or plans is treated as confidential. We won't share it with third parties without your permission. If you'd like a formal NDA before discussions, just ask.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Payments</h2>
                <p>
                  Payment schedules and amounts are agreed upon in your project contract. Generally we work on a milestone-based payment structure. Late payments may pause work on your project. If there's a billing issue, talk to us first. We're reasonable people.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
                <p>
                  We do our best work on every project, but we can't guarantee specific business outcomes or results. Tirthon Tech's liability for any claim arising from our services is limited to the amount paid for the specific project or service in question. We're not liable for indirect, incidental, or consequential damages.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Termination</h2>
                <p>
                  Either party can end a project engagement with reasonable notice, as specified in the project agreement. If a project is terminated, you'll be invoiced for work completed up to that point. Prepaid amounts for undelivered work will be refunded proportionally.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Governing Law</h2>
                <p>
                  These terms are governed by the laws of India. Any disputes will be resolved in the courts of Indore, Madhya Pradesh, India.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">10. Changes</h2>
                <p>
                  We may update these terms occasionally. The date at the top of this page will reflect the latest version. Continuing to use our website or services after an update means you accept the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">11. Contact</h2>
                <p>
                  Questions about these terms? Email us at{" "}
                  <a href="mailto:business@tirthontech.com" className="text-primary hover:underline">business@tirthontech.com</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
