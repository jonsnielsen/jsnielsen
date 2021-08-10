import Image from 'next/image';
import { Video, VideoProps } from './Video';
// 732 / 500 = 1.464
// 815 / x = 1.464
// x = 815 / 1.464 = 556
// ratio:  0,68
export type WorkItemProps = {
  /**
   * Preferred image dimensions: 815 x 556
   */
  image: {
    src: StaticImageData;
    alt: string;
  };
  video?: VideoProps;
  title: string;
  description: string;
};
export function WorkItem({ image, title, description, video }: WorkItemProps) {
  console.log({ video });

  return (
    <div className="flex justify-between flex-col workItemBreakpoint:flex-row">
      <div className="flex flex-col justify-between w-full workItemBreakpoint:w-2/5">
        <h3 className="h1 leading-none -mt-2">{title}</h3>
        <p className="base pt-8">{description}</p>
      </div>
      <div className="w-full pt-16 workItemBreakpoint:pt-0 workItemBreakpoint:w-6/12">
        {!video && (
          <Image src={image.src} alt={image.alt} layout="responsive" sizes="" />
        )}
        {video && (
          <Video
            src={video.src}
            aspectHeight={video.aspectHeight}
            aspectWidth={video.aspectWidth}
            backgroundColor={video.backgroundColor}
          />
        )}
      </div>
    </div>
  );
}
