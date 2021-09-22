import React, {
  memo,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  ReactElement,
  ReactNode,
  ComponentType,
} from 'react';

interface LineWrapperProps<T = any> {
  /**
   * The current index of the line.
   */
  lineIndex: number;
  /**
   * Extra props forwarded from SplitText.
   */
  children?: any;
}

export type SplitTextProps = {
  text: string;
  LineWrapper: ComponentType<LineWrapperProps>;
};

export const SplitText = memo(function SplitText({
  text,
  LineWrapper,
}: SplitTextProps) {
  const [key, setKey] = useState(0);
  const initialElRef = useRef<HTMLElement>(null);
  const [lines, setLines] = useState<Element[][]>();

  console.log('split text rerendering');

  // const onResize = debounce(() => setKey((v) => v + 1), 300);

  useEffect(() => {
    // window.addEventListener('resize', onResize);
    // return () => window.removeEventListener('resize', onResize);
  }, []);
  useLayoutEffect(() => {
    const initialEl = initialElRef.current;

    if (!initialEl) return;

    setLines(splitElementIntoLines(initialEl));
  }, [text]);

  if (lines !== undefined) {
    return (
      <span>
        {lines.map((line, index) => (
          <LineWrapper key={index} lineIndex={index}>
            {line.map((element, index) => (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: element.innerHTML }}
              />
            ))}
          </LineWrapper>
        ))}
      </span>
    );
  }

  // This is what is initially rendered, and will be used to calculate the lines from
  return (
    <span ref={initialElRef}>
      {text.split(' ').map((word, i) => (
        <span key={i}>{word} </span>
      ))}
    </span>
  );
});

export function debounce(callback: Function, wait: number, immediate = false) {
  let timeout: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}

function splitElementIntoLines(el: Element): Element[][] {
  let prevTop: number | undefined;
  let lines: Element[][] = [[]];
  Array.from(el.children).forEach((child, i) => {
    const { top } = child.getBoundingClientRect();

    if (i === 0) prevTop = top;

    if (top !== prevTop) {
      prevTop = top;
      lines.push([]);
    }

    lines[lines.length - 1].push(child);
  });
  return lines;
}
