import type { MetaFunction } from "@remix-run/node";
import { Week } from "~/components/week";
import { getWeeks } from "~/services/dates";

export const meta: MetaFunction = () => {
  return [
    { title: "Olfusa" },
    { name: "description", content: "Plan you initiatives easily!" },
  ];
};

export default function Index() {
  const weeks = getWeeks();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Olfusa - your planning board! Week starts from Monday</h1>
      <div className="flex flex-row flex-wrap">
      {weeks.map(week => {
        return (
          <div key={week.index} className="m-1">
            <Week current={week.current}></Week>
          </div>)
      })}
      </div>
    </div>
  );
}
