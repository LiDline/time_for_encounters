import type { Busy } from './interfaces';

import { END_TIME, START_TIME } from './CONST';
import sortBusyArray from './func/sortBusyArray';
import createDate from './func/createDate';
import createTimeObject from './func/createTimeObject';

export default function timeForEncounters(busy: Busy[]) {
  const sortedBusy = sortBusyArray(busy);

  let l = createDate(START_TIME);
  let r = sortedBusy[0]?.start
    ? createDate(sortedBusy[0].start)
    : createDate(END_TIME);

  const resTime: Busy[] = busy.length ? [] : createTimeObject(l, r, []);

  for (let i = 0; i < sortedBusy.length; i++) {
    createTimeObject(l, r, resTime);

    l = createDate(sortedBusy[i].stop);
    r = sortedBusy[i + 1]
      ? createDate(sortedBusy[i + 1].start)
      : createDate(END_TIME);

    if (i === sortedBusy.length - 1) {
      createTimeObject(l, r, resTime);
    }
  }

  return resTime;
}
