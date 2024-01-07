import React from "react";

interface MessageBoxProps {
  message: string;
}

const Initiative: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <div className="w-80 p-2 m-2 shadow-md border-slate-400 border-2 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default Initiative;
