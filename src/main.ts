import type { Busy } from './interfaces';

import sortBusyArray from './func/sortBusyArray';
import createDate from './func/createDate';
import { TIME_STEP } from './CONST';
import createTimeObject from './func/createTimeObject';

const step = TIME_STEP;

const busy: Busy[] = [
  { start: '10:30', stop: '10:50' },
  { start: '18:40', stop: '18:57' },
  { start: '14:40', stop: '15:50' },
  { start: '16:40', stop: '17:20' },
  { start: '20:05', stop: '20:20' },
];

const sortedBusy = sortBusyArray(busy);

let l = createDate('9:00');
let r = sortedBusy[0]?.start
  ? createDate(sortedBusy[0].start)
  : createDate('21:00');

const resTime: Busy[] = [];

for (let i = 0; i < sortedBusy.length; i++) {
  let localL = l;
  let localR = l + step;

  createTimeObject(localL, localR, r, resTime);

  l = createDate(sortedBusy[i].stop);
  r = sortedBusy[i + 1]
    ? createDate(sortedBusy[i + 1].start)
    : createDate('21:00');

  if (i === sortedBusy.length - 1) {
    let localL = l;
    let localR = l + step;

    createTimeObject(localL, localR, r, resTime);
  }
}

console.log(resTime);
