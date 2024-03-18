import { useEffect, useState } from 'preact/hooks';
import classNames from 'classnames';
import { useStore } from '@nanostores/preact';
import Slider from '@/components-preact/Slider';
import ShuffleButton from '@/components-preact/ShuffleButton';
import RepeatButton from '@/components-preact/RepeatButton';
import { millisToMinutesAndSeconds, mapRange } from "@/utils/time";
import { $nowPlaying, setNowPlaying } from '@/store/nowPlaying';
import getRandomSong from '@/utils/getRandomSong';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
} from "lucide-preact";

export default function MainControls() {

  const { isPlaying, song } = useStore($nowPlaying);
  const [playingInterval, setPlayingInterval] = useState<number | undefined>(undefined);
  const [currentMilliseconds, setCurrentMilliseconds] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      setPlayingInterval(setInterval(updateSongTime, 1000));
    } else {
      clearPlayingInterval();
    }
    return clearPlayingInterval;
  }, [isPlaying]);

  useEffect(() => {
    const mappedValue = mapRange(
      currentMilliseconds,
      0,
      song.duration,
      0,
      100
    );
    setPercent(mappedValue);
  }, [currentMilliseconds]);

  const onPlay = () => setNowPlaying({ isPlaying: true });
  const onPause = () => setNowPlaying({ isPlaying: false });
  const onRestart = () => setCurrentMilliseconds(0)
  const updateSongTime = () => setCurrentMilliseconds(prev => (prev < song.duration - 1000) ? prev + 1000 : 0);
  const onNextSong = () => {
    onRestart();
    setNowPlaying(getRandomSong());
  }

  const clearPlayingInterval = () => {
    clearInterval(playingInterval);
    setPlayingInterval(undefined);
  }

  const onDragEnd = (progressValue) => {
    const mappedMilliseconds = mapRange(
      progressValue,
      0,
      100,
      0,
      song.duration
    );
    setCurrentMilliseconds(mappedMilliseconds);
  }

  return (
    <div className="flex flex-col justify-between col-span-6 px-20 mt-1">
      <div className="flex flex-row justify-center items-center gap-5">

        <ShuffleButton />
        <SkipBack
          onClick={onNextSong}
          className="text-gray-400 hover:text-white hover:cursor-pointer hover:fill-white"
          fill="rgb(156 163 175)"
          strokeWidth={3}
          size={18}
        />

        <button
          onClick={() => onPause()}
          className={classNames([
            { 'hidden': !isPlaying },
            "text-black bg-white rounded-full p-1.5 hover:cursor-pointer hover:scale-105 transition ease-out",
          ])}
        >
          <Pause fill="black" size={18} strokeWidth={1} />
        </button>

        <button
          onClick={onPlay}
          className={classNames([
            { 'hidden': isPlaying },
            "text-black bg-white rounded-full p-1.5 hover:cursor-pointer hover:scale-105 transition ease-out",
          ])}
        >
          <Play fill="black" size={18} />
        </button>

        <SkipForward
          onClick={onNextSong}
          className="text-gray-400 hover:text-white hover:cursor-pointer hover:fill-white"
          fill="rgb(156 163 175)"
          strokeWidth={3}
          size={18}
        />
        <RepeatButton />
      </div>
      <div className="flex flex-row justify-center items-center">
        <span
          id="current-time"
          className="unselectable font-light text-xs text-gray-400"
        >
          {millisToMinutesAndSeconds(currentMilliseconds) || '-:-'}
        </span>
        <Slider
          value={percent}
          onDragEnd={onDragEnd}
        />
        <span
          id="total-time"
          className="unselectable font-light text-xs text-gray-400"
        >
          {millisToMinutesAndSeconds(song.duration) || '-:-'}
        </span>
      </div>
    </div>
  );
}
