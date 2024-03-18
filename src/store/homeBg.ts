import { atom } from 'nanostores'

export const $homeBg = atom<string>('from-[#353535a2]')

export function setHomeBg(newBg: string) {
  $homeBg.set(newBg);
}

export function getHomeBg() {
  return $homeBg.get();
}
