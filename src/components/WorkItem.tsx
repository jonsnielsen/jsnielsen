import Image from 'next/image';
import { MediaCover } from './MediaCover';
import { TextAnimationFadeIn } from './TextAnimationFadeIn';
import { TextAnimationLineByLine } from './TextAnimationLineByLine';
import { Video, VideoProps } from './Video';

export type WorkItemProps = {
  /**
   * Preferred image dimensions: 815 x 556
   */
  image: {
    src: any;
    alt: string;
  };
  video?: VideoProps;
  title: string;
  description: string;
  itemNumber: string;
};
export function WorkItem({
  image,
  title,
  description,
  video,
  itemNumber,
}: WorkItemProps) {
  return (
    <div className="relative flex justify-between flex-col workItemBreakpoint:flex-row py-24">
      <div className="flex flex-col justify-between w-full workItemBreakpoint:w-2/5">
        <span className="absolute text-tiny top-6">{itemNumber}</span>
        <h3 className="h1 leading-none -mt-2">
          <TextAnimationLineByLine>{title}</TextAnimationLineByLine>
        </h3>
        <p className="base pt-8">
          <TextAnimationFadeIn interSectionOptions={{ threshold: 0 }}>
            {description}
          </TextAnimationFadeIn>
        </p>
      </div>
      <div className="relative overflow-hidden w-full pt-16 workItemBreakpoint:pt-0 workItemBreakpoint:w-6/12">
        <MediaCover />
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
