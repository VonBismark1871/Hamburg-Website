import Link from 'next/link';

export default function Logo({ className = '', compact = false }) {
  const iconSize = compact ? 'h-8 w-auto sm:h-9' : 'h-9 w-auto sm:h-10';
  const textSize = compact ? 'text-xl sm:text-[1.65rem]' : 'text-2xl sm:text-[1.85rem]';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/hw-approved-icon-transparent-v1.png"
        alt=""
        aria-hidden="true"
        className={`${iconSize} mt-[1px] shrink-0`}
      />
      <span className={`font-serif font-normal leading-none tracking-[-0.015em] ${textSize}`}>
        <span className="text-[color:var(--color-ink)]">Hamburg</span>{' '}
        <span className="text-[color:var(--color-accent)]">Websites</span>
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
