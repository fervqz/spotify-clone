import { atom } from 'nanostores';
import getRandomSong from '../utils/getRandomSong';

export interface NowPlaying {
    isPlaying: boolean;
    isLiked: boolean;
    song: {
        cover: string;
        name: string;
        artist: string;
        duration: number;
    },
}

export const $nowPlaying = atom<NowPlaying>(getRandomSong())

export function setNowPlaying(newNowPlaying: any) {
    $nowPlaying.set({
        ...$nowPlaying.get(),
        ...newNowPlaying,
    });
}

export function getNowPlaying() {
    return $nowPlaying.get();
}
