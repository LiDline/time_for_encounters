import { Busy } from './interfaces';
import timeForEncounters from './timeForEncounters';

const busy: Busy[] = [
  { start: '10:30', stop: '10:50' },
  { start: '18:40', stop: '18:57' },
  { start: '14:40', stop: '15:50' },
  { start: '16:40', stop: '17:20' },
  { start: '20:05', stop: '20:20' },
];

const times = timeForEncounters(busy);

console.log(times);
