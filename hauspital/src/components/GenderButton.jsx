import { useNavigate } from "react-router-dom";

const GenderButton = ({ text }) => {
  const nav = useNavigate();

  return (
    <div
      className="flex w-[353px] h-[44px] justify-center items-center gap-2 rounded-[var(--Corner-Large,16px)] text-white font-bold bg-col3 px-6 py-2 border-none"
      onClick={() => {
        nav("/address");
      }}
    >
      <div>{text}</div>
    </div>
  );
};

export default GenderButton;
