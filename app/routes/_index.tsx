import {useState} from 'react';
import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/button";
import Initiative from "~/components/initiative";
import Input from "~/components/input";
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
  const [newInitiative, setNewInitiative] = useState('');
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="bg-violet-50		min-h-screen">
      <h1>Welcome to Olfusa - your planning board! Week starts from Monday</h1>
      <div className="flex flex-row align-top">

      <div className="flex flex-row flex-1 flex-wrap">
      {weeks.map(week => {
        return (
          <div key={week.index} className="m-1">
            <Week current={week.current}></Week>
          </div>)
      })}
      </div>
      <div className="flex-1">
      <Initiative message="Initiative 1">
         </Initiative>
      <Initiative message="Initiative 1">
         </Initiative>
      <Initiative message="Initiative 1">
         </Initiative>
      <Initiative message="Initiative 1">
         </Initiative>
      <Input onChange={e => setNewInitiative(e.target.value)}></Input>
      <Button onClick={() => {
        console.log(newInitiative)
      }}></Button>
      </div>
      </div>
    </div>
  );
}
