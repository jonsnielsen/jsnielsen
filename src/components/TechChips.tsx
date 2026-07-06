export type TechChipsProps = {
  technologies: string[];
  className?: string;
};

export function TechChips({ technologies, className }: TechChipsProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ''}`}>
      {technologies.map((technology) => (
        <li
          key={technology}
          className="text-tiny px-3 py-1 rounded-full"
          style={{ backgroundColor: '#CC7C5D', color: '#FAF8F5' }}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
