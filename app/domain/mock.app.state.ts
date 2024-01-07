import { setMonth } from "date-fns";
import { Initiative } from "./initiative";

const initiativesMock: Initiative[] = [
  {
    id: "01",
    name: "Learn Python",
    startDate: new Date(),
    endDate: setMonth(new Date(), 4),
  },
  { id: "02", name: "Vacation", startDate: setMonth(new Date(), 2), endDate: setMonth(new Date(), 2) },
  { id: "03", name: "Finish LeetCode", startDate: setMonth(new Date(), 5), endDate: setMonth(new Date(), 10) },
];

export const STATE_MOCK = {
  initiatives: initiativesMock,
};
