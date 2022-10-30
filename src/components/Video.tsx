export type VideoProps = {
  src: string;
  aspectWidth: number;
  aspectHeight: number;
  backgroundColor: string;
};
export function Video({
  src,
  backgroundColor,
  aspectHeight,
  aspectWidth,
}: VideoProps) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor,
        paddingBottom: `${(aspectHeight / aspectWidth) * 100}%`,
      }}
    >
      <video
        className="absolute w-full h-full top-0 left-0 object-cover"
        muted
        playsInline
        preload="metadata"
        loop
        disablePictureInPicture
        disableRemotePlayback
        autoPlay
        controls={false}
      >
        <source type="video/mp4" src={src} />
      </video>
    </div>
  );
}
