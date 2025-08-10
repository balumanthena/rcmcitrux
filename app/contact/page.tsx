"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

const faqs = [
  {
    question: "How soon will I get a reply?",
    answer: "We typically respond within 24-48 hours on business days.",
  },
  {
    question: "Can I schedule a consultation?",
    answer: "Yes! Just leave us a message, and we will reach out to schedule.",
  },
  {
    question: "Do you provide support for insurance claims?",
    answer: "Absolutely, our team specializes in medical coding and revenue cycle support.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        setSubmitted(true);
        resolve();
      }, 1500);
    });
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-tr from-indigo-50 to-white flex items-center justify-center py-24 px-6 sm:px-12 lg:px-24 font-body">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl p-10 sm:p-14">
        {/* Left side - Contact Info */}
        <section className="flex flex-col justify-center space-y-8">
          <h1 className="text-5xl font-display text-indigo-700 font-extrabold leading-tight">
            Let’s get in touch
          </h1>
          <p className="text-gray-700 max-w-lg leading-relaxed">
            Have questions or want to learn more about how we can help streamline your medical coding and revenue cycle management? Reach out anytime!
          </p>

          <div className="space-y-5 text-gray-800">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-indigo-600" />
              <a href="tel:+18001234567" className="hover:text-indigo-700 transition">
                +91 85559 54798
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <a href="mailto:info@citrux.in" className="hover:text-indigo-700 transition">
                info@citrux.in
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <address className="not-italic">
               2nd Floor, IT Tower, Siddipet <br /> Telangana, India
              </address>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Quick Questions</h2>
            <div className="space-y-3">
              {faqs.map(({ question, answer }, idx) => {
                const isOpen = openFAQ === idx;
                return (
                  <div key={idx} className="border border-gray-200 rounded-xl shadow-sm">
                    <button
                      type="button"
                      className="flex justify-between items-center w-full p-4 text-left font-medium text-indigo-700 hover:bg-indigo-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      onClick={() => setOpenFAQ(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${idx}`}
                      id={`faq-header-${idx}`}
                    >
                      <span>{question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-content-${idx}`}
                        role="region"
                        aria-labelledby={`faq-header-${idx}`}
                        className="p-4 text-gray-700 bg-indigo-50 rounded-b-xl"
                      >
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right side - Contact Form */}
        <section className="bg-indigo-50 rounded-3xl p-8 sm:p-12 shadow-inner">
          {submitted ? (
            <p
              role="alert"
              className="text-center text-green-700 text-lg font-semibold"
            >
              Thank you for reaching out. We will get back to you shortly.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
              aria-live="polite"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-indigo-900 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="ring-indigo-400 focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    role="alert"
                    className="mt-1 text-red-700 text-sm"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-indigo-900 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="ring-indigo-400 focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1 text-red-700 text-sm"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-indigo-900 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-xl border border-indigo-300 px-4 py-3 shadow-sm resize-none
                             focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700"
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-1 text-red-700 text-sm"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
