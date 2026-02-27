import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
              alt="P1 Creative Logo"
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <Link
            to="/"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-8 w-8 text-white/60" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-white/50 text-sm mb-12">Last updated: February 27, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              When you interact with P1 Creative through our website, landing pages, quiz forms, or any other
              opt-in forms, we may collect the following categories of personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="text-white font-medium">Contact Information:</span> First name, last name, email address, and phone number.</li>
              <li><span className="text-white font-medium">Business Information:</span> Business name, industry, current revenue, advertising spend, and goals.</li>
              <li><span className="text-white font-medium">Quiz &amp; Survey Responses:</span> Answers you provide through our qualification quizzes and forms.</li>
              <li><span className="text-white font-medium">Usage Data:</span> IP address, browser type, pages visited, time on site, and referring URLs collected automatically via cookies and tracking pixels.</li>
              <li><span className="text-white font-medium">Communication Records:</span> Records of any messages, emails, or calls you initiate with us.</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To respond to your inquiries and schedule strategy calls or consultations.</li>
              <li>To deliver and improve our services, including lead generation and content marketing.</li>
              <li>To send you relevant educational content, offers, and updates you have opted into.</li>
              <li>To qualify leads and match prospective clients with the right service tier.</li>
              <li>To analyze website performance and optimize our marketing funnels.</li>
              <li>To comply with legal obligations and prevent fraudulent activity.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies &amp; Tracking Technologies</h2>
            <p className="mb-3">
              Our website uses cookies, pixels, and similar tracking technologies to enhance your experience
              and measure the effectiveness of our advertising campaigns.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="text-white font-medium">Facebook Pixel:</span> We use the Meta (Facebook) Pixel to track conversions from Facebook ads, optimize ads, build targeted audiences, and remarket to people who have visited our site.</li>
              <li><span className="text-white font-medium">Analytics Cookies:</span> Used to understand how visitors interact with our site so we can improve the user experience.</li>
              <li><span className="text-white font-medium">Functional Cookies:</span> Required for core site functionality such as form submissions and page routing.</li>
            </ul>
            <p className="mt-3">
              You may disable cookies through your browser settings; however, some features of the site may not
              function properly as a result.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. How We Share Your Information</h2>
            <p className="mb-3">
              We do not sell, rent, or trade your personal information to third parties. We may share your
              information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="text-white font-medium">Service Providers:</span> Trusted third-party platforms we use to operate our business, such as Netlify (form hosting), Zapier (automation), Calendly (scheduling), and email marketing tools. These providers are contractually obligated to protect your data.</li>
              <li><span className="text-white font-medium">Legal Requirements:</span> If required by law, court order, or governmental authority.</li>
              <li><span className="text-white font-medium">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in
              this Privacy Policy, provide our services, resolve disputes, and comply with legal obligations.
              If you wish to request deletion of your data, please contact us at the address below.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights &amp; Choices</h2>
            <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="text-white font-medium">Access:</span> Request a copy of the personal information we hold about you.</li>
              <li><span className="text-white font-medium">Correction:</span> Request correction of inaccurate or incomplete data.</li>
              <li><span className="text-white font-medium">Deletion:</span> Request that we delete your personal information, subject to certain exceptions.</li>
              <li><span className="text-white font-medium">Opt-Out:</span> Unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email we send.</li>
              <li><span className="text-white font-medium">Do Not Sell:</span> We do not sell personal information. If you have questions about this, please contact us.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please email us at{" "}
              <a href="mailto:info@flozyagency.io" className="text-white underline hover:text-white/70 transition-colors">
                info@flozyagency.io
              </a>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal
              information from unauthorized access, disclosure, alteration, and destruction. However, no method
              of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware that we have inadvertently collected such
              information, we will take prompt steps to delete it.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, such as Calendly or social media platforms.
              We are not responsible for the privacy practices of those sites and encourage you to review their
              respective privacy policies.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated"
              date at the top of this page. We encourage you to review this page periodically to stay informed
              about how we are protecting your information.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-1">
              <p className="text-white font-semibold">P1 Creative</p>
              <p>Florida, USA</p>
              <p>
                Email:{" "}
                <a href="mailto:info@flozyagency.io" className="text-white underline hover:text-white/70 transition-colors">
                  info@flozyagency.io
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © {new Date().getFullYear()} P1 Creative. All rights reserved.
        </div>
      </div>
    </div>
  );
}
