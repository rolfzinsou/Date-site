"use client";

// A heart drawn as a single SVG path. A glowing red segment travels along
// that exact outline on loop, like a current running through the shape —
// the "snake" effect requested, but locked to a real heart contour rather
// than a generic css heart hack.
const HEART_PATH =
  "M300,520 C120,400 20,290 20,180 C20,90 95,20 180,20 C240,20 280,55 300,100 " +
  "C320,55 360,20 420,20 C505,20 580,90 580,180 C580,290 480,400 300,520 Z";

export default function HeartTrace({ caption }: { caption: string }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-[220px] sm:w-[260px]">
        <svg viewBox="0 0 600 540" className="w-full h-auto overflow-visible">
          <defs>
            <filter id="heartGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2f6d" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff2f6d" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff7aa2" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* faint static outline, the "wire" the current runs along */}
          <path
            d={HEART_PATH}
            fill="none"
            stroke="#5a2438"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* the moving glowing current, tracing the exact heart contour */}
          <path
            d={HEART_PATH}
            fill="none"
            stroke="url(#traceGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            filter="url(#heartGlow)"
            strokeDasharray="550 950"
            className="heart-current"
          />
        </svg>
      </div>
      <p className="text-mauve text-sm tracking-wide text-center max-w-xs font-body">
        {caption}
      </p>

      <style jsx>{`
        .heart-current {
          animation: travel 3.6s linear infinite;
        }
        @keyframes travel {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -1490;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .heart-current {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
