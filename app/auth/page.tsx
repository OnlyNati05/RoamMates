"use client";

import { useAuth } from "@/contexts/auth-context";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Plane,
  ShieldCheck,
} from "lucide-react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !authLoading) {
      router.replace("/");
    }
  }, [user, authLoading, router]);

  async function handleAuth(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) throw signUpError;
        if (data.user && !data.session) {
          setError(
            "Check your inbox to confirm your email, then come back to sign in.",
          );
          return;
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
      }
    } catch (caughtError: unknown) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function toggleMode() {
    setIsSignUp((current) => !current);
    setError("");
  }

  if (authLoading || user) {
    return (
      <div className="min-h-dvh bg-[#f6f1e7] px-5 pb-16 pt-28 text-[#123c38] sm:px-8 lg:pt-32"></div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f1e7] px-4 pb-8 pt-24 text-[#123c38] sm:px-6 sm:pb-12 sm:pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-[#123c38]/15 bg-[#fffdf8] shadow-[0_28px_80px_rgba(28,60,54,.16)] lg:grid-cols-[.9fr_1.1fr]">
        <aside className="relative hidden overflow-hidden bg-[#123c38] p-10 lg:flex lg:flex-col lg:justify-between xl:p-14">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-[34px] border-[#2f6f68]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full border-[42px] border-[#ef6f48]/40" />

          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#ef6f48]">
                <Plane className="h-5 w-5 -rotate-12" />
              </span>
              <span className="text-xl font-bold">RoamMates</span>
            </Link>

            <div className="mt-15">
              <h1 className="mt-6 text-4xl text-white font-semibold leading-tight tracking-[-0.035em] xl:text-5xl">
                Some places are better with someone beside you.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/65">
                Meet compatible travelers, compare plans, and find the right
                person for the road ahead.
              </p>
            </div>
          </div>

          <div className="relative mt-12 rounded-2xl bg-white/8 p-5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((profileNumber) => (
                  <Image
                    key={profileNumber}
                    src={`/profile_images/pfp${profileNumber}.jpg`}
                    alt={`RoamMates community member ${profileNumber}`}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-[#24534f] object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-white font-semibold">
                  Made for curious travelers
                </p>
                <p className="mt-0.5 text-xs text-white/55">
                  Find someone going your way.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className="relative flex items-center justify-center bg-[#fffdf8] px-5 py-10 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-[#6d7d7b] transition hover:text-[#123c38] lg:absolute lg:right-8 lg:top-8 lg:mb-0"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {isSignUp
                  ? "Start your next adventure"
                  : "Sign in to RoamMates"}
              </h2>
              <p className="mt-3 leading-7 text-[#657572]">
                {isSignUp
                  ? "Create a free account and meet people heading your way."
                  : "Pick up where you left off and keep planning your trip."}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#244b47]"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#78908c]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="block min-h-14 w-full rounded-xl border border-[#cfc7ba] bg-white py-3.5 pl-12 pr-4 text-[#123c38] outline-none transition placeholder:text-[#9aa5a2] hover:border-[#8da49f] focus:border-[#2f8278] focus:ring-4 focus:ring-[#2f8278]/10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#244b47]"
                  >
                    Password
                  </label>
                  {!isSignUp && (
                    <span className="text-xs font-medium text-[#7a8b88]">
                      At least 6 characters
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#78908c]" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={
                      isSignUp ? "new-password" : "current-password"
                    }
                    minLength={6}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="block min-h-14 w-full rounded-xl border border-[#cfc7ba] bg-white py-3.5 pl-12 pr-12 text-[#123c38] outline-none transition placeholder:text-[#9aa5a2] hover:border-[#8da49f] focus:border-[#2f8278] focus:ring-4 focus:ring-[#2f8278]/10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#78908c] transition hover:text-[#123c38]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-[#cf5b3a]/25 bg-[#ef6f48]/10 p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#cf5b3a]" />
                  <p className="text-sm leading-6 text-[#9f3f26]">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#123c38] px-6 text-base font-bold text-white shadow-[0_10px_30px_rgba(18,60,56,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0b2f2c] focus:outline-none focus:ring-2 focus:ring-[#2f8278] focus:ring-offset-2 focus:ring-offset-[#fffdf8] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    {isSignUp ? "Creating account..." : "Signing in..."}
                  </>
                ) : (
                  <>
                    {isSignUp ? "Create free account" : "Sign in"}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 flex items-center justify-center gap-1.5 text-sm">
              <span className="text-[#657572]">
                {isSignUp ? "Already have an account?" : "New to RoamMates?"}
              </span>
              <button
                type="button"
                onClick={toggleMode}
                className="font-semibold text-[#d75b36] transition hover:text-[#b94325]"
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </button>
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-[#7a8b88]">
              <ShieldCheck className="h-4 w-4 text-[#2f8278]" />
              Your information stays private and secure.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
