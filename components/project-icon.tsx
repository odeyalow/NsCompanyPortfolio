import type { StaticImageData } from "next/image";
import Image from "next/image";

type ProjectIconProps = {
  title: string;
  accent: string;
  icon?: StaticImageData;
  large?: boolean;
};

function getInitials(title: string) {
  return title
    .split(/[\s:.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function ProjectIcon({ title, accent, icon, large = false }: ProjectIconProps) {
  const sizeClass = large ? "h-24 w-24 rounded-[24px]" : "h-16 w-16 rounded-[18px]";
  const paddingClass = large ? "p-5" : "p-4";

  return (
    <div
      className={`relative ${sizeClass} shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)]`}
      style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, ${accent}2d, transparent 65%)`
      }}
    >
      <div className={`relative flex h-full w-full items-center justify-center ${paddingClass}`}>
        {icon ? (
          <div className="relative h-full w-full">
            <Image
              src={icon}
              alt={`${title} icon`}
              fill
              className="object-contain"
              sizes={large ? "96px" : "64px"}
            />
          </div>
        ) : (
          <span className="font-display text-base font-semibold tracking-[0.18em] text-[var(--text-primary)]">
            {getInitials(title)}
          </span>
        )}
      </div>
    </div>
  );
}
