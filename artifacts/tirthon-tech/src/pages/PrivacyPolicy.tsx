import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Tirthon Tech"
        description="Tirthon Tech's privacy policy. How we collect, use, and protect your information."
        path="/privacy-policy"
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
              Privacy <span className="text-primary">Policy</span>
            </motion.h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10 text-muted-foreground leading-relaxed"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Who We Are</h2>
                <p>
                  Tirthon Tech is a software development company based in Indore, India. We build web apps, mobile apps, AI tools, and data solutions for clients worldwide. When you use our website or contact us, you may share some personal information with us. This policy explains exactly what we do with it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. What We Collect</h2>
                <p>We only collect information you give us directly. This includes:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your name and email address when you fill out the contact form</li>
                  <li>Your company name if you choose to provide it</li>
                  <li>The details of your project or inquiry</li>
                  <li>Your phone number if you share it with us</li>
                </ul>
                <p className="mt-3">We don't run tracking scripts, sell data, or collect anything beyond what's needed to respond to you.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                <p>We use the information you share to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Respond to your inquiry or project request</li>
                  <li>Follow up on ongoing conversations</li>
                  <li>Understand your requirements and provide relevant services</li>
                </ul>
                <p className="mt-3">We won't add you to any mailing list or send you marketing emails without your explicit consent.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. How We Store It</h2>
                <p>
                  Contact form submissions are received via email (Netlify Forms) and stored in our email inbox. We don't use a CRM or third-party data storage platform. Your information stays with our core team only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Third Parties</h2>
                <p>We don't sell, rent, or share your personal information with third parties. Our website is hosted on Netlify, which may collect basic server logs (IP address, request time) as part of their standard infrastructure. This is outside our control and governed by Netlify's own privacy policy.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
                <p>
                  Our website does not use tracking cookies or analytics scripts. We don't use Google Analytics, Facebook Pixel, or similar tools. The site may use functional browser storage (e.g., for dark mode preferences) but nothing that tracks you across the web.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
                <p>You can ask us at any time to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>See what information we hold about you</li>
                  <li>Correct anything that's wrong</li>
                  <li>Delete your data from our records</li>
                </ul>
                <p className="mt-3">Just email us at <a href="mailto:business@tirthontech.com" className="text-primary hover:underline">business@tirthontech.com</a> and we'll sort it out.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
                <p>
                  If we ever make meaningful changes to this policy, we'll update the date at the top of this page. We won't send you a notification unless you're an active client.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Contact</h2>
                <p>
                  Questions about this policy? Email us at{" "}
                  <a href="mailto:business@tirthontech.com" className="text-primary hover:underline">business@tirthontech.com</a> or call{" "}
                  <a href="tel:+919424575918" className="text-primary hover:underline">+91 94245 75918</a>.
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
