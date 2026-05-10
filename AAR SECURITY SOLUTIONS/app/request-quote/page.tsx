import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Request Quote",
  description: "Request a free site inspection and quote from AAR Security Solutions in Mangalore, Karnataka."
};

export default function RequestQuotePage() {
  return (
    <main className="pt-[var(--header-height)]">
      <section className="premium-gradient py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Request Quote"
            title="Tell us what you want to secure."
            text="AAR Security Solutions will review your requirement and suggest a clear next step for installation or maintenance."
          />
        </div>
      </section>
      <section className="dark-section py-20 md:py-28">
        <div className="glass-card section-shell max-w-4xl rounded-[28px] p-5 md:p-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
