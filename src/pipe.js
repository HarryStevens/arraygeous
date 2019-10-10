import { deviation } from "./deviation";
import { every } from "./every";
import { extent } from "./extent";
import { flatten } from "./flatten";
import { filter } from "./filter";
import { includes } from "./includes";
import { map } from "./map";
import { max } from "./max";
import { mean } from "./mean";
import { median } from "./median";
import { min } from "./min";
import { random } from "./random";
import { some } from "./some";
import { sort } from "./sort";
import { sum } from "./sum";
import { unique } from "./unique";

const fns = [
  deviation,
  every,
  extent,
  filter,
  flatten,
  includes,
  map,
  max,
  mean,
  median,
  min,
  random,
  some,
  sort,
  sum,
  unique
];

export function pipe(arr){
  const plummer = {};
  plummer.curr = arr;
  fns.forEach(fn => {
    plummer[fn.name] = (...args) => {
      plummer.curr = fn(plummer.curr, ...args);
      return plummer;
    };
  });
  plummer.result = _ => plummer.curr;
  return plummer;
}