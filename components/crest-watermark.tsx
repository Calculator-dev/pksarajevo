import Image from "next/image";

/**
 * Huge, faint, diagonal club crest. Place inside a `relative isolate overflow-hidden`
 * section; it sits behind the content and spans the full screen width.
 */
export function CrestWatermark({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 flex items-center justify-center ${className}`}
    >
      <Image
        src="/images/pks-logo.png"
        alt=""
        width={932}
        height={1249}
        sizes="100vw"
        className="h-[max(96vw,880px)] w-auto max-w-none -rotate-[24deg] select-none opacity-[0.04] sm:opacity-[0.05]"
      />
    </div>
  );
}
