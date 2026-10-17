"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed");
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to interesting problems, roles and collaborations."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href={siteConfig.socials.email} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">{siteConfig.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">{siteConfig.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Jane Doe" required />
              <Field name="email" label="Email" type="email" placeholder="jane@acme.com" required />
            </div>
            <Field name="subject" label="Subject" placeholder="Let's talk about..." required />
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
