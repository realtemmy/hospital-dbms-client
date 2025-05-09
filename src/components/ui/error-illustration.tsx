import React from "react";

export function ErrorIllustration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 500 400"
        fill="none"
      >
        <g className="animate-float">
          <path
            d="M135.5 218.5C128 197.5 115.5 144 157 112.5C212 70.9999 252 112.5 259.5 130.5C267 148.5 290 205 259.5 237C229 269 213 264.5 195 260.5C177 256.5 143 239.5 135.5 218.5Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M337.5 315C337.5 344.219 324.938 368 309.5 368C294.062 368 281.5 344.219 281.5 315C281.5 285.781 294.062 262 309.5 262C324.938 262 337.5 285.781 337.5 315Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M120 342C120 354.15 116.418 364 112 364C107.582 364 104 354.15 104 342C104 329.85 107.582 320 112 320C116.418 320 120 329.85 120 342Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
        </g>
        <g className="animate-float [animation-delay:200ms]">
          <rect
            x="140"
            y="80"
            width="220"
            height="180"
            rx="10"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <rect
            x="150"
            y="92"
            width="200"
            height="148"
            rx="5"
            fill="white"
            fillOpacity="0.7"
          />
          <path
            d="M190 179.5C196.5 179.5 224 169.5 224 152C224 134.5 220.5 119 190 119C159.5 119 156.5 135 156.5 152C156.5 169 183.5 179.5 190 179.5Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M260 179.5C266.5 179.5 294 169.5 294 152C294 134.5 290.5 119 260 119C229.5 119 226.5 135 226.5 152C226.5 169 253.5 179.5 260 179.5Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <line
            x1="184.5"
            y1="127"
            x2="184.5"
            y2="139"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="194.5"
            y1="127"
            x2="194.5"
            y2="139"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="257.5"
            y1="127"
            x2="257.5"
            y2="139"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="267.5"
            y1="127"
            x2="267.5"
            y2="139"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M210 202.5C223.5 216 236.5 224 251 202.5"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <g className="animate-float [animation-delay:400ms]">
          <path
            d="M216.5 276.5L250 323L283.5 276.5H320.5V335H173.5V276.5H216.5Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <mask
            id="path-13-outside-1_4_97"
            maskUnits="userSpaceOnUse"
            x="174"
            y="276"
            width="146"
            height="60"
            fill="black"
          >
            <rect fill="white" x="174" y="276" width="146" height="60" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M175.5 335V277.5H216.011L249.5 324L282.989 277.5H319.5V335H175.5Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.5 335V277.5H216.011L249.5 324L282.989 277.5H319.5V335H175.5Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M175.5 277.5V276.5H174.5V277.5H175.5ZM175.5 335H174.5V336H175.5V335ZM216.011 277.5L216.765 276.646L216.313 276H216.011V277.5ZM249.5 324L248.746 324.854L249.5 325.979L250.254 324.854L249.5 324ZM282.989 277.5V276H282.687L282.235 276.646L282.989 277.5ZM319.5 277.5H320.5V276.5H319.5V277.5ZM319.5 335V336H320.5V335H319.5ZM176.5 277.5V335H174.5V277.5H176.5ZM216.011 276H175.5V279H216.011V276ZM250.254 323.146L216.765 276.646L215.257 278.354L248.746 324.854L250.254 323.146ZM282.235 276.646L248.746 323.146L250.254 324.854L283.743 278.354L282.235 276.646ZM319.5 276H282.989V279H319.5V276ZM318.5 335V277.5H320.5V335H318.5ZM175.5 336H319.5V334H175.5V336Z"
            fill="currentColor"
            fillOpacity="0.2"
            mask="url(#path-13-outside-1_4_97)"
          />
          <line
            x1="207.5"
            y1="301"
            x2="207.5"
            y2="334"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="292.5"
            y1="301"
            x2="292.5"
            y2="334"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

// Add some animations to the global CSS
export const errorAnimationStyles = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
`; 