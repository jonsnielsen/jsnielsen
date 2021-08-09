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
    <div className="flex justify-between">
      <div style={{ width: '40%' }} className="flex flex-col justify-between">
        <h3 className="h1 leading-none -mt-2">{title}</h3>
        <p className="pb-1">{description}</p>
      </div>
      <div style={{ width: '55%' }}>
        <Image src={image.src} alt={image.alt} layout="responsive" sizes="" />
      </div>
    </div>
  );
}
