import Link from 'next/link';

function LogoMark({ className = '', title = 'HW Monogram' }) {
  return (
    <svg
      viewBox="0 0 220 170"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="hwDark" x1="0%" y1="100%" x2="75%" y2="0%">
          <stop offset="0%" stopColor="#0b163d" />
          <stop offset="100%" stopColor="#2d8fd6" />
        </linearGradient>
        <linearGradient id="hwLight" x1="20%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1d7fc5" />
          <stop offset="100%" stopColor="#66cde7" />
        </linearGradient>
      </defs>

      <path d="M14 20h28v52h46V20h28v130H88v-50H42v50H14z" fill="url(#hwDark)" />
      <path d="M94 150l60-62h28l-60 62z" fill="#0b163d" opacity="0.75" />
      <path d="M94 150l62-66h28l-62 66z" fill="url(#hwDark)" />
      <path d="M156 84h28l28 66h-28z" fill="url(#hwDark)" />
      <path d="M174 56h32l-36 94h-32z" fill="url(#hwLight)" />
    </svg>
  );
}

export default function Logo({ variant = 'full', className = '', iconClassName = '' }) {
  if (variant === 'icon') {
    return <LogoMark className={className} />;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-8 w-auto sm:h-9 ${iconClassName}`} title="Hamburg Websites Monogram" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.08rem] font-semibold tracking-tight text-slateBlue sm:text-[1.15rem]">Hamburg</span>
        <span className="text-[1.08rem] font-semibold tracking-tight text-sky-500 sm:text-[1.15rem]">Websites</span>
      </span>
    </span>
  );
}

export function LogoLink({ href = '/', className = '' }) {
  return (
    <Link href={href} className={className} aria-label="Hamburg Websites Startseite">
      <Logo />
    </Link>
  );
}
