/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from 'motion/react';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  Compass,
  Flag,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Linkedin,
  MapPin,
  Maximize2,
  Menu,
  Quote,
  Repeat,
  Sprout,
  Star,
  Target,
  Trophy,
  X,
} from 'lucide-react';
import { KineticCanvas } from './components/KineticCanvas';
import { TiltCard } from './components/TiltCard';
import {
  acknowledgedLeaders,
  acknowledgementText,
  authorAtWorkImage,
  authorInfo,
  awards,
  Book,
  books,
  booksHoldingImage,
  certifications,
  dcbPillars,
  educations,
  experiences,
  fourCompanionsPosterImage,
  fullAcknowledgementStatement,
  Leader,
  leadershipDispatches,
  lifelongCompanions,
  marqueeQuotes,
  navLinks,
  skills,
  tcbPillars,
  testimonials,
} from './data/content';

const synthesisConnections = [
  {
    id: 'd-t',
    dcbLetter: 'D',
    dcbName: 'Discipline',
    tcbLetter: 'T',
    tcbName: 'Top-line Growth',
    headline: 'Personal Discipline Drives Strategic Top-Line Expansion',
    summary:
      'When leaders replace erratic motivation with structured daily discipline, commercial teams execute market expansion, institutional sales, and customer acquisition with repeatable precision.',
    metrics: [
      'Structured institutional pipeline execution',
      'Deliberate market entry and pricing architecture',
      'Proactive client value creation over reactive selling',
    ],
  },
  {
    id: 'c-c',
    dcbLetter: 'C',
    dcbName: 'Consistency',
    tcbLetter: 'C',
    tcbName: 'Cost-line Efficiency',
    headline: 'Relentless Consistency Protects Operational Cost-Line',
    summary:
      'Small operational improvements compounded every day eliminate waste, strengthen supply-chain reliability, and turn Six Sigma quality standards into an organizational reflex.',
    metrics: [
      'Compounding process optimization across plants',
      'Zero-compromise quality and delivery cadence',
      'Resilient cost structures under market volatility',
    ],
  },
  {
    id: 'b-b',
    dcbLetter: 'B',
    dcbName: 'Belief',
    tcbLetter: 'B',
    tcbName: 'Bottom-line Impact',
    headline: 'Unshakeable Belief Sustains Long-Term Bottom-Line Value',
    summary:
      'Conviction aligns cross-functional teams around a shared transformation vision—ensuring that revenue growth and cost discipline translate into enduring profitability and stakeholder trust.',
    metrics: [
      'High-trust culture across cross-functional teams',
      'Long-horizon P&L stewardship and governance',
      'Sustainable profitability through industry cycles',
    ],
  },
];

const companionIcons = [Lightbulb, Flag, Sprout, Heart];

