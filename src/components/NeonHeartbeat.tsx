"use client";

export default function NeonHeartbeat() {
  return (
    <div className="flex items-center justify-center py-4">
      <svg width="96" height="88" viewBox="0 0 96 88" className="neon-heart">
        <path
          d="M48,82 C20,62 4,42 4,24 C4,10 15,0 29,0 C39,0 46,6 48,15 C50,6 57,0 67,0 C81,0 92,10 92,24 C92,42 76,62 48,82 Z"
          className="neon-heart-path"
        />
      </svg>
      <style jsx>{`
        .neon-heart-path {
          fill: none;
          stroke: var(--color-neon);
          stroke-width: 3.5;
          filter: drop-shadow(0 0 6px rgba(255, 47, 109, 0.9))
            drop-shadow(0 0 16px rgba(255, 47, 109, 0.6));
          animation: beat 1.15s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes beat {
          0%,
          100% {
            transform: scale(1);
            fill: rgba(255, 47, 109, 0.08);
          }
          14% {
            transform: scale(1.14);
            fill: rgba(255, 47, 109, 0.35);
          }
          28% {
            transform: scale(0.96);
            fill: rgba(255, 47, 109, 0.08);
          }
          42% {
            transform: scale(1.1);
            fill: rgba(255, 47, 109, 0.3);
          }
          60% {
            transform: scale(1);
            fill: rgba(255, 47, 109, 0.08);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .neon-heart-path {
            animation: none;
            fill: rgba(255, 47, 109, 0.2);
          }
        }
      `}</style>
    </div>
  );
}
