import Link from 'next/link';

export default function Logo({ className = '', compact = false }) {
  return (
    <img
      src="/brand/hw-website-logo.svg"
      alt="Hamburg Websites"
      className={`${compact ? 'h-9 sm:h-10' : 'h-10 sm:h-12'} w-auto ${className}`}
    />
  );
}

export function LogoLink({ href = '/', className = '', compact = false }) {
  return (
    <Link href={href} className={`inline-flex items-center ${className}`} aria-label="Hamburg Websites Startseite">
      <Logo compact={compact} />
    </Link>
  );
}
