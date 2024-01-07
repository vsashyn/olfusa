import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/button";
import Initiative from "~/components/initiative";
import Input from "~/components/input";
import { Week } from "~/components/week";
import { getWeeks } from "~/services/dates";
import { STATE_MOCK } from "~/domain/mock.app.state";

export const meta: MetaFunction = () => {
  return [{ title: "Olfusa" }, { name: "description", content: "Plan you initiatives easily!" }];
};

export default function Index() {
  const weeks = getWeeks();
  const [newInitiative, setNewInitiative] = useState("");
  const [state, setNewState] = useState(STATE_MOCK);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="bg-violet-50		min-h-screen">
      <h1>Welcome to Olfusa - your planning board! Week starts from Monday</h1>
      <div className="flex">
        <div className="flex flex-1 flex-row flex-wrap">
          <div className="flex flex-row flex-wrap">
            {weeks.map((week) => {
              return (
                <div key={week.index} className="m-1">
                  <Week current={week.current}></Week>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          {state.initiatives.map((i) => {
            return <Initiative key={i.id} message={i.name}></Initiative>;
          })}
          <Input value={newInitiative} onChange={(e) => setNewInitiative(e.target.value)}></Input>
          <Button
            onClick={() => {
              if (newInitiative === "") return;
              STATE_MOCK.initiatives.push({
                id: new Date().toISOString(),
                name: newInitiative,
                endDate: new Date(),
                startDate: new Date(),
              });
              setNewState({ ...STATE_MOCK });
              setNewInitiative("");
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
