import { Link } from "react-router-dom";
import { useTranslation } from "~/i18n";

export function Logo({
  className,
  width = "100%",
}: {
  className?: string;
  width?: string;
}) {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      aria-label={t("header.homepageLabel")}
      className="block w-full"
    >
      <svg
        className={className}
        width={width}
        height="36"
        viewBox="0 0 210 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="44" height="44" rx="10" fill="#0F172A" />
        <path
          d="M16.6 12.4C13.6 14.3 12 17.4 12 22C12 26.6 13.6 29.7 16.6 31.6"
          stroke="#BFF164"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.4 12.4C30.4 14.3 32 17.4 32 22C32 26.6 30.4 29.7 27.4 31.6"
          stroke="#BFF164"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 22H25.5M22 18.5V25.5"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="18.5" r="2.7" fill="#38BDF8" />
        <circle cx="18.5" cy="22" r="2.7" fill="#FFFFFF" />
        <circle cx="25.5" cy="22" r="2.7" fill="#FFFFFF" />
        <circle cx="22" cy="25.5" r="2.7" fill="#BFF164" />
        <text
          x="54"
          y="29"
          fill="#FFFFFF"
          fontFamily="Source Sans Pro, Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="25"
          fontWeight="800"
          letterSpacing="0"
        >
          JsonHero
        </text>
        <text
          x="160"
          y="29"
          fill="#BFF164"
          fontFamily="Roboto Mono, ui-monospace, SFMono-Regular, monospace"
          fontSize="20"
          fontWeight="700"
          letterSpacing="0"
        >
          .NET
        </text>
      </svg>
    </Link>
  );
}
