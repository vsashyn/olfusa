import React from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: Props) => {
  return (
    <input
      onChange={props.onChange}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      type="text"
      placeholder="Enter text..."
    />
  );
};

export default Input;
