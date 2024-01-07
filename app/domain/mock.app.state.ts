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
];

export const MOCK_STATE = {};
