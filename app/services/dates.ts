import {getWeek} from 'date-fns';

type Week = {
  index: number;
  current: boolean;
  // month: number;
}

const WEEK_STARTS_ON = 1;// Monday

export const getWeeksAmount = () => {
  const date = new Date();
  return yearWeeks(date.getFullYear())
}

export const getCurrentWeekNumber = () => {
  // starting from 0
  return getWeek(new Date(), {weekStartsOn: WEEK_STARTS_ON}) - 1
}

export const getWeeks = ():Week[] => {
  const date = new Date();
  const amount =  yearWeeks(date.getFullYear());
  const list = [...Array(amount).keys()];
  return list.map(ind => ({
    index: ind,
    current: getCurrentWeekNumber() === ind
  }))
}

const isLeapYear = (num: number) => num % 4 === 0;
const yearWeeks = (year: number) => isLeapYear(year) ? 53 : 52;
