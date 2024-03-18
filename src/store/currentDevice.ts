import { atom } from 'nanostores'

interface Device {
  showBanner: boolean;
  type: 'mobile' | 'desktop' | 'tablet';
  name: string;
}

export const $currentDevice = atom<Device>({
  showBanner: true,
  type: 'desktop',
  name: "Jon Snow's Macbook Pro",
})

export function setCurrentDevice(newDevice: Device) {
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
