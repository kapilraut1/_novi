import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Twitter,
  Linkedin,
  Share2,
  Sparkles,
  Send,
  Check,
  Loader2,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NOVI_LOGO_URL } from '@/lib/data/initial-data';
import { subscribeSchema } from '@/lib/schemas';

type SubscribeStatus = 'idle' | 'submitting' | 'success';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success') {
      feedbackRef.current?.focus({ preventScroll: true });
    }
  }, [status]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const parsed = subscribeSchema.safeParse({ email });
    if (!parsed.success) {
      setFieldError(
        parsed.error.issues[0]?.message ?? 'Invalid email address.',
      );
      return;
    }
    setFieldError(null);
    setStatus('submitting');

    setTimeout(() => {
      setEmail('');
      setStatus('success');
    }, 450);
  };

  const resetState = () => {
    setStatus('idle');
    setEmail('');
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                alt="Novi Brand Logo"
                className="h-8 w-auto object-contain"
                height={64}
                src={NOVI_LOGO_URL}
                unoptimized
                width={64}
              />
              <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e] tracking-tight">
                Novi
              </span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Novi brings tasks, docs, and conversations into one calm workspace
              built for small, fast moving teams.
            </p>

            <div className="flex items-center gap-2.5 text-on-surface-variant mt-3">
              <a
                aria-label="Twitter / X profile"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-surface-container flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#8792fe] hover:shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3525cd] focus-visible:outline-offset-2"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                aria-label="GitHub repository"
                href="https://github.com/kapilraut1"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-surface-container flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#8792fe] hover:shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3525cd] focus-visible:outline-offset-2"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                aria-label="LinkedIn page"
                href="https://www.linkedin.com/in/kapil-raut-059916274/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#eaedff] flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#8792fe] hover:shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3525cd] focus-visible:outline-offset-2"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                aria-label="Share Novi"
                href="#share"
                className="w-9 h-9 rounded-xl bg-white border border-[#eaedff] flex items-center justify-center text-[#464555] hover:text-[#3525cd] hover:border-[#8792fe] hover:shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#3525cd] focus-visible:outline-offset-2"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-[#131b2e] font-bold">
                Product
              </span>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#features"
              >
                Boards & Sprints
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#preview"
              >
                Docs & Specs
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#integrations"
              >
                Integrations
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#pricing"
              >
                Pricing
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#roadmap"
              >
                Changelog
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-[#131b2e] font-bold">
                Company
              </span>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#about"
              >
                About Novi
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#careers"
              >
                Careers
                <Badge className="ml-1.5 bg-[#dcfce7] text-[#005338] text-[10px] font-bold">
                  <span className="w-1 h-1 rounded-full bg-[#005338] animate-ping" />
                  Hiring
                </Badge>
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#manifesto"
              >
                Manifesto
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#contact"
              >
                Contact
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#press"
              >
                Press Kit
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-[#131b2e] font-bold">
                Resources
              </span>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#blog"
              >
                Engineering Blog
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#help"
              >
                Help Center
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#community"
              >
                Discord Community
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#docs"
              >
                API Docs & SDK
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#templates"
              >
                Workflow Templates
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-[#131b2e] font-bold">
                Legal
              </span>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#privacy"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#terms"
              >
                Terms of Service
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#security"
              >
                Security & SOC2
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#cookies"
              >
                Cookie Settings
              </a>
              <a
                className="text-xs sm:text-sm text-[#464555] hover:text-[#3525cd] transition-colors"
                href="#compliance"
              >
                GDPR & Compliance
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/75 backdrop-blur-sm border border-[#eaedff] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-1">
            <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3525cd]" />
              Stay in the loop
            </span>
            <p className="text-xs sm:text-sm text-[#464555]">
              Get product updates, engineering logs, and workspace workflows. No
              spam ever.
            </p>
          </div>

          <div className="w-full md:w-auto" aria-live="polite">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-message"
                  ref={feedbackRef}
                  role="status"
                  tabIndex={-1}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex items-center gap-3 bg-[#dcfce7] text-[#005338] px-4 py-2.5 rounded-xl border border-emerald-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-[#005338]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#005338] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold">
                      Successfully subscribed!
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={resetState}
                    className="ml-2 text-[11px] text-[#005338] underline hover:no-underline font-medium cursor-pointer"
                  >
                    Reset
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  noValidate
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full"
                >
                  <div className="relative sm:flex-1 sm:max-w-72">
                    <label htmlFor="newsletter-email-input" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email-input"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldError) setFieldError(null);
                      }}
                      placeholder="you@company.com"
                      aria-invalid={fieldError ? true : undefined}
                      aria-describedby={
                        fieldError ? 'newsletter-error-message' : undefined
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-white text-[#131b2e] placeholder:text-[#777587] text-xs sm:text-sm shadow-2xs border transition-all focus:outline-none focus:ring-2 ${
                        fieldError
                          ? 'border-[#ba1a1a] focus:ring-[#ffdad6]'
                          : 'border-[#eaedff] focus:ring-[#3525cd] focus:border-transparent'
                      }`}
                    />
                    <AnimatePresence mode="wait">
                      {fieldError && (
                        <motion.p
                          key="error-message"
                          id="newsletter-error-message"
                          role="alert"
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] font-medium text-[#ba1a1a] mt-1.5"
                        >
                          {fieldError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <Button
                    id="newsletter-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-[0.98]"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#464555]">
          <span>© 2026 Novi Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-[#3525cd] transition-colors"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <span className="text-[#c7c4d8]">·</span>
            <a className="hover:text-[#3525cd] transition-colors" href="#terms">
              Terms of Service
            </a>
            <span className="text-[#c7c4d8]">·</span>
            <a
              className="hover:text-[#3525cd] transition-colors"
              href="#security"
            >
              Security
            </a>
            <span className="text-[#c7c4d8]">·</span>
            <a
              className="hover:text-[#3525cd] transition-colors"
              href="#status"
            >
              System Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
