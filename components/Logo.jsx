import Link from 'next/link';

export default function Logo({ className = '', compact = false }) {
  const iconSize = compact ? 'h-8 w-auto sm:h-9' : 'h-9 w-auto sm:h-10';
  const textSize = compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-[1.75rem]';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/brand/hw-approved-icon-transparent-v1.png" alt="" aria-hidden="true" className={`${iconSize} shrink-0`} />
      <span className={`font-semibold leading-none tracking-[-0.01em] ${textSize}`}>
        <span className="text-[var(--text-primary)]">Hamburg</span>{' '}
        <span className="gradient-text">Websites</span>
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
