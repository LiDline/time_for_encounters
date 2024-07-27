import type { Busy } from '../interfaces';

import createDate from './createDate';

export default function sortBusyArray(busy: Busy[]) {
  return busy.sort((a, b) => createDate(a.start) - createDate(b.start));
}
