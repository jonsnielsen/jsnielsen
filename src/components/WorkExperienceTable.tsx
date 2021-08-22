import { Divider } from './Divider';

export type WorkExperienceEntry = {
  year: string;
  company: string;
  role: string;
};

export type WorkExperienceTableProps = {
  entries: WorkExperienceEntry[];
  className?: string;
};

/**
 * A css query will decide which version to use (large or small) as the table can't fit on mobile
 */
export function WorkExperienceTable({
  entries,
  className,
}: WorkExperienceTableProps) {
  const tableSmall = (() => {
    const classNameEntryWrapper = 'flex';

    const classNameKey = 'w-5/12 tiny:w-1/3';
    const classNameValue = 'w-7/12 tiny:w-2/3';

    return (
      <div className="flex md:hidden pb-1 w-full">
        <ul className="w-full">
          {entries.map((entry, i) => (
            <li key={i}>
              <div className={`${(i !== 0 && 'py-4') || 'mb-4'}`}>
                <div className={classNameEntryWrapper}>
                  <span className={classNameKey}>Year</span>
                  <span className={classNameValue}>{entry.year}</span>
                </div>
                <div className={classNameEntryWrapper}>
                  <span className={classNameKey}>Company</span>
                  <span className={classNameValue}>{entry.company}</span>
                </div>
                <div className={classNameEntryWrapper}>
                  <span className={classNameKey}>Role</span>
                  <span className={classNameValue}>{entry.role}</span>
                </div>
              </div>
              <Divider />
            </li>
          ))}
        </ul>
      </div>
    );
  })();

  return (
    <div className={className}>
      {/* Large version */}
      <div className="hidden md:block">
        <div className="flex max-w-6xl pb-1">
          <span className="w-1/5">Year</span>
          <span className="w-1/3">Company</span>
          <span>Role</span>
        </div>
        <Divider />
        <ul>
          {entries.map((entry, i) => (
            <li key={i}>
              <div className="flex max-w-6xl my-8">
                <span className="w-1/5">{entry.year}</span>
                <span className="w-4/12">{entry.company}</span>
                <span>{entry.role}</span>
              </div>
              <Divider />
            </li>
          ))}
        </ul>
      </div>
      {/* Small version */}
      {tableSmall}
    </div>
  );
}
