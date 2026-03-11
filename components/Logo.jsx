import Link from 'next/link';
import Image from 'next/image';

const FULL_LOGO_SRC = '/brand/official-full-logo.svg';

export default function Logo({ className = '' }) {
  return (
    <Image
      src={FULL_LOGO_SRC}
      alt="Hamburg Websites"
      width={768}
      height={375}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
}

export function LogoLink({ href = '/', className = '' }) {
  return (
    <Link href={href} className={className} aria-label="Hamburg Websites Startseite">
      <Logo />
    </Link>
  );
}
