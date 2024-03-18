import { atom } from 'nanostores'

export interface CurrentDevice {
  showBanner: boolean;
  type: 'mobile' | 'desktop' | 'tablet';
  name: string;
}

export const $currentDevice = atom<CurrentDevice>({
  showBanner: true,
  type: 'desktop',
  name: "Jon Snow's Macbook Pro",
})

export function setCurrentDevice(newDevice: CurrentDevice) {
  $currentDevice.set(newDevice);
}

export function getCurrentDevice() {
  return $currentDevice.get();
}

export function toggleCurrentDevice() {
  const newValue = !$currentDevice.get().showBanner;
  $currentDevice.set({
    ...$currentDevice.get(),
    showBanner: newValue,
  });
}
