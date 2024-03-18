import SONGS from "@/constants/songs";


export default function getRandomSong() {
    const randomIndex = parseInt((Math.random() * ((SONGS.length - 1) - 0) + 0).toFixed())
    return SONGS[randomIndex];
}
