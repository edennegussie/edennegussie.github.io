type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="font-display bg-gradient-to-r from-teal-600 via-purple-600 to-orange-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500" />
    </div>
  );
}
