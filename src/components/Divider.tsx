import { CSSProperties } from 'react';

export function Divider({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        borderBottom: '1px solid black',
        ...style,
      }}
    ></div>
  );
}