function MagneticButton({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.22);
    y.set((e.clientY - centerY) * 0.22);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {href ? (
        <a href={href} target={target} rel={rel} onClick={onClick} className={className}>
          {children}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="font-serif text-xl font-bold tracking-tight text-white hover:text-gold-300 transition-colors whitespace-nowrap shrink-0"
        >
          Gopal Krishna
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="hover:text-gold-400 transition-colors whitespace-nowrap shrink-0 relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <MagneticButton
            onClick={() => scrollToSection('#books')}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-ink-950 text-xs font-semibold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-gold-500/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Explore Books
          </MagneticButton>

          <button
            className="md:hidden p-2 text-white hover:text-gold-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Scroll progress light beam */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] origin-left bg-gradient-to-r from-gold-400 via-teal-400 to-gold-500"
      />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/10 mt-3"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-ink-200 hover:text-gold-400 transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#books')}
                className="mt-2 px-5 py-2.5 rounded-xl bg-gold-400 text-ink-950 text-sm font-semibold text-center"
              >
                Explore Books
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection({
  onSelectBook,
  onOpenPoster,
}: {
  onSelectBook: (book: Book) => void;
  onOpenPoster: () => void;
}) {
  const [activeLens, setActiveLens] = useState<
    'overview' | 'companions' | 'dcb' | 'tcb'
  >('overview');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Architectural spatial grid backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(41,195,180,0.16),transparent_32%),radial-gradient(circle_at_16%_78%,rgba(224,171,63,0.14),transparent_34%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          {/* Left Column: Choreographed Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              {/* Quiet unboxed editorial kicker */}
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-gold-400 mb-6">
                <span>Author</span>
                <span aria-hidden="true">·</span>
                <span>Business Leader</span>
                <span aria-hidden="true">·</span>
                <span>Transformation Strategist</span>
              </div>

              <h1
                className="font-serif font-bold text-white tracking-tight leading-[0.94]"
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', textWrap: 'balance' }}
              >
                Architecting
                <span className="block text-gradient-gold mt-1">Gopal Krishna’s</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal italic text-ink-200 mt-3">
                  Systems for Enduring Performance
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg text-ink-200 leading-relaxed">
                {authorInfo.summary}
              </p>

              {/* Clean unboxed metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-6 text-xs sm:text-sm text-ink-400">
                <span className="inline-flex items-center gap-1.5 text-ink-200">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  {authorInfo.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>{authorInfo.availability}</span>
                <span aria-hidden="true">·</span>
                <span className="text-gold-300">{authorInfo.website}</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="#books"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold-400 text-ink-950 text-sm font-semibold hover:bg-gold-300 transition-all shadow-xl shadow-gold-500/20 whitespace-nowrap shrink-0"
                >
                  Explore the Books
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  href="#companions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-white text-sm font-semibold hover:bg-white/10 transition-all whitespace-nowrap shrink-0"
                >
                  <Lightbulb className="w-4 h-4 text-gold-400" />
                  Four Lifelong Companions
                </MagneticButton>

                <MagneticButton
                  href="#leaders"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 text-ink-300 hover:text-white hover:border-white/25 text-sm font-medium transition-all whitespace-nowrap shrink-0"
                >
                  <Award className="w-4 h-4 text-gold-400" />
                  Top Leaders
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Spatial Viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            {/* Interactive Lens Switcher */}
            <div className="flex flex-wrap items-center gap-1 p-1.5 rounded-xl glass mb-4 self-start">
              {[
                { id: 'overview', label: '01. Dual Mission' },
                { id: 'companions', label: '02. 4 Companions' },
                { id: 'dcb', label: '03. DCB' },
                { id: 'tcb', label: '04. TCB' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveLens(
                      tab.id as 'overview' | 'companions' | 'dcb' | 'tcb'
                    )
                  }
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeLens === tab.id
                      ? 'text-ink-950'
                      : 'text-ink-300 hover:text-white'
                  }`}
                >
                  {activeLens === tab.id && (
                    <motion.span
                      layoutId="heroLensTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold-300 to-gold-400"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            <TiltCard
              glowColor={activeLens === 'tcb' ? 'teal' : 'gold'}
              intensity={7}
              className="rounded-3xl border border-white/15 bg-ink-900/90 overflow-hidden shadow-2xl"
            >
              <AnimatePresence mode="wait">
                {activeLens === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full min-h-[460px] flex flex-col justify-end p-7"
                  >
                    <img
                      src={booksHoldingImage}
                      alt="Gopal Krishna holding The DCB Success Formula and The TCB Framework"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

                    <div className="relative z-10">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
                        Two Books · One Complete Architecture
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1.5">
                        “{authorInfo.tagline}”
                      </h2>
                      <p className="text-xs text-ink-300 mt-2">
                        Personal Discipline (DCB) → Enterprise Performance (TCB)
                      </p>

                      <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                        <button
                          onClick={() => onSelectBook(books[0])}
                          className="text-xs font-semibold text-gold-300 hover:text-gold-200 inline-flex items-center gap-1 cursor-pointer"
                        >
                          Inspect Book I (DCB) <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectBook(books[1])}
                          className="text-xs font-semibold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1 cursor-pointer"
                        >
                          Inspect Book II (TCB) <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeLens === 'companions' && (
                  <motion.div
                    key="companions"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full min-h-[460px] flex flex-col justify-end p-7"
                  >
                    <img
                      src={fourCompanionsPosterImage}
                      alt="Four Lifelong Companions for lasting achievement — Curiosity, Courage, Perseverance, Gratitude with Humility"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-transparent" />

                    <div className="relative z-10">
                      <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
                        Leadership Philosophy
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                        Four Lifelong Companions
                      </h2>
                      <p className="text-xs text-ink-200 mt-1.5">
                        Curiosity · Courage · Perseverance · Gratitude with Humility
                      </p>

                      <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                        <button
                          onClick={onOpenPoster}
                          className="text-xs font-semibold text-gold-300 hover:text-gold-200 inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          View Full Poster
                        </button>
                        <a
                          href="#companions"
                          className="text-xs font-semibold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1"
                        >
                          Read Field Dispatches <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeLens === 'dcb' && (
                  <motion.div
                    key="dcb"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full min-h-[460px] flex flex-col justify-between p-7 bg-gradient-to-br from-ink-900 via-ink-950 to-gold-950/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gold-400">
                          Book One · Personal Operating System
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-white mt-1">
                          {books[0].shortTitle}
                        </h2>
                        <p className="text-sm font-serif italic text-gold-300 mt-1">
                          {books[0].subtitle}
                        </p>
                      </div>
                      <img
                        src={books[0].image}
                        alt={books[0].title}
                        referrerPolicy="no-referrer"
                        className="w-20 h-28 object-cover rounded-xl border border-gold-400/30 shadow-lg shrink-0"
                      />
                    </div>

                    <div className="space-y-3 my-4">
                      {dcbPillars.map((p) => (
                        <div
                          key={p.letter}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5"
                        >
                          <span className="w-9 h-9 rounded-lg bg-gold-400 text-ink-950 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                            {p.letter}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{p.name}</div>
                            <div className="text-xs text-ink-300 line-clamp-1">
                              {p.points[0]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <button
                        onClick={() => onSelectBook(books[0])}
                        className="text-xs font-semibold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        Open Full Dossier <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={books[0].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-gold-400 text-ink-950 text-xs font-semibold hover:bg-gold-300 transition-colors"
                      >
                        Google Play ↗
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeLens === 'tcb' && (
                  <motion.div
                    key="tcb"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full min-h-[460px] flex flex-col justify-between p-7 bg-gradient-to-br from-ink-900 via-ink-950 to-teal-950/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-teal-300">
                          Book Two · Executive Performance Lens
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-white mt-1">
                          {books[1].shortTitle}
                        </h2>
                        <p className="text-sm font-serif italic text-teal-300 mt-1">
                          {books[1].subtitle}
                        </p>
                      </div>
                      <img
                        src={books[1].image}
                        alt={books[1].title}
                        referrerPolicy="no-referrer"
                        className="w-20 h-28 object-cover rounded-xl border border-teal-400/30 shadow-lg shrink-0"
                      />
                    </div>

                    <div className="space-y-3 my-4">
                      {tcbPillars.map((p) => (
                        <div
                          key={p.letter}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5"
                        >
                          <span className="w-9 h-9 rounded-lg bg-teal-400 text-ink-950 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                            {p.letter}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{p.name}</div>
                            <div className="text-xs text-ink-300 line-clamp-1">
                              {p.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <button
                        onClick={() => onSelectBook(books[1])}
                        className="text-xs font-semibold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        Open Full Dossier <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={books[1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-teal-400 text-ink-950 text-xs font-semibold hover:bg-teal-300 transition-colors"
                      >
                        Amazon India ↗
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TiltCard>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Metric Strip Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/10"
        >
          {[
            {
              value: '22+ Years',
              label: 'Executive Leadership',
              detail: 'Adani Cement · Aparna · Prism Johnson',
            },
            {
              value: '4 Companions',
              label: 'Lifelong Leadership Pillars',
              detail: 'Curiosity · Courage · Perseverance · Gratitude',
            },
            {
              value: '15 Titans',
              label: 'Industry Leaders Honored',
              detail: 'Adani · Birla · Vedanta · Aparna',
            },
            {
              value: '4.4 / 5.0',
              label: 'Critical Acclaim',
              detail: 'Amazon · Flipkart · Kindle · Google Play',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-400/35 transition-colors"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-gradient-gold tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-ink-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function QuoteMarquee() {
  const repeatedQuotes = [...marqueeQuotes, ...marqueeQuotes];

  return (
    <section
      aria-label="Key leadership philosophies"
      className="relative overflow-hidden border-y border-gold-400/20 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 text-ink-950"
    >
      <div className="flex whitespace-nowrap animate-marquee py-4">
        {repeatedQuotes.map((quote, idx) => (
          <div
            key={`${quote}-${idx}`}
            className="mx-8 inline-flex items-center gap-5 text-sm sm:text-base font-semibold tracking-wide"
          >
            <Quote className="w-4 h-4 fill-current opacity-60" />
            <span>{quote}</span>
            <ArrowRight className="w-4 h-4 opacity-60" />
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const [activeBioIndex, setActiveBioIndex] = useState<number>(0);
  const bioChapters = [
    {
      title: '01. Executive Mandate',
      subtitle: 'Chief & Business Head at Adani Cement',
      text: authorInfo.longBio[0],
    },
    {
      title: '02. Strategic Transformation',
      subtitle: 'Scalable Systems & Operational Innovation',
      text: authorInfo.longBio[1],
    },
    {
      title: '03. The Author’s Thesis',
      subtitle: 'Connecting Personal Discipline to Enterprise P&L',
      text: authorInfo.longBio[2],
    },
  ];

  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
            01. About the Author
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            A mentor’s perspective on meaningful growth
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5"
          >
            <TiltCard
              glowColor="gold"
              intensity={6}
              className="rounded-3xl border border-white/15 bg-ink-900 overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={authorAtWorkImage}
                  alt="Gopal Krishna portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Quote className="w-6 h-6 text-gold-400 mb-2" />
                  <p className="font-serif text-lg sm:text-xl text-white italic leading-snug">
                    “Build your identity not merely through words, but through actions.”
                  </p>
                  <p className="text-xs text-ink-300 mt-2">
                    Gopal Krishna · Ahmedabad, India
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="p-7 sm:p-8 rounded-3xl glass">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-300 mb-3">
                Executive Synopsis
              </p>
              <p className="text-lg sm:text-xl text-ink-100 leading-relaxed font-light">
                {authorInfo.summary}
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-3">
                {bioChapters.map((chapter, idx) => (
                  <button
                    key={chapter.title}
                    onClick={() => setActiveBioIndex(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                      activeBioIndex === idx
                        ? 'border-gold-400/50 bg-gold-400/10 text-white'
                        : 'border-white/10 bg-white/[0.02] text-ink-400 hover:border-white/20 hover:text-ink-200'
                    }`}
                  >
                    <div className="text-xs font-semibold text-gold-400">
                      {chapter.title}
                    </div>
                    <div className="text-xs text-ink-300 mt-1 line-clamp-1">
                      {chapter.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBioIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-7 rounded-2xl border border-white/10 bg-ink-900/70"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">
                    {bioChapters[activeBioIndex].subtitle}
                  </div>
                  <p className="text-base text-ink-200 leading-relaxed">
                    {bioChapters[activeBioIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-ink-400 uppercase tracking-wider">
                  Current Mandate
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  Chief / Business Head — Integrated Business RMC, Solution &amp; Products
                  and B2B Cement
                </div>
                <div className="text-xs text-gold-400 mt-1">Adani Cement · 2024 – Present</div>
              </div>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-xs text-ink-400 uppercase tracking-wider">
                  Alma Mater
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  IIM Calcutta · NIT Hamirpur · CASI New York
                </div>
                <div className="text-xs text-teal-300 mt-1">
                  Engineering, Sales &amp; Marketing, Sustainability
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BooksSection({ onSelectBook }: { onSelectBook: (book: Book) => void }) {
  return (
    <section id="books" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/60 to-ink-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              02. The Author’s Shelf
            </p>
            <h2
              className="font-serif text-4xl sm:text-6xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Two books. <span className="text-gradient-gold">One complete view.</span>
            </h2>
          </div>
          <div className="text-ink-300 text-base max-w-md leading-relaxed">
            <p>
              The first builds the leader within. The second aligns the business around
              sustainable performance.
            </p>
            <p className="text-xs text-gold-300 mt-2">
              Both books are available on Amazon and Flipkart, with e-book editions on
              Kindle · www.gopalkrishna.in
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.12 }}
            >
              <TiltCard
                glowColor={book.accent}
                intensity={6}
                className={`group rounded-[2rem] overflow-hidden border ${
                  book.accent === 'gold'
                    ? 'border-gold-500/30 hover:border-gold-400/60'
                    : 'border-teal-400/30 hover:border-teal-300/60'
                } bg-ink-900 shadow-2xl`}
              >
                <article className="relative h-full min-h-[620px] flex flex-col justify-between">
                  <div className="absolute inset-0">
                    <img
                      src={book.image}
                      alt={book.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== book.fallbackImage) {
                          target.src = book.fallbackImage;
                        }
                      }}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        book.id === 'dcb' ? 'object-[25%_center]' : 'object-center'
                      }`}
                    />
                    <div
                      className={`absolute inset-0 ${
                        book.accent === 'gold'
                          ? 'bg-gradient-to-t from-ink-950 via-ink-950/85 to-gold-950/25'
                          : 'bg-gradient-to-t from-ink-950 via-ink-950/85 to-teal-950/25'
                      }`}
                    />
                  </div>

                  <div className="relative z-10 p-8 sm:p-10 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        book.accent === 'gold' ? 'text-gold-300' : 'text-teal-300'
                      }`}
                    >
                      {book.eyebrow}
                    </span>

                    <button
                      onClick={() => onSelectBook(book)}
                      className="px-3.5 py-1.5 rounded-lg glass text-xs font-semibold text-white hover:bg-white/15 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Inspect Architecture
                    </button>
                  </div>

                  <div className="relative z-10 p-8 sm:p-10 pt-0">
                    <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-[0.98] max-w-md">
                      {book.shortTitle}
                    </h3>

                    <p
                      className={`mt-3 font-serif text-xl italic ${
                        book.accent === 'gold' ? 'text-gold-300' : 'text-teal-300'
                      }`}
                    >
                      {book.subtitle}
                    </p>

                    <p className="mt-4 text-ink-200 leading-relaxed max-w-lg text-sm sm:text-base">
                      {book.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {book.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-sm text-ink-200"
                        >
                          <Check
                            className={`w-4 h-4 shrink-0 ${
                              book.accent === 'gold' ? 'text-gold-400' : 'text-teal-400'
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                          book.accent === 'gold'
                            ? 'bg-gold-400 text-ink-950 hover:bg-gold-300'
                            : 'bg-teal-400 text-ink-950 hover:bg-teal-300'
                        }`}
                      >
                        {book.cta}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onSelectBook(book)}
                        className="px-5 py-3 rounded-xl glass text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        Interactive Synopsis
                      </button>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FourCompanionsAndDispatchesSection({
  onOpenPoster,
}: {
  onOpenPoster: () => void;
}) {
  const [selectedDispatchId, setSelectedDispatchId] = useState<
    'b2b-cement' | 'concrete-pour'
  >('b2b-cement');
  const [highlightedCompanionIndex, setHighlightedCompanionIndex] = useState<number>(0);

  const activeDispatch =
    leadershipDispatches.find((d) => d.id === selectedDispatchId) ||
    leadershipDispatches[0];

  return (
    <section id="companions" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(224,171,63,0.12),transparent_36%),radial-gradient(circle_at_85%_70%,rgba(41,195,180,0.12),transparent_36%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              03. Four Lifelong Companions &amp; Field Leadership Dispatches
            </p>
            <h2
              className="font-serif text-4xl sm:text-6xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Four Lifelong Companions{' '}
              <span className="text-gradient-gold">for Lasting Achievement</span>
            </h2>
            <p className="text-ink-300 text-base sm:text-lg mt-4 leading-relaxed">
              Curiosity, Courage, Perseverance, and Gratitude with Humility—how these four
              companions bridge <span className="text-white">The DCB Success Formula</span>{' '}
              and <span className="text-white">The TCB Framework</span> on construction
              sites, batching plants, and executive boardrooms.
            </p>
          </div>

          {/* Interactive Field Dispatch Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass self-start">
            <button
              type="button"
              onClick={() => setSelectedDispatchId('b2b-cement')}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedDispatchId === 'b2b-cement'
                  ? 'text-ink-950'
                  : 'text-ink-300 hover:text-white'
              }`}
            >
              {selectedDispatchId === 'b2b-cement' && (
                <motion.span
                  layoutId="dispatchSelectorPill"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400"
                />
              )}
              <span className="relative z-10">01. B2B Cement Dispatch</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedDispatchId('concrete-pour')}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedDispatchId === 'concrete-pour'
                  ? 'text-ink-950'
                  : 'text-ink-300 hover:text-white'
              }`}
            >
              {selectedDispatchId === 'concrete-pour' && (
                <motion.span
                  layoutId="dispatchSelectorPill"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-300 to-teal-400"
                />
              )}
              <span className="relative z-10">02. Concrete Pour Dispatch</span>
            </button>
          </div>
        </motion.div>

        {/* Top Row: 4 Lifelong Companions Interactive Cards + Official Poster */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch mb-14">
          {/* Left Column: Official Poster Showcase */}
          <div className="lg:col-span-5">
            <TiltCard
              glowColor="gold"
              intensity={6}
              className="rounded-3xl border border-gold-400/35 bg-ink-900 overflow-hidden shadow-2xl h-full flex flex-col justify-between"
            >
              <div
                onClick={onOpenPoster}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onOpenPoster();
                }}
                className="relative group cursor-pointer h-full flex flex-col justify-between"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={fourCompanionsPosterImage}
                    alt="Four Lifelong Companions for lasting achievement — The DCB Success Formula and The TCB Framework by Gopal Krishna"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-2 rounded-xl glass-dark text-xs font-semibold text-white inline-flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                    Expand Artwork
                  </div>
                </div>

                <div className="p-6 bg-ink-950/90 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                      Official Leadership Edition
                    </div>
                    <div className="text-sm font-serif font-bold text-white mt-0.5">
                      Available on Amazon · Flipkart · Kindle
                    </div>
                  </div>
                  <span className="text-xs text-teal-300 font-medium">
                    {authorInfo.website}
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive 4 Companions Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {lifelongCompanions.map((comp, idx) => {
                const IconComponent = companionIcons[idx];
                const isSelected = highlightedCompanionIndex === idx;
                return (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setHighlightedCompanionIndex(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-gold-400/70 bg-gradient-to-br from-ink-900 via-ink-900 to-gold-950/35 shadow-xl shadow-gold-500/10'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400/20 to-teal-400/20 border border-gold-400/40 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="text-xs font-mono text-gold-400 tabular-nums">
                        {comp.index} / 04
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white">
                      {comp.name}
                    </h3>
                    <p className="text-sm text-gold-200/90 italic font-serif mt-1">
                      “{comp.maxim}”
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Companion Comparison Across Both Field Dispatches */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lifelongCompanions[highlightedCompanionIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="p-7 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-ink-900 via-ink-950 to-teal-950/25 space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                      Companion {lifelongCompanions[highlightedCompanionIndex].index} ·{' '}
                      {lifelongCompanions[highlightedCompanionIndex].name}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white mt-1">
                      {lifelongCompanions[highlightedCompanionIndex].maxim}
                    </h4>
                  </div>
                  <span className="text-xs text-ink-400">
                    Click any companion above to compare field applications
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-gold-500/25">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                      In B2B Cement (Customer Trust)
                    </div>
                    <p className="text-sm text-ink-200 leading-relaxed">
                      {
                        lifelongCompanions[highlightedCompanionIndex]
                          .b2bCementApplication
                      }
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-teal-400/25">
                    <div className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-2">
                      In Concrete Pours (Plant Floor)
                    </div>
                    <p className="text-sm text-ink-200 leading-relaxed">
                      {
                        lifelongCompanions[highlightedCompanionIndex]
                          .concretePourApplication
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Full Interactive Field Leadership Dispatch Reader */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeDispatch.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
            className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-ink-900 via-ink-950 to-gold-950/20 p-8 sm:p-12 shadow-2xl"
          >
            <div className="grid lg:grid-cols-12 gap-10">
              {/* Left Narrative Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {activeDispatch.badge}
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {activeDispatch.title}
                </h3>

                <div className="p-6 rounded-2xl bg-gold-400/10 border border-gold-400/30">
                  <Quote className="w-6 h-6 text-gold-400 mb-2" />
                  <p className="font-serif text-xl sm:text-2xl text-white italic leading-snug">
                    {activeDispatch.coreQuestion}
                  </p>
                </div>

                <div className="space-y-4">
                  {activeDispatch.leadParagraphs.map((para, idx) => (
                    <p key={idx} className="text-base text-ink-200 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Unboxed topic metadata */}
                <div className="pt-4 border-t border-white/10 text-xs text-ink-400 flex flex-wrap items-center gap-2">
                  {activeDispatch.topics.map((topic, i) => (
                    <React.Fragment key={topic}>
                      <span className="text-gold-300 font-medium">#{topic.replace(/\s+/g, '')}</span>
                      {i < activeDispatch.topics.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Right 4 Companions Step-by-Step + DCB & TCB Synthesis */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeDispatch.companionsInAction.map((item) => (
                    <div
                      key={item.number}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-400/35 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-lg font-bold text-white">
                          {item.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-gold-400 tabular-nums">
                          {item.number}
                        </span>
                      </div>
                      <p className="text-sm text-ink-200 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* How DCB & TCB Interlock in this Dispatch */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl border border-gold-500/30 bg-gold-400/[0.05]">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 mb-2">
                      The DCB Success Formula
                    </div>
                    <p className="text-sm text-ink-100 leading-relaxed">
                      {activeDispatch.dcbConnection}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-teal-400/30 bg-teal-400/[0.05]">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 mb-2">
                      The TCB Framework
                    </div>
                    <p className="text-sm text-ink-100 leading-relaxed">
                      {activeDispatch.tcbConnection}
                    </p>
                  </div>
                </div>

                {/* Leader Reflection Callout & Availability Footer */}
                <div className="p-6 rounded-2xl glass flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                      Leader’s Reflection
                    </div>
                    <p className="font-serif text-lg text-white italic mt-1">
                      “{activeDispatch.closingQuestion}”
                    </p>
                    <p className="text-xs text-ink-300 mt-2">
                      {activeDispatch.availabilityNote} ·{' '}
                      <span className="text-gold-300 font-medium">
                        {activeDispatch.websiteUrl}
                      </span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDispatchId(
                        selectedDispatchId === 'b2b-cement'
                          ? 'concrete-pour'
                          : 'b2b-cement'
                      )
                    }
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Switch to{' '}
                    {selectedDispatchId === 'b2b-cement'
                      ? 'Concrete Pour Dispatch →'
                      : 'B2B Cement Dispatch →'}
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

const dcbIcons = [Target, Repeat, Heart];

function FrameworkSection() {
  const [mode, setMode] = useState<'dcb' | 'tcb' | 'synthesis'>('synthesis');
  const [selectedSynthesisIndex, setSelectedSynthesisIndex] = useState<number>(0);

  return (
    <section id="framework" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              04. Interactive Operating Architecture
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              The DCB Method &amp; The TCB Executive Lens
            </h2>
            <p className="text-ink-300 mt-4 leading-relaxed">
              Explore the personal habits that outlast motivation, the executive levers
              that govern P&amp;L performance, or how both frameworks interlock.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass self-start">
            {[
              { id: 'synthesis', label: 'DCB × TCB Synthesis' },
              { id: 'dcb', label: 'The DCB Method' },
              { id: 'tcb', label: 'The TCB Framework' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMode(tab.id as 'dcb' | 'tcb' | 'synthesis')}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  mode === tab.id ? 'text-ink-950' : 'text-ink-300 hover:text-white'
                }`}
              >
                {mode === tab.id && (
                  <motion.span
                    layoutId="frameworkModePill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-300 to-teal-300"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mode === 'synthesis' && (
            <motion.div
              key="synthesis"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {synthesisConnections.map((item, idx) => {
                  const isActive = selectedSynthesisIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSynthesisIndex(idx)}
                      className={`text-left p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-gold-400/60 bg-gradient-to-br from-ink-900 via-ink-900 to-gold-950/30 shadow-xl shadow-gold-500/10'
                          : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="w-12 h-12 rounded-2xl bg-gold-400 text-ink-950 font-serif text-2xl font-bold flex items-center justify-center">
                            {item.dcbLetter}
                          </span>
                          <ArrowRight className="w-4 h-4 text-ink-400" />
                          <span className="w-12 h-12 rounded-2xl bg-teal-400 text-ink-950 font-serif text-2xl font-bold flex items-center justify-center">
                            {item.tcbLetter}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-ink-400 tabular-nums">
                          0{idx + 1} / 03
                        </span>
                      </div>

                      <div className="text-xs uppercase tracking-[0.16em] text-gold-300">
                        {item.dcbName} → {item.tcbName}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mt-2 leading-snug">
                        {item.headline}
                      </h3>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={synthesisConnections[selectedSynthesisIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="p-8 sm:p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-ink-900 via-ink-950 to-teal-950/20 grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                    Active Coupling ·{' '}
                    {synthesisConnections[selectedSynthesisIndex].dcbName} ×{' '}
                    {synthesisConnections[selectedSynthesisIndex].tcbName}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {synthesisConnections[selectedSynthesisIndex].headline}
                  </h3>
                  <p className="text-ink-200 text-base sm:text-lg leading-relaxed">
                    {synthesisConnections[selectedSynthesisIndex].summary}
                  </p>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    Executive Outcomes
                  </div>
                  {synthesisConnections[selectedSynthesisIndex].metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {mode === 'dcb' && (
            <motion.div
              key="dcb"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {dcbPillars.map((pillar, idx) => {
                const IconComponent = dcbIcons[idx];
                return (
                  <TiltCard
                    key={pillar.letter}
                    glowColor="gold"
                    intensity={6}
                    className="rounded-3xl glass p-8"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg mb-6">
                      <span className="font-serif text-3xl font-bold text-ink-950">
                        {pillar.letter}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <IconComponent className="w-5 h-5 text-gold-400" />
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {pillar.name}
                      </h3>
                    </div>
                    <p className="text-sm text-ink-200 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2.5 pt-4 border-t border-white/10">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs sm:text-sm text-ink-300"
                        >
                          <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                );
              })}
            </motion.div>
          )}

          {mode === 'tcb' && (
            <motion.div
              key="tcb"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {tcbPillars.map((pillar, idx) => (
                <TiltCard
                  key={pillar.letter}
                  glowColor="teal"
                  intensity={6}
                  className="rounded-3xl border border-teal-400/25 bg-teal-400/[0.04] p-8"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-6xl text-outline">
                      {pillar.letter}
                    </span>
                    <span className="text-xs font-mono font-bold text-teal-300 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {pillar.name}
                  </h3>
                  <p className="text-sm text-ink-200 leading-relaxed mt-3">
                    {pillar.description}
                  </p>
                </TiltCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TopLeadersSection() {
  const [filterTier, setFilterTier] = useState<'all' | 'chairman' | 'executive'>('all');
  const [activeLeader, setActiveLeader] = useState<Leader>(acknowledgedLeaders[0]);

  const filteredLeaders = useMemo(() => {
    if (filterTier === 'all') return acknowledgedLeaders;
    return acknowledgedLeaders.filter((leader) => leader.tier === filterTier);
  }, [filterTier]);

  return (
    <section id="leaders" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(224,171,63,0.1),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(41,195,180,0.09),transparent_38%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              05. Top Leaders &amp; Mentors Hall of Gratitude
            </p>
            <h2
              className="font-serif text-4xl sm:text-6xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Visionary Leaders Who{' '}
              <span className="text-gradient-gold">Shaped the Journey</span>
            </h2>
            <p className="text-ink-300 text-base sm:text-lg mt-4 leading-relaxed">
              {acknowledgementText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass self-start">
            {[
              { id: 'all', label: 'All Top Leaders (15)' },
              { id: 'chairman', label: 'Group Chairmen (5)' },
              { id: 'executive', label: 'Executive Leaders (10)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setFilterTier(tab.id as 'all' | 'chairman' | 'executive')
                }
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filterTier === tab.id
                    ? 'text-ink-950'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {filterTier === tab.id && (
                  <motion.span
                    layoutId="leaderFilterPill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLeader.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="mb-10 p-7 sm:p-9 rounded-3xl border border-gold-400/35 bg-gradient-to-r from-ink-900 via-ink-900/95 to-gold-950/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 text-ink-950 font-serif text-2xl sm:text-3xl font-bold flex items-center justify-center shadow-lg shrink-0">
                {activeLeader.initials}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-gold-300 uppercase tracking-[0.18em]">
                  <span>{activeLeader.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeLeader.role}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
                  {activeLeader.honorificName}
                </h3>
                <p className="text-sm text-ink-300 mt-1">{activeLeader.domain}</p>
              </div>
            </div>

            <div className="text-xs text-ink-400 md:text-right shrink-0">
              <div className="text-gold-300 font-semibold uppercase tracking-wider">
                Acknowledged Mentor &amp; Leader
              </div>
              <div className="mt-1">Click any leader card below to spotlight</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader, idx) => {
              const isSelected = activeLeader.name === leader.name;
              const isChairman = leader.tier === 'chairman';
              return (
                <motion.div
                  layout
                  key={leader.name}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: (idx % 6) * 0.03 }}
                >
                  <TiltCard
                    glowColor={isChairman ? 'gold' : 'teal'}
                    intensity={5}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? 'border-gold-400/70 bg-gradient-to-br from-ink-900 to-gold-950/35 shadow-xl shadow-gold-500/10'
                        : isChairman
                        ? 'border-gold-500/25 bg-white/[0.03] hover:border-gold-400/50'
                        : 'border-white/10 bg-white/[0.025] hover:border-teal-400/45'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveLeader(leader)}
                      className="w-full h-full text-left p-6 flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif text-lg font-bold shrink-0 ${
                              isChairman
                                ? 'bg-gradient-to-br from-gold-300 to-gold-600 text-ink-950 shadow-md shadow-gold-500/20'
                                : 'bg-teal-400/15 border border-teal-400/35 text-teal-300'
                            }`}
                          >
                            {leader.initials}
                          </div>

                          <span className="text-xs font-mono text-ink-500 tabular-nums">
                            #{String(
                              acknowledgedLeaders.findIndex(
                                (l) => l.name === leader.name
                              ) + 1
                            ).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                          {leader.honorificName}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-gold-400 mt-1.5">
                          <span>{leader.role}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-ink-300">{leader.organization}</span>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10 text-xs text-ink-400 leading-relaxed">
                        {leader.domain}
                      </div>
                    </button>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 p-7 sm:p-8 rounded-3xl glass text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-3">
            Official Roll of Gratitude
          </p>
          <p className="text-sm sm:text-base text-ink-200 max-w-4xl mx-auto leading-relaxed">
            {fullAcknowledgementStatement}
          </p>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [category, setCategory] = useState<
    'all' | 'press' | 'goodreads' | 'social' | 'verified'
  >('all');

  const featuredReviews = testimonials.filter((item) => item.featured);
  const gridReviews = useMemo(() => {
    const nonFeatured = testimonials.filter((item) => !item.featured);
    if (category === 'all') return nonFeatured;
    if (category === 'press') {
      return nonFeatured.filter((r) =>
        ['Medium', 'Youth Ki Awaaz', 'Deified Publications'].includes(r.platform)
      );
    }
    if (category === 'goodreads') {
      return nonFeatured.filter((r) => r.platform === 'Goodreads');
    }
    if (category === 'verified') {
      return nonFeatured.filter((r) => r.platform === 'Amazon');
    }
    return nonFeatured.filter((r) =>
      ['Facebook', 'Instagram', 'LinkedIn', 'Threads', 'X'].includes(r.platform)
    );
  }, [category]);

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              06. Readers &amp; Reviewers
            </p>
            <h2
              className="font-serif text-4xl sm:text-6xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              What people are{' '}
              <span className="text-gradient-gold">saying about the book.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass self-start">
            {[
              { id: 'all', label: 'All Reviews (16)' },
              { id: 'press', label: 'Press & Editorial' },
              { id: 'goodreads', label: 'Goodreads' },
              { id: 'verified', label: 'Amazon Verified' },
              { id: 'social', label: 'Community' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setCategory(
                    tab.id as 'all' | 'press' | 'goodreads' | 'social' | 'verified'
                  )
                }
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  category === tab.id
                    ? 'bg-gold-400 text-ink-950 shadow-sm'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {featuredReviews.map((review) => (
          <div key={review.id} className="mb-10">
            <TiltCard
              glowColor="gold"
              intensity={4}
              className="rounded-[2rem] border border-gold-500/30 bg-gradient-to-br from-ink-900 via-ink-900/90 to-gold-950/25 p-8 sm:p-12"
            >
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Quote className="w-10 h-10 text-gold-400/70 mb-6" />
                <p className="font-serif text-2xl sm:text-3xl text-white leading-relaxed italic max-w-4xl">
                  “{review.quote}”
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-ink-300">
                    {review.rating && (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-gold-300 tabular-nums">
                        <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                        {review.rating.toFixed(1)} / 5.0
                      </span>
                    )}
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-white">{review.platform}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-ink-400">{review.label}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                    Read Full Review <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </TiltCard>
          </div>
        ))}

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {gridReviews.map((review) => (
              <motion.a
                layout
                key={review.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-gold-400/35 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs text-ink-400">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gold-300">
                        {review.platform}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{review.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-gold-400 transition-colors shrink-0" />
                  </div>

                  <p className="text-ink-100 leading-relaxed text-[15px]">
                    “{review.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-xs text-ink-400 group-hover:text-ink-200 transition-colors flex items-center justify-between">
                  <span>External Source</span>
                  <span>Verify ↗</span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceAndCredentialsSection() {
  const [activeTab, setActiveTab] = useState<'career' | 'credentials'>('career');

  return (
    <section id="experience" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-xs font-semibold text-gold-400 tracking-[0.22em] uppercase">
              07. Career Trajectory &amp; Credentials
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              A Legacy of Executive Leadership
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl glass self-start">
            {[
              { id: 'career', label: 'Career & Education' },
              { id: 'credentials', label: 'Certifications & Competencies' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'career' | 'credentials')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gold-400 text-ink-950 shadow-sm'
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'career' && (
            <motion.div
              key="career"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-ink-950" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Professional Experience
                  </h3>
                </div>

                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass hover:border-gold-400/35 transition-all"
                    >
                      <div className="flex items-center gap-2 text-xs text-gold-400 mb-2 tabular-nums">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-ink-300">{exp.company}</span>
                      </div>
                      <h4 className="text-base font-semibold text-white leading-snug">
                        {exp.role}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-ink-950" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Academic Foundation
                  </h3>
                </div>

                <div className="space-y-4">
                  {educations.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl glass hover:border-teal-400/35 transition-all"
                    >
                      <div className="text-xs text-teal-300 uppercase tracking-wider mb-1">
                        0{idx + 1}. Institution
                      </div>
                      <h4 className="text-base font-semibold text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-ink-300 mt-1">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'credentials' && (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div className="p-7 rounded-3xl glass">
                <div className="flex items-center gap-3 mb-6">
                  <BadgeCheck className="w-5 h-5 text-gold-400" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <div className="text-sm font-semibold text-white">{cert.name}</div>
                      <div className="text-xs text-ink-300 mt-1">
                        {cert.org} ·{' '}
                        <span className="text-gold-400 tabular-nums">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-3xl glass">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-5 h-5 text-teal-400" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Honors &amp; Awards
                  </h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10"
                    >
                      <div className="w-11 h-11 rounded-xl bg-teal-400/20 border border-teal-400/40 flex items-center justify-center shrink-0">
                        <Trophy className="w-5 h-5 text-teal-300" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {award.name}
                        </div>
                        <div className="text-xs text-ink-300 mt-0.5">
                          {award.org} ·{' '}
                          <span className="text-teal-300 tabular-nums">{award.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-7 rounded-3xl glass">
                <div className="flex items-center gap-3 mb-6">
                  <Compass className="w-5 h-5 text-gold-400" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    Core Competencies
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {skills.map((skill, idx) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between text-sm text-ink-200 py-1.5 border-b border-white/5 last:border-0"
                    >
                      <span>{skill}</span>
                      <span className="text-xs font-mono text-ink-500 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function PosterLightboxModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-ink-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[92vh] rounded-3xl border border-white/15 bg-ink-900 overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Four Lifelong Companions for Lasting Achievement
                </p>
                <p className="text-xs text-ink-400 mt-0.5">
                  The DCB Success Formula &amp; The TCB Framework · Gopal Krishna
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close poster viewer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-200 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-ink-950">
              <img
                src={fourCompanionsPosterImage}
                alt="Four Lifelong Companions for lasting achievement — Curiosity, Courage, Perseverance, Gratitude with Humility"
                referrerPolicy="no-referrer"
                className="max-h-[76vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BookDossierModal({
  book,
  onClose,
}: {
  book: Book | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [book, onClose]);

  return (
    <AnimatePresence>
      {book && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-ink-900 p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-ink-200 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-5">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                  <img
                    src={book.image}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-4">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    book.accent === 'gold' ? 'text-gold-400' : 'text-teal-300'
                  }`}
                >
                  {book.eyebrow}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {book.shortTitle}
                </h3>
                <p
                  className={`font-serif text-lg italic ${
                    book.accent === 'gold' ? 'text-gold-300' : 'text-teal-300'
                  }`}
                >
                  {book.subtitle}
                </p>
                <p className="text-sm sm:text-base text-ink-200 leading-relaxed">
                  {book.description}
                </p>

                <div className="pt-2 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    Key Pillars Covered
                  </div>
                  {book.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-sm text-white">
                      <Check
                        className={`w-4 h-4 ${
                          book.accent === 'gold' ? 'text-gold-400' : 'text-teal-400'
                        }`}
                      />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      book.accent === 'gold'
                        ? 'bg-gold-400 text-ink-950 hover:bg-gold-300'
                        : 'bg-teal-400 text-ink-950 hover:bg-teal-300'
                    }`}
                  >
                    {book.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-xl glass text-sm font-medium text-ink-200 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 py-16 bg-ink-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif text-xl font-bold text-white">
              Gopal Krishna
            </span>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs mt-3">
              Business leader, transformation strategist, and author of The DCB Success
              Formula and The TCB Framework. Where discipline meets direction, success
              becomes inevitable.
            </p>
            <p className="text-xs text-gold-300 mt-3">
              Available on Amazon · Flipkart · Kindle
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                ...navLinks,
                { label: 'DCB × TCB Matrix', href: '#framework' },
                { label: 'Career & Credentials', href: '#experience' },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() =>
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }
                  className="text-sm text-ink-400 hover:text-gold-400 transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-4">
              Direct Channels
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.gopalkrishna.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors"
              >
                <Globe className="w-4 h-4" /> www.gopalkrishna.in
              </a>
              <a
                href="https://www.linkedin.com/in/gopal-krishna-670a4970"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-gold-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn Profile
              </a>
              <a
                href="https://play.google.com/store/books/details?id=prrwEQAAQBAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-gold-400 transition-colors"
              >
                <BookOpen className="w-4 h-4" /> The DCB Success Formula (Google Play)
              </a>
              <a
                href="https://www.amazon.in/TCB-Framework-Business-Strategy-Book/dp/B0HKRKBDB1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-teal-300 transition-colors"
              >
                <BookOpen className="w-4 h-4" /> The TCB Framework (Amazon)
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Gopal Krishna · www.gopalkrishna.in · All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-gold-400 transition-colors group cursor-pointer"
          >
            Back to top
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink-950 text-white selection:bg-gold-400 selection:text-ink-950">
      <KineticCanvas />
      <Navbar />
      <main className="relative z-10">
        <HeroSection
          onSelectBook={setSelectedBook}
          onOpenPoster={() => setPosterOpen(true)}
        />
        <QuoteMarquee />
        <AboutSection />
        <BooksSection onSelectBook={setSelectedBook} />
        <FourCompanionsAndDispatchesSection onOpenPoster={() => setPosterOpen(true)} />
        <FrameworkSection />
        <TopLeadersSection />
        <TestimonialsSection />
        <ExperienceAndCredentialsSection />
      </main>
      <Footer />
      <BookDossierModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      <PosterLightboxModal open={posterOpen} onClose={() => setPosterOpen(false)} />
    </div>
  );
}
