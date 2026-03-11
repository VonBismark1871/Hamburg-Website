import Link from 'next/link';

export default function Logo({ className = '', compact = false }) {
  const iconSize = compact ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-9 w-9 sm:h-10 sm:w-10';
  const textSize = compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/brand/hw-monogram-icon-v2.svg" alt="" aria-hidden="true" className={`${iconSize} shrink-0`} />
      <span className={`font-semibold leading-none tracking-[-0.01em] ${textSize}`}>
        <span className="text-[#0f2747]">Hamburg</span>{' '}
        <span className="text-[#36a5e8]">Websites</span>
      </span>
    </span>
  );
}

export function LogoLink({ href = '/', className = '', compact = false }) {
  return (
    <Link href={href} className={`inline-flex items-center ${className}`} aria-label="Hamburg Websites Startseite">
      <Logo compact={compact} />
    </Link>
  );
}
