type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#76B7FF]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/64 md:text-lg">{text}</p> : null}
    </div>
  );
}
