import Image from 'next/image';

export type WorkItemProps = {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
};
export function WorkItem({ image, title, description }: WorkItemProps) {
  return (
    <div className="flex justify-between flex-col workItemBreakpoint:flex-row">
      <div className="flex flex-col justify-between w-full workItemBreakpoint:w-2/5">
        <h3 className="h1 leading-none -mt-2">{title}</h3>
        <p className="base pt-8">{description}</p>
      </div>
      <div className="w-full pt-16 workItemBreakpoint:pt-0 workItemBreakpoint:w-6/12">
        <Image src={image.src} alt={image.alt} layout="responsive" sizes="" />
      </div>
    </div>
  );
}
