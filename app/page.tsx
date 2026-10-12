"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const compatibility = [
  { label: "Travel pace", value: "Slow & curious" },
  { label: "Budget", value: "$80–120 / day" },
  { label: "Shared interests", value: "Food · Hiking" },
];

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Share your trip",
    description:
      "Add where you’re headed, your dates, budget, and the kind of days you love.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Meet your people",
    description:
      "Discover compatible travelers whose pace, plans, and personality align with yours.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Plan it together",
    description:
      "Chat, video call, compare must-dos, and turn a match into a trip you’ll both love.",
  },
];

export default function Home() {
  const { user } = useAuth();
  const primaryHref = user ? "/matches" : "/auth";
  const primaryLabel = user ? "Find a travel mate" : "Join RoamMates";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f1e7] text-[#102f2d]">
      <section className="relative px-5 pb-24 pt-32 sm:px-8 lg:pb-32 lg:pt-40">
        <div className="absolute inset-x-0 top-20 h-px bg-[#102f2d]/10" />
        <div className="pointer-events-none absolute -right-44 top-16 h-[34rem] w-[34rem] rounded-full bg-[#ef8354]/15 blur-[90px]" />
        <div className="pointer-events-none absolute -left-32 top-72 h-80 w-80 rounded-full bg-[#4a9d92]/15 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 0.7, 0.3, 1] }}
          >
            <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              Go where you want.
              <span className="block font-light italic text-[#ef6f48]">
                Not necessarily alone.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#49615f] sm:text-xl">
              Meet verified travelers going your way, match on the details that
              matter, and make your next adventure a shared one.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryHref}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#123c38] px-7 font-semibold text-white shadow-[0_14px_35px_rgba(18,60,56,.18)] transition hover:-translate-y-0.5 hover:bg-[#0b2f2c]"
              >
                {primaryLabel}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/matches/list"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#102f2d]/20 bg-white/55 px-7 font-semibold transition hover:bg-white"
              >
                <Users className="h-5 w-5 text-[#ef6f48]" /> Browse travel mates
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#49615f]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#2f8278]" /> Verified
                profiles
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#2f8278]" /> Chat before
                you commit
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 0.7, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -left-7 top-16 z-20 hidden -rotate-6 rounded-2xl bg-[#ef6f48] px-5 py-4 text-white shadow-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
                Next stop
              </p>
              <p className="mt-1 font-semibold">Lisbon · May 18</p>
            </div>
            <div className="rounded-[2.25rem] border border-[#102f2d]/15 bg-white p-3 shadow-[0_28px_80px_rgba(28,60,54,.18)] sm:p-5">
              <div className="overflow-hidden rounded-[1.7rem] bg-[#123c38] text-white">
                <div className="relative h-56 bg-[linear-gradient(135deg,#5ca79d,#1c5f58)] p-6 sm:h-64">
                  <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] [background-size:22px_22px]" />
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 500 260"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M-20 205C77 191 97 64 205 107C310 149 330 35 525 49"
                      stroke="white"
                      strokeOpacity=".65"
                      strokeWidth="2"
                      strokeDasharray="8 9"
                    />
                    <circle
                      cx="202"
                      cy="107"
                      r="7"
                      fill="#ef6f48"
                      stroke="white"
                      strokeWidth="4"
                    />
                  </svg>
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur">
                    <Plane className="h-4 w-4" /> Barcelona → Lisbon
                  </span>
                  <div className="absolute bottom-5 right-5 rounded-2xl bg-[#f6f1e7] px-4 py-3 text-[#102f2d] shadow-lg">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6d7d7b]">
                      Trip overlap
                    </p>
                    <p className="mt-1 text-xl font-bold">6 days</p>
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#e8b58f]">
                      <Image
                        src="/profile_images/pfp1.jpg"
                        alt="Maya, an illustrative traveler profile"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 rounded-full bg-white p-1 text-[#2f8278]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="text-xl font-semibold">Maya, 28</h2>
                        <span className="rounded-full bg-[#ef6f48]/20 px-3 py-1 text-xs font-bold text-[#ffb494]">
                          94% match
                        </span>
                      </div>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-white/60">
                        <MapPin className="h-3.5 w-3.5" /> Brooklyn, New York
                      </p>
                    </div>
                  </div>
                  <div className="my-5 h-px bg-white/10" />
                  <div className="grid gap-2 sm:grid-cols-3">
                    {compatibility.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl bg-white/7 p-3"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs font-semibold">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#102f2d]/10 bg-[#123c38] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ef9b75]">
                How it works
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
                Same destination.
                <br />
                <span className="font-light italic text-[#9bc8c1]">
                  Better chemistry.
                </span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">
              RoamMates goes beyond dates and destinations, helping you find
              people who travel the way you do.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative bg-[#123c38] p-7 sm:p-9"
              >
                <span className="absolute right-7 top-7 text-5xl font-light text-white/8">
                  {step.number}
                </span>
                <step.icon className="h-7 w-7 text-[#ef8a62]" />
                <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/55">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2rem] bg-[#e7ddd0] p-8 sm:p-12">
            <WalletCards className="h-7 w-7 text-[#ef6f48]" />
            <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
              Match on more than a pin on the map.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5b6c69]">
              Compare pace, budget, sleep schedules, interests, and social
              energy before you ever book a room.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Early bird",
                "Local food",
                "Carry-on only",
                "Hiking",
                "Night trains",
                "Museums",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#102f2d]/15 bg-[#f6f1e7] px-4 py-2 text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[2rem] bg-[#ef6f48] p-8 text-white sm:p-12">
            <CalendarDays className="h-8 w-8" />
            <div className="mt-20">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-white/65">
                Your next chapter
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em]">
                The world is better when it’s shared.
              </h2>
              <a
                href={primaryHref}
                className="group mt-8 inline-flex min-h-13 items-center gap-2 rounded-full bg-white px-6 font-semibold text-[#b64424]"
              >
                {primaryLabel}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
