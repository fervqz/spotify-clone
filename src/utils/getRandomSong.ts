import SONGS from "@/constants/songs";

function getRandomMinMax(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}

export default function getRandomSong() {
    return SONGS[getRandomMinMax(0, SONGS.length - 1)];
}
