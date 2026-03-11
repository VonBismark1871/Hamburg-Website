import Link from 'next/link';

function LogoIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={`h-9 w-9 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10.5C7 8.84315 8.34315 7.5 10 7.5H13.5C15.1569 7.5 16.5 8.84315 16.5 10.5V38.5C16.5 40.1569 15.1569 41.5 13.5 41.5H10C8.34315 41.5 7 40.1569 7 38.5V10.5Z"
        fill="#0F2748"
      />
      <path
        d="M31.5 10.5C31.5 8.84315 32.8431 7.5 34.5 7.5H38C39.6569 7.5 41 8.84315 41 10.5V38.5C41 40.1569 39.6569 41.5 38 41.5H34.5C32.8431 41.5 31.5 40.1569 31.5 38.5V10.5Z"
        fill="#57A9FF"
      />
      <path
        d="M13 16.5C13 14.8431 14.3431 13.5 16 13.5H20.5C22.1569 13.5 23.5 14.8431 23.5 16.5V20.5H24.5V16.5C24.5 14.8431 25.8431 13.5 27.5 13.5H32C33.6569 13.5 35 14.8431 35 16.5V20C35 21.6569 33.6569 23 32 23H16C14.3431 23 13 21.6569 13 20V16.5Z"
        fill="#0F2748"
      />
      <path
        d="M13 27.5C13 25.8431 14.3431 24.5 16 24.5H20.5C22.1569 24.5 23.5 25.8431 23.5 27.5V31.5H24.5V27.5C24.5 25.8431 25.8431 24.5 27.5 24.5H32C33.6569 24.5 35 25.8431 35 27.5V31C35 32.6569 33.6569 34 32 34H16C14.3431 34 13 32.6569 13 31V27.5Z"
        fill="#57A9FF"
      />
    </svg>
  );
}

function LogoWordmark({ compact = false }) {
  return (
    <span
      className={`whitespace-nowrap leading-none tracking-[-0.02em] ${compact ? 'text-2xl sm:text-[1.7rem]' : 'text-[1.65rem] sm:text-[1.82rem]'}`}
    >
      <span className="font-extrabold text-[#0F2748]">Hamburg</span>{' '}
      <span className="font-semibold text-[#57A9FF]">Websites</span>
    </span>
  );
}

export default function Logo({ className = '', compact = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${compact ? 'gap-2' : 'gap-2.5'} ${className}`}>
      <LogoIcon className={compact ? 'h-8 w-8 sm:h-[2.05rem] sm:w-[2.05rem]' : 'h-9 w-9 sm:h-10 sm:w-10'} />
      <LogoWordmark compact={compact} />
    </span>
  );
}

export function LogoLink({ href = '/', className = '', compact = false }) {
  return (
    <Link href={href} className={`inline-flex max-w-full items-center ${className}`} aria-label="Hamburg Websites Startseite">
      <Logo compact={compact} className="max-w-full" />
    </Link>
  );
}
