import * as React from "react";
import classnames from "classnames";
import css from "./AudioPlayer.module.scss";

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement> {
  src: string;
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  className,
  ...props
}) => {
  //  const [isPlaying, setIsPlaying] = React.useState(false);
  //  const [currentTime, setCurrentTime] = React.useState(0);
  //  const [duration, setDuration] = React.useState(0);
  //  const [audioFile, setAudioFile] = React.useState<string | null>(null);
  //  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  //  const togglePlay = () => {
  //    if (audioRef.current) {
  //      if (isPlaying) {
  //        audioRef.current.pause();
  //      } else {
  //        audioRef.current.play();
  //      }
  //      setIsPlaying(!isPlaying);
  //    }
  //  };

  //  const handleTimeUpdate = () => {
  //    if (audioRef.current) {
  //      setCurrentTime(audioRef.current.currentTime);
  //      setDuration(audioRef.current.duration);
  //    }
  //  };
  //
  //  const handleLoadedMetadata = () => {
  //    if (audioRef.current) {
  //      setDuration(audioRef.current.duration);
  //      setAudioFile(audioRef.current.src.split("/").pop() || "");
  //    }
  //  };
  //
  //  const formatTime = (timeInSeconds: number) => {
  //    const minutes = Math.floor(timeInSeconds / 60);
  //    const seconds = Math.floor(timeInSeconds % 60);
  //    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  //  };

  const audioClasses = classnames(css.AudioPlayer, className);

  return (
    <div className={audioClasses}>
      <audio controls src={src} {...props}>
        <a href={src}>Download audio</a>
      </audio>

      {/*      <button
        className={css.PlayButton}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <i aria-hidden="true">Pause</i>
        ) : (
          <i aria-hidden="true">Play</i>
        )}
      </button>
      <div className={css.AudioInfo}>
        <p className={css.AudioName}>{audioFile}</p>
        <p className={css.TimeInfo}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        {...props}
        /> */}
    </div>
  );
};

AudioPlayer.displayName = "AudioPlayer";
