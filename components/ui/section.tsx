import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "max-w-6xl",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-16 md:py-24 ${className}`}
    >
      <div
        className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
