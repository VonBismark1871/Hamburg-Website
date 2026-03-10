import Link from 'next/link';

function LogoMark({ className = '', title = 'HW Monogram' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <rect width="64" height="64" rx="12" fill="#f8fafc" />
      <path d="M12 16h8v13h10V16h8v32h-8V35H20v13h-8z" fill="#0f183d" />
      <path d="M40 16h7l4 21 4-21h7l-7 32h-8l-7-32z" fill="#3aa9df" />
    </svg>
  );
}

export default function Logo({ variant = 'full', className = '', iconClassName = '', showIcon = true }) {
  if (variant === 'icon') {
    return <LogoMark className={className} />;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {showIcon ? <LogoMark className={`h-6 w-6 ${iconClassName}`} title="Hamburg Websites Monogram" /> : null}
      <span className="inline-flex items-baseline gap-1 leading-none">
        <span className="text-[1.08rem] font-semibold tracking-[-0.02em] text-[#0f183d] sm:text-[1.14rem]">Hamburg</span>
        <span className="text-[1.08rem] font-semibold tracking-[-0.02em] text-[#3aa9df] sm:text-[1.14rem]">Websites</span>
      </span>
    </span>
  );
}

export function LogoLink({ href = '/', className = '', showIcon = true }) {
  return (
    <Link href={href} className={className} aria-label="Hamburg Websites Startseite">
      <Logo showIcon={showIcon} />
    </Link>
  );
}
