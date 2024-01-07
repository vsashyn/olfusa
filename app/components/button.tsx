type Props = {
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Add
    </button>
  );
};

export default Button;
