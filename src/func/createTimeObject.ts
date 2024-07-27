import type { Busy } from '../interfaces';

import { TIME_STEP } from '../CONST';

export default function createTimeObject(
  localL: number,
  localR: number,
  r: number,
  resTime: Busy[],
) {
  const step = TIME_STEP;

  while (localR <= r) {
    resTime.push({
      start: `${String(new Date(localL).getHours()).padStart(2, '0')}:${String(
        new Date(localL).getMinutes(),
      ).padStart(2, '0')}`,
      stop: `${String(new Date(localR).getHours()).padStart(2, '0')}:${String(
        new Date(localR).getMinutes(),
      ).padStart(2, '0')}`,
    });

    localL += step;
    localR = localL + step;
  }
}