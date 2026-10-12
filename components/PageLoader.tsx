import { Plane } from "lucide-react";

type PageLoaderProps = {
  message?: string;
  description?: string;
  className?: string;
};

export default function PageLoader({
  message = "Getting things ready",
  description = "This will only take a moment.",
  className = "",
}: PageLoaderProps) {
  return (
    <main
      className={`relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#f6f1e7] px-6 pb-10 pt-28 text-[#123c38] ${className}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="relative flex max-w-sm flex-col items-center text-center"
        role="status"
      >
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-[1.75rem] border border-[#ef6f48]/30 [animation-duration:2s]" />
          <span className="absolute inset-2 rounded-3xl border border-[#123c38]/15 bg-white" />
          <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#ef6f48] text-white shadow-[0_12px_35px_rgba(239,111,72,0.3)]">
            <Plane className="h-7 w-7 -rotate-12" />
          </span>
        </div>
        <p className="text-lg font-semibold">{message}</p>
        <p className="mt-2 text-sm text-[#5b6c69]">{description}</p>
      </div>
    </main>
  );
}
